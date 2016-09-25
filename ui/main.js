var button = document.getElementById('counter');


button.onclick = function() {
button.innerHTML= "click this";
//create a request object
var request = new XMLHttpRequest();
alert("request object created");
//capture the response and store in a variable
request.onreadystatechange = function() {
alert("entering function");
	if(request.readyState === XMLHttpRequest.done) {
alert("inside if 1");
		if(request.status === 200){
alert("inside if 2");
			var counter = request.responseText;
			//render the variable's value in the correct span
			var span = getElementById('count');
			span.innerHTML = counter.toString();
		
		}
	}
};
//make a request
request.open('GET','localhost:8080/counter',true);
request.send(null);
};




