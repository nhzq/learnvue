Vue.component('message', {

	data() {
		return {
			isVisible: true
		};
	},

	props: ['title', 'body'],

	template: `
		<article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button type="button" v-on:click="hideModal">X</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
	`,

	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}
});

new Vue({
	el: '#root',
});