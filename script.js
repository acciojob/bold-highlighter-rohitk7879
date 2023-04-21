function highlight() {
    //Write your code here
	
	for(let i of green){
		i.style.color = "green";
	}


}

let green = document.getElementsByTagName("strong");
function return_normal() {
    //Write your code here

	for(let i of green){
		i.style.color = "black";
	}
    
}
