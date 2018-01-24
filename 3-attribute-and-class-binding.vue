<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.is-loading {
			background: red;
		}
	</style>
</head>
<body>
	<div id="root">
		<button v-bind:title="message">Hover Me</button>
		<button v-bind:class="{ 'is-loading': isLoading }" v-on:click="toggleClass">Click Me</button>
	</div>
	
	<script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
	<script>
		// vue@2.5.13
		var app = new Vue({
			el: '#root',
			data: {
				message: 'Please take a look at me',
				isLoading: false,
			},
			methods: {
				toggleClass() {
					this.isLoading = true;
				}
			}
		});


	</script>
</body>
</html>