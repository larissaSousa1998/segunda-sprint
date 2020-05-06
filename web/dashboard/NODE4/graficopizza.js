var context = document.getElementById("chart-area").getContext("2d");
	context.canvas.width = 600;
	context.canvas.height = 350;
// rgb(35, 197, 62)
		var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [1, 1, 1, 1],
					backgroundColor: [
						window.chartColors = "rgb(35, 197, 62)",
						window.chartColors = "#0078d7",
						window.chartColors = "rgb(255,165,36)",
						window.chartColors = "rgba(197,35,42)"
					],
				}],
				labels: [
					'Novos passageiros',
					'Movimentação constante',
					'Movimentação lenta',
					'Paralisação'
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
			let value_1 = parseInt(Math.random() * 7) + 1;
			let value_2 = parseInt(Math.random() * 7) + 1;
			let value_3 = parseInt(Math.random() * 7) + 1;
			let value_4 = parseInt(Math.random() * 7) + 1;

			let values = [value_1, value_2, value_3, value_4];

			config.data.datasets[0].data = values;
			textodado1.innerHTML=value_1;
			textodado2.innerHTML=value_2;
			textodado3.innerHTML=value_3;
			textodado4.innerHTML=value_4;
			myDoughnut.update();
		}

		setInterval(() => {
			generateRandomData()
		}, 4000);

		window.onload = function() {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myDoughnut = new Chart(ctx, config);	
		};