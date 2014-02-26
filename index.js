function handle(e) {
    if (e.keyCode == 13) {
        var input = document.getElementById("txt").value;
        //document.getElementById('do').innerHTML = input;
		var node=document.createElement("P");
		var textnode=document.createTextNode(input);
		node.appendChild(textnode);
		document.getElementById('do').appendChild(node);
	}
}


