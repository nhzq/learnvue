//Reference new attribute
Vue.component('task-list', {
	template: `
		<ul>
			<task v-for="task in tasks">
				{{ task.task }}
			</task>
		</ul>
		`,

	data() {
		return {
			tasks: [
				{ task: 'Go to store', complete: true },
				{ task: 'Go to bank', complete: false },
				{ task: 'Go to shop', complete: true },
			],
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot</li>'
});


new Vue({
	el: '#root',
})