<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="root">
		<h1>
			{{ reversedMessage }}
		</h1>

		<h3>All Tasks</h3>
		<ul>
			<li v-for="task in tasks">
				{{ task.description }}
			</li>
		</ul>

		<h3>Completed Tasks</h3>
		<ul>
			<li v-for="task in completedTask">
				{{ task.description }}
			</li>
		</ul>

		<h3>Incompleted Tasks</h3>
		<ul>
			<li v-for="task in incompletedTask">
				{{ task.description }}
			</li>
		</ul>
	</div>
	
	<script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
	<script>
		// vue@2.5.13
		var app = new Vue({
			el: '#root',
			data: {
				message: 'Hello World',
				tasks: [
					{ description: 'Go to the store', completed: true },
					{ description: 'Go to the beach', completed: true },
					{ description: 'Go to the gym', completed: false },
					{ description: 'Go to the shop', completed: true },
					{ description: 'Go to the pond', completed: false },
				],
			},
			computed: {
				reversedMessage() {
					return this.message.split('').reverse().join('');
				},
				completedTask() {
					return this.tasks.filter(task => task.completed);
				},
				incompletedTask() {
					return this.tasks.filter(task => task.completed === false);
				},
			}
		});
	</script>
</body>
</html>