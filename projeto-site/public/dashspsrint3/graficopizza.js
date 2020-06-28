window.feed = function (callback) {
  var tick = {};
  tick.plot0 = Math.floor((Math.random() * 89) + 10);
  if (tick.plot0 >= 80) {
    
  }
  callback(JSON.stringify(tick));
};

var myConfig = {
  type: "gauge",
  globals: {
    fontSize: 15
  },
  plotarea: {
    marginTop: 100
  }, plot: {
    size: '30%',
    valueBox: {
      placement: 'center',
      text: '%v', //default
      fontSize: 15,
      rules: [{
        rule: '%v <= 10',
        text: '%v<br>Very Low'
      },
      {
        rule: '%v > 10 && %v <= 20',
        text: '%v<br>Very Low'
      }, {
        rule: '%v > 20 && %v <= 30',
        text: '%v<br>Low'
      }, {
        rule: '%v > 30 && %v <= 40',
        text: '%v<br>Low'
      }, {
        rule: '%v > 40 && %v <= 50',
        text: '%v<br>Medium'
      }, {
        rule: '%v > 50 && %v <= 60',
        text: '%v<br>Medium'
      }, {
        rule: '%v > 60 && %v <= 70',
        text: '%v<br>High'
      }, {
        rule: '%v > 70 && %v <= 80',
        text: '%v<br>Very high'
      }, {
        rule: '%v > 80 && %v <= 90',
        text: '%v<br>Very high'
      }, {
        rule: '%v > 90 && %v <= 100',
        text: '%v<br>Ultra high'
      }
      ]
    }
  },
  tooltip: {
    borderRadius: 5
  },
  scaleR: {
    aperture: 180,
    minValue: 10,
    maxValue: 100,
    step: 10,
    center: {
      visible: false
    },
    tick: {
      visible: true
    },
    item: {
      offsetR: 0,
      rules: [{
        rule: '%i == 1',
        offsetX: 15
      }]
    },
    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
    ring: {
      size: 20,
      rules: [{
        rule: '%v <= 10',
        backgroundColor: 'red'
      },
      {
        rule: '%v >= 20 && %v < 30',
        backgroundColor: '#ff3300'
      }, {
        rule: '%v >= 30 && %v < 40',
        backgroundColor: '#ff9933'
      }, {
        rule: '%v >= 40 && %v < 50',
        backgroundColor: 'orange'
      }, {
        rule: '%v >= 50 && %v < 60',
        backgroundColor: '#ffff00'
      }, {
        rule: '%v >= 60 && %v < 70',
        backgroundColor: '#ccff33'
      }, {
        rule: '%v >= 70 && %v < 80',
        backgroundColor: '#ccff66'
      }, {
        rule: '%v >= 80 && %v < 90',
        backgroundColor: '#66ff66'
      }, {
        rule: '%v >= 90 && %v < 100',
        backgroundColor: '#66ff99'
      },
      {
        rule: '%v >= 100',
        backgroundColor: '#00ffff'
      }
      ]
    }
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000
  },
  series: [{
    values: [10], // starting value
    backgroundColor: 'black',
    indicator: [2, 2, 2, 2, 0.5],
    animation: {
      effect: 2,
      method: 1,
      sequence: 4,
      speed: 900
    },
  }]
};

zingchart.render({
  id: 'chart-area',
  data: myConfig,
  height: 450,
  width: '85%'
});

function generateRandomData() {
	let value_1 = parseInt(Math.random() * 99) + 1;
	
	let value_2 = parseInt(Math.random() * 99) + 1;
	let value_3 = parseInt(Math.random() * 99) + 1;
	let value_4 = parseInt(Math.random() * 99) + 1;

	

	

	textodado1.innerHTML = `${value_1}%`;
	textodado2.innerHTML = `${value_2}%`;
	textodado3.innerHTML = `${value_3}%`;
	textodado4.innerHTML = `${value_4}%`;


}

setInterval(() => {
	generateRandomData()
}, 4000);


function chamarhorario() {

	var agora = new Date();
	var agora2= new Date();

	var hora = agora.getHours();
	var minuto = agora.getMinutes();
	var segundo = agora.getSeconds();

	var mes = agora2.getUTCMonth()+1;
	var dia = agora2.getDate();
	var ano = agora2.getFullYear();


	var momento = `Horario: ${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}<br>Data: ${dia<9? dia+'0':dia}/${mes>9?mes+'0':'0'+mes}/${ano} `;
	horario.innerHTML=momento;
	// 

	// const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
	// 	"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	// let dateObj = new Date();
	// let month = monthNames[dateObj.getMonth()];
	// let day = String(dateObj.getDate()).padStart(2, '0');
	// let year = dateObj.getFullYear();
	
	// let a = new Date().toJSON().slice(0,10)
	
	
	
	// let output = month + '\n' + day + ',' + year;
}

setInterval(() => {
	chamarhorario()

}, 1000);


// window.onload = function () {
// 	var ctx = document.getElementById('chart-area').getContext('2d');
// 	window.gouge = new Chart(ctx, config_ponteiro);

// };


