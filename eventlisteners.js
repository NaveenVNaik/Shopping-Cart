var _ = require('lodash');
console.log(_);
var testArray = [1,2,3,4,4,5];
console.log(_.without(testArray,4));
var userinput = document.getElementById("userinput");
var addbutton = document.getElementById("addtocart");
var cart = document.getElementById("cart");
var removefromcart = document.getElementById("removefromcart");
var emptycart = document.getElementById("emptycart");
var infomsg = document.getElementById("infomsg");
infomsg.style.color = "red";


function checkCart(userinput){
	var lis = document.querySelectorAll("li");
	for (var i=0; i<lis.length; i++){
		if(lis[i].getAttribute("id") === userinput.toLowerCase()){
	 		return true;
	 	}
	}
	return false;
}

function createListElement(){
	var li = document.createElement("li");
	li.setAttribute('id',userinput.value.toLowerCase());
	var div = document.createElement("div");
	div.setAttribute("id","d"+userinput.value.toLowerCase());

	var p = document.createElement("p");
	p.setAttribute("class","custome");
	var litext = document.createTextNode(userinput.value);
	p.appendChild(litext);

	var removeButton = document.createElement("button");
	removeButton.setAttribute("id","r"+userinput.value.toLowerCase());
	removeButton.setAttribute("class","button is-danger");
	removeButton.appendChild(document.createTextNode("Remove"));

	removeButton.addEventListener("click",function(){
		removeChildDynamic(li);
	});

	var br = document.createElement("br");
	div.appendChild(p);
	div.appendChild(removeButton);
	li.appendChild(div);
	cart.appendChild(li);
	cart.appendChild(br);
}

function removeChildDynamic(li){
	console.log(li);
	cart.removeChild(li);
}

function addtoCart(){
	infomsg.innerHTML = "";
	if (userinput.value === ""){
		infomsg.innerHTML = "Please enter fruit name"+ "<br><br>";
	}else if(checkCart(userinput.value)){
		infomsg.innerHTML = "Entered fruit ("+ userinput.value+") already exists in cart"+ "<br><br>";
	}else{
		createListElement();
	}
	userinput.value = "";
}

function addtoCartAfterClick(){
	addtoCart();
}

function addtoCartAfterEnter(event){
	if(event.keyCode === 13) //event.which can also be used
		addtoCart();
}

function removeChildAfterClick(){
	infomsg.innerHTML = "";
	if (userinput.value === ""){
		infomsg.innerHTML = "Please enter fruit name"+ "<br><br>";
	}else if(checkCart(userinput.value) === false){
		infomsg.innerHTML = "Entered fruit ("+userinput.value+") doesn't exists in cart"+ "<br><br>";
	}else{
	     var li = document.getElementById(userinput.value.toLowerCase());
	     cart.removeChild(li);
 	}

 	userinput.value = "";
 }

 function emptyCartAfterClick(){
	if(cart.hasChildNodes()){
		
		while(cart.firstChild){
			cart.removeChild(cart.firstChild);
		}
	} else {
		infomsg.innerHTML = "Cart is empty"+ "<br><br>";
	}
}

addbutton.addEventListener("click",addtoCartAfterClick);

removefromcart.addEventListener("click", removeChildAfterClick);

emptycart.addEventListener("click",emptyCartAfterClick);

userinput.addEventListener("keypress",addtoCartAfterEnter);



