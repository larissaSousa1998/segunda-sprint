    let contador=1;

    let media1=0;
    let media2=0;
    let media3=0;
    let media4=0;
function testando(fksensor) {

    let grafico = null;
    let http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/api/mapaDash/${fksensor}`, false);
    http.send(null);
    var alo = JSON.parse(http.responseText);
    console.log(alo);
   
    contador >=4? contador =1:contador++;

    if (fksensor == 1) {
        if(alo.valorSensor==1){
            media1++;
        }

        grafico = chartleste
    } else if (fksensor == 2) {
        grafico = chartnorte

    } else if (fksensor == 3) {
        grafico = chartoeste
    } else {
        grafico = chartsul
    }



    plotar(alo.valorSensor, grafico);
    

}

function plotar(valorsensor, grafico, ) {

    let data = new Date();
    let momento = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    grafico.data.labels.push(momento);
    if (grafico.data.labels.length > 5) {
        grafico.data.labels.shift();
        grafico.data.datasets[0].data.shift();
    }
    grafico.data.datasets[0].data.push(valorsensor);


    grafico.update();
}