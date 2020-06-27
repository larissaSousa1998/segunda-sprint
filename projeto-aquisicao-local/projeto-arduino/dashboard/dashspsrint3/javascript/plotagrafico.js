    let contador=1;
    let contador1=0;

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
    // console.log(alo);
   
    contador >=4? contador =1:contador++;

    if (fksensor == 1) {
        
        
        grafico = chartleste
        
       
       
        // if(contador1<2){
        //     media1+=alo.valorSensor;
        //     contador1++;
        // } else {
        //     plotar(media1,grafico);
        // }
        // console.log("contador",contador1,alo.valorSensor);

    
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