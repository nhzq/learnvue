<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="root">
		<task>Store</task>
		<task>Bank</task>
		<task>Work</task>
	</div>
	
	<script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
	<script src="main.js"></script>
	<script>
		// vue@2.5.13
		new Vue({
			el: '#root',
			data: {
				message: 'Hello World',
			}
		});
	</script>
</body>
</html>