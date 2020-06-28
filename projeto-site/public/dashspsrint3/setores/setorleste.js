
const contador1 = 0;
let valorLeste = document.querySelector("#textodado1");

const fksensor =1;
var context_leste = document.getElementById("graficoleste").getContext("2d");


var config_leste = {
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

let chartleste = new Chart(context_leste, config_leste);

function testando() {

   
    let http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/api/mapaDash/${fksensor}`, false);
    http.send(null);
    var alo = JSON.parse(http.responseText);
 
    plotar(alo.valorSensor, chartleste);
    if(alo.valorSensor==1){

        contador>=100? contador=contador:contador+=10;
    } else{
        
        contador<=0? contador=contador:contador-=10;
    }
    valorLeste.innerHTML=contador.value;
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
