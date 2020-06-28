var context = document.getElementById("chart-area").getContext("2d");
context.canvas.width = 600;
context.canvas.height = 350;
// rgb(35, 197, 62)
var config = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [1,1,1,1],
			backgroundColor: [
				window.chartColors = "rgb(35, 197, 62)",
				// window.chartColors = "#0078d7",
				// window.chartColors = "rgb(255,165,36)",
				// window.chartColors = "rgba(197,35,42)"
			],
		}],
		labels: [
			
			'Movimentação geral',
			
		]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Ocorrencias dentro da estação',
			fontSize: 16,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};

function generateRandomData() {
	let value_1 = parseInt(Math.random() * 70) + 1;
	
	let value_2 = parseInt(Math.random() * 70) + 1;
	let value_3 = parseInt(Math.random() * 70) + 1;
	let value_4 = parseInt(Math.random() * 70) + 1;

	let values = [value_1, value_2, value_3, value_4];

	config.data.datasets[0].data = values;

	textodado1.innerHTML = `${value_1}%`;
	textodado2.innerHTML = `${value_2}%`;
	textodado3.innerHTML = `${value_3}%`;
	textodado4.innerHTML = `${value_4}%`;

	myDoughnut.update();
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
// 	window.myDoughnut = new Chart(ctx, config);

// };


