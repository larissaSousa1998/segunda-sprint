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
						window.chartColors = "rgb(255,165,36)",
						window.chartColors = "#0078d7",
						window.chartColors = "rgba(197,35,42)",
						window.chartColors = "rgb(35, 197, 62)"
					],
				}],
				labels: [
					'Muito Baixa',
					'Normal',
					'Muito Alta',
					'ideal'
				]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Média de temperaturas ao longo do dia',
					fontSize: 16,
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

		function generateRandomData() {
			let value_1 = parseInt(Math.random() * 5) + 1;
			let value_2 = parseInt(Math.random() * 5) + 1;
			let value_3 = parseInt(Math.random() * 5) + 1;
			let value_4 = parseInt(Math.random() * 5) + 1;

			let values = [value_1, value_2, value_3, value_4];

			config.data.datasets[0].data = values;
			myDoughnut.update();
		}

		setInterval(() => {
			generateRandomData()
		}, 5000);

		window.onload = function() {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myDoughnut = new Chart(ctx, config);	
		};