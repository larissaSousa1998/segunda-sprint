var context_norte = document.getElementById("graficonorte").getContext("2d");


var config_norte = {
    type: 'line',
    data: {
        datasets: [{
            label: "Switch x Time",
            type: 'line',
            borderColor: ['#ae3f3f'],
            backgroundColor: ['green']
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

var chartnorte = new Chart(context_norte, config_norte);
