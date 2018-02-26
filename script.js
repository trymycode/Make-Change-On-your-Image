var inputs = document.querySelectorAll(".controls input");
function handleupdate(){
	var suffix = this.dataset.sizing || '';
	var x = this.name;
	console.log(x);
	var value = '--'+ x;
	console.log(value);
	console.log(value , this.value + suffix);
	document.documentElement.style.setProperty(value, this.value + suffix);
	
}
inputs.forEach(function(element){element.addEventListener('change',handleupdate);});
inputs.forEach(function(element){element.addEventListener('mousemove', handleupdate);});