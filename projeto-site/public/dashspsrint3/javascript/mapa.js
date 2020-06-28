function iniciamapa() {
    console.log('iniciou')
    map();
    if(interval) {
        clearInterval(interval);
    }
}


let interval;
var heatmapInstance = h337.create({
    container: document.querySelector("#heatmapContainer"),
});

setInterval(() => {
    console.log('resetou');
    clearInterval(interval);
    map();
}, 20000);


function map(reset) {
    let amount = [];
    interval = setInterval(() => {

        let result;
        var http = new XMLHttpRequest();
        const url = 'http://localhost:3000/api/mapData'
        http.open("get", url);
        http.responseType = "text";
        http.send();
        http.onreadystatechange = (res) => {
            let datao;
            try {
                datao = JSON.parse(http.responseText);
            } catch (e) { }
            if (datao) {


                var points = [];
                var max = 199820;
                var min = 0;
                var width = 850;
                var height = 490;

                for (let d of datao.recordset) {
                    let achou = false;
                    let value;
                    console.log(amount);
                    for (let s of amount) {
                        if (s.id == d.fkLocal) {
                            s.value += d.valorSensor;
                            achou = true;
                            break;
                        }
                    }
                    if (!achou) {
                        amount.push({ id: d.fkLocal ? d.fkLocal : 0, value: d.valorSensor ? d.valorSensor : 10 });
                    }

                    for (let s of amount) {
                        if (s.id == d.fkLocal) {
                            value = s.value;
                            break;
                        }
                    }

                    points.push({
                        x: d.distanciaLocal, y: d.alturaSensor, value: value, radius: d.areaCaptacaoLocal * 20,
                    })

                }


                var data = {
                    max: max,
                    min: min,
                    data: points,
                };

                heatmapInstance.setData(data);
            }


        }
    }, 100);
}


