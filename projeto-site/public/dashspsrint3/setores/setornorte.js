

const fksensor =2;
var context_norte = document.getElementById("graficonorte").getContext("2d");


var config_norte = {
    type: 'line',
    data: {
        datasets: [{
            label: "Switch x Time",
            type: 'line',
            borderColor: ['#ae3f3f'],
            backgroundColor: ['white']
        }]
    },
    options: {
        scales: {
            xAxes: [{
                //type: 'value',
                distribution: 'series',
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Switch'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        animation: {
            duration: 0
        }
    }
};

let chartnorte = new Chart(context_norte, config_norte);

function testando() {

   
    let http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/api/mapaDash/${fksensor}`, false);
    http.send(null);
    var alo = JSON.parse(http.responseText);
 
    plotar(alo.valorSensor, chartnorte);
}

function plotar(valorsensor, grafico, ) {

    let data = new Date();
    let momento = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    grafico.data.labels.push(momento);

    let valorgrafico;
    if (grafico.data.labels.length >5) {
        grafico.data.labels.shift();
        grafico.data.datasets[0].data.shift();
    }
    if(valorsensor==0){
        valorgrafico= (Math.random()*5)/10;
    }
    else{
        valorgrafico= (Math.random()*5+5)/10;
    }

    grafico.data.datasets[0].data.push(valorgrafico);
    console.log(valorgrafico,valorsensor);


    grafico.update();
}

window.onload = function(){
    setInterval(testando,2000);
    
}
