var button = document.getElementById('counter');


button.onclick = function() {

//create a request object
var request = new XMLHttpRequest();

//capture the response and store in a variable
request.onreadystatechange = function() {

	if(request.readyState === XMLHttpRequest.DONE) {

		if(request.status === 200){

			var counter = request.responseText;
			//render the variable's value in the correct span
			
			var span = document.getElementById('count');
			span.innerHTML = counter.toString();
		
		}
	}
};
//make a request
request.open('GET','http://localhost:8080/counter',true);
request.send(null);
};




