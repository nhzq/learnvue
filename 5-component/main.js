//Reference new attribute
Vue.component('task', {
	template: '<li><slot></slot></li>',
});


new Vue({
	el: '#root',
})