const express = require('express');
const { ArduinoDataTemp } = require('./newserial')
const { ArduinoDataHumidity } = require('./serialHumidity')
const { ArduinoDataSwitch } = require('./serialSwitch')
const { ArduinoDataLuminosity } = require('./serialLuminosidity')
const db = require('./database');
const db2 = require('./database');
const router = express.Router();


router.get('/', (request, response, next) => {

    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataTemp.List.length).toFixed(2);
    let sumHour = ArduinoDataTemp.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataTemp.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataTemp.ListHour,
        totalHour: ArduinoDataTemp.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoDataHumidity.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataHumidity.List.length).toFixed(2);
    let sumHour = ArduinoDataHumidity.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataHumidity.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataHumidity.List,
        total: ArduinoDataHumidity.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataHumidity.ListHour,
        totalHour: ArduinoDataHumidity.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

router.get('/switch', (request, response, next) => {

    let sum = ArduinoDataSwitch.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataSwitch.List.length).toFixed(2);
    let sumHour = ArduinoDataSwitch.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataSwitch.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataSwitch.List,
        total: ArduinoDataSwitch.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataSwitch.ListHour,
        totalHour: ArduinoDataSwitch.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

router.get('/luminosity', (request, response, next) => {

    let sum = ArduinoDataLuminosity.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataLuminosity.List.length).toFixed(2);
    let sumHour = ArduinoDataLuminosity.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataLuminosity.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataLuminosity.List,
        total: ArduinoDataLuminosity.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataLuminosity.ListHour,
        totalHour: ArduinoDataLuminosity.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour
    });






});

function agora() {
    const momento_atual = new Date();
    const retorno = `${momento_atual.toLocaleDateString()} ${momento_atual.toLocaleTimeString()}`;
    console.log(`Data e hora atuais: ${retorno}`);
    return retorno;
}

router.post('/sendData', (request, response) => {
    // temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length -1];

    //luminosidade = ArduinoDataLuminosity.List[ArduinoDataLuminosity.List.length -1]

    evento = ArduinoDataSwitch.List[ArduinoDataSwitch.List.length - 1];




    const registros_mantidos_tabela_sensor = 3000;






    let fk = parseInt(Math.random() * 130 + 1);

    let script1 = `
    INSERT into tbDadoSensor (valorSensor, dataEntradaDado, fkSensor)
    values (${evento}, CONVERT(Datetime, '${agora()}'), ${fk});
    
    
    
    delete from tbDadoSensor where codSensor not in 
    (select top ${registros_mantidos_tabela_sensor} codSensor from tbDadoSensor order by   codSensor  desc)`;


    db.conectar().then(async () => {


        return await db.sql.query(script1)
            .then(() => {
                console.log('Registro inserido com sucesso!');
            }).catch(error => {
                console.log(error);
            });


    }).catch(erro => {

        console.error(`Erro ao tentar registrar aquisição na base: ${erro}`);
        console.log(fk);
    }).finally(() => {
        try {
            // db.sql.close();
        } catch (e) {

        }
    });



    response.sendStatus(200);
}),

    router.get("/mapData", (request, response) => {
        let script1 = "select * from tbDadoSensor, tbSensor,tbLocal where fkSensor=tbSensor.codSensor and fkLocal=codLocal"
        db.conectar().then(async () => {


            return await db.sql.query(script1)
                .then((res) => {


                    response.send(res);
                }).catch(error => {
                    console.log(error);
                });


        }).catch(erro => {

            console.error(`Erro ao tentar registrar aquisição na base: ${erro}`);

        }).finally(() => {
            try {
                // db.sql.close();
            } catch (e) {

            }
        });
    }



    )

// --------------------------------------------------------------------

router.get("/novarota/:dias", (request, response) => {
    let dias = request.params.dias;
    dias=(24*60*60*1000)*dias;
    let agora = new Date();
    agora.setTime(agora.getTime()-dias);

    let ano = agora.getFullYear();
    let mes = agora.getMonth()+1;
    let dia = agora.getDate();

    let momento = `${ano}-${mes}-${dia}`;
    let script1 = `select count (tbDadoSensor.codSensor) as count, fkSensor,distanciaLocal as x,alturaSensor as y,areaCaptacaoLocal as radius from tbDadoSensor, tbSensor,tbLocal
    where fkSensor=tbSensor.codSensor and fkLocal=codLocal and
     dataEntradaDado between '${momento} 00:00:00' and '${momento} 23:59:59' and 
     valorSensor =1 group by 
   fkSensor,distanciaLocal, alturaSensor,areaCaptacaoLocal`;
   console.log(momento);


    db.conectar().then(async () => {


        return await db.sql.query(script1)
            .then((res) => {


                response.send(res);
            }).catch(error => {
                console.log(error);
            });


    }).catch(erro => {

        console.error(`Erro ao tentar registrar aquisição na base: ${erro}`);

    }).finally(() => {
        db.sql.close();
    });
}



)
// ==============================================================

router.get("/mapaDash/:id", (request, response) => {
    let teste = request.params.id;

    let retorno = `SELECT * FROM tbDadoSensor WHERE fkSensor =${teste}`
    db.conectar().then(async () => {
        return await db.sql.query(retorno)
            .then((res) => {

                let ultimoregistro = res.recordset[res.recordset.length - 1];
                response.json({
                    valorSensor: ultimoregistro.valorSensor,
                    dataEntradaDado: ultimoregistro.dataEntradaDado,
                })



            }).catch(error => {
                console.log(error);
            });

    }).catch(erro => {
        console.log(`erro ao tentar selecionar aquisicao na base : ${erro}`);

    }).finally(() => {
        db.sql.close();
    });
})

module.exports = router;