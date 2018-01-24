Vue.component('modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
				<div class="modal-content">
					<div class="box">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi necessitatibus quis alias ab architecto earum quidem deleniti reiciendis explicabo nihil labore tenetur libero doloribus laudantium mollitia rem, neque blanditiis!
						</p>
					</div>
				</div>
			<button class="modal-close is-large" aria-label="close" v-on:click="$emit('hidemodal')"></button>
		</div>
	`,
});

new Vue({
	el: "#root",
	data: {
		showModal: false,
	},
});