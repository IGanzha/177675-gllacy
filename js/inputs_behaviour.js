document.querySelectorAll("input").forEach(function(item){
  item.addEventListener("blur",function(){
    console.log(this.value);
    if (this.value.length) {
      this.classList.add("active_input");
    } else {
      this.classList.remove("active_input");
    }
  });
})

var textarea = document.querySelector("textarea");
textarea.addEventListener("blur", function(){
	console.log(this.value);
  if (this.value.length) {
    this.classList.add("active_input");
    } else {
      this.classList.remove("active_input");
    }
});
