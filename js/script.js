//первая сумка

function onMouseOver(number){
	document.getElementById("ad"+number).style.display="block";
	document.getElementById("img_price"+number).style.color="#917cf8";
}

function onMouseOut(number){
	 document.getElementById("ad"+number).style.display="none";
	 document.getElementById("img_price"+number).style.color="#000";
}

