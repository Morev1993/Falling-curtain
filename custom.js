var open_menu = document.getElementById('open_menu');//find button to open form
var top_panel = document.getElementById('top_panel');//find falling element
var form = document.getElementById('form');//find form after falling element
var button = document.querySelector('.close_form');//find button to close form

open_menu.onclick = function() {
	top_panel.classList.remove('move_up');
	top_panel.classList.add('move_down');

	function func() {
		form.classList.add('form1');
	}

	setTimeout(func, 200);
}

button.onclick = function() {
	top_panel.classList.add('move_up');
	form.classList.remove('form1');
}
