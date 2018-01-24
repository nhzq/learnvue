<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="root">
		<input id="input" type="text" v-model="newName">
		<button v-on:click="addName">Add</button>

		<ul>
			<li v-for="name in names" v-text="name"></li>
			<br/>
			<li v-for="name in names">{{ name }}</li>
		</ul>
	</div>
	
	<script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
	<script>
		// vue@2.5.13
		var app = new Vue({
			el: '#root',
			data: {
				newName: '',
				names: ['Ali', 'Abu', 'Siti', 'Nor']
			},
			methods: {
				addName() {
					this.names.push(this.newName);
					this.newName = '';
				}
			}
		});


	</script>
</body>
</html>