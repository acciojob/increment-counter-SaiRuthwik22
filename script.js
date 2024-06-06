//your JS code here. If required.
function increment() {
	let value = document.getElementById("counter").innerHTML
	alert(Number(value))
	document.getElementById("counter").innerHTML = Number(value)+1
}