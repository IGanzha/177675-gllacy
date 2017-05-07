var link = document.querySelector(".feedback_btn");
	var popup = document.querySelector(".feedback_form");
	var close = document.querySelector(".feedback_close");
	var overlay = document.querySelector(".overlay");
	
	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("display_block");
		overlay.classList.add("display_block");
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