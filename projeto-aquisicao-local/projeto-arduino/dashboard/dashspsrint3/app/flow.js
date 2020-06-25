
			this.time = 0;

			function get_data() {

				var http = new XMLHttpRequest();
				http.open('GET', 'http://localhost:3000/api', false);
				http.send(null);

				var obj = JSON.parse(http.responseText);
				if (obj.data.length == 0) {
					return;
				}

				var _lastIndexTemp = this.lastIndexTemp;
				this.lastIndexTemp = obj.data.length;
				listTemp = obj.data.slice(_lastIndexTemp);




			}

			//Second Graphic




			//Função para obter os dados de temperatura do server


			//Esse atributo dentro do contexto serve para saber qual foi o último índice processado, assim eliminado os outros elementos na
			//hora de montar/atualizar o gráfico




			//Thirty Graphic

			var context3 = document.getElementById("chart-switch").getContext("2d");
			context3.canvas.width = 1000;
			context3.canvas.height = 300;

			var switch_sensor = {
				type: 'line',
				data: {
					datasets: [{
						label: "Switch x Time",
						type: 'line',
						borderColor: ['#ae3f3f'],
						backgroundColor: ['#c97f7f']
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

			var chartSwitch = new Chart(context3, switch_sensor);

			//Função para obter os dados de temperatura do server

			//Esse atributo dentro do contexto serve para saber qual foi o último índice processado, assim eliminado os outros elementos na
			//hora de montar/atualizar o gráfico
			this.lastIndexTempHumidity = 0;
			this.timeSwitch = 0;

			function get_switch() {

				var http = new XMLHttpRequest();
				http.open('GET', 'http://localhost:3000/api/switch', false);
				http.send(null);

				var obj = JSON.parse(http.responseText);
				if (obj.data.length == 0) {
					return;
				}

				var _lastIndexTemp = this.lastIndexTempSwitch;
				this.lastIndexTempSwitch = obj.data.length;
				listTemp = obj.data.slice(_lastIndexTemp);

				listTemp.forEach(data => {
					//Máximo de 60 itens exibidos no gráfico
					if (chartSwitch.data.labels.length == 10 && chartSwitch.data.datasets[0].data.length == 10) {
						chartSwitch.data.labels.shift();
						chartSwitch.data.datasets[0].data.shift();
					}

					chartSwitch.data.labels.push(this.time++);
					chartSwitch.data.datasets[0].data.push(parseFloat(data));
					chartSwitch.update();
				});

			}

			get_switch();



			function sendTemperature() {
				var http = new XMLHttpRequest();
				http.open('POST', 'http://localhost:3000/api/sendData');
				http.send();
			}

			sendTemperature();




			setInterval(() => {
				get_data();

				get_switch();

				sendTemperature();
			}, 3000);

