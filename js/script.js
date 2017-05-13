var inputs = document.querySelectorAll("input");
inputs.forEach(function(item){
	item.addEventListener("blur",function(){
	if (item.value) {
		console.log(item.value);
		item.classList.add("active_input");
	} else {
		item.classList.remove("active_input");
	}
	})
})

if (document.querySelector(".feedback_btn")) {
var link = document.querySelector(".feedback_btn");
var popup = document.querySelector(".feedback_form");
var close = document.querySelector(".feedback_close");
var overlay = document.querySelector(".overlay");
var form = document.querySelector(".feedback_form form");
var fdb_username_storage = localStorage.getItem("feedback_username");
var fdb_email_storage = localStorage.getItem("feedback_email");
var feedback_username = popup.querySelector("#feedback_username");
var feedback_email = popup.querySelector("#feedback_email");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("display_block");
	overlay.classList.add("display_block");
	if (fdb_username_storage) {
		feedback_username.value = fdb_username_storage;
		if (fdb_email_storage) {
			feedback_email.value = fdb_email_storage;
			feedback_email.classList.add("active_input");
		} else {
			feedback_email.focus(); 
		}
			feedback_username.classList.add("active_input");
	} else {
		feedback_username.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("display_block");
	overlay.classList.remove("display_block");
});

overlay.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("display_block");
	overlay.classList.remove("display_block");
});
  
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("display_block")) {
			popup.classList.remove("display_block");
			overlay.classList.remove("display_block");
		}
	}
});
  
form.addEventListener("submit", function(event) {
	if (!feedback_email.value || !feedback_username.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("feedback_email", feedback_email.value);
		localStorage.setItem("feedback_username", feedback_username.value);
	}
});

var textarea = document.querySelector("textarea");
textarea.addEventListener("blur",function(){
	if (textarea.value) {
		console.log(textarea.value);
		textarea.classList.add("active_input");
	} else {
		textarea.classList.remove("active_input");
	}
})

}
