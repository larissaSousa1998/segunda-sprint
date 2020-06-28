var context_oeste = document.getElementById("graficooeste").getContext("2d");
fksensor=3;

var config_oeste = {
    type: 'line',
    data: {
        datasets: [{
            label: "Switch x Time",
            type: 'line',
            borderColor: ['#ae3f3f'],
            backgroundColor: ['orange']
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

var chartoeste = new Chart(context_oeste, config_oeste);
function testando() {

   
    let http = new XMLHttpRequest();
    http.open('GET', `http://localhost:3000/api/mapaDash/${fksensor}`, false);
    http.send(null);
    var alo = JSON.parse(http.responseText);
 
    plotar(alo.valorSensor, chartoeste);
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
