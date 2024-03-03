function firstChar(text) {
  // your code here
	for  (let str of text) {
		if(str!= " "){
			return str
		}
	}
	return "";
}

// Do not change the code below

//const text = prompt("Enter text:");
alert(firstChar(text));
