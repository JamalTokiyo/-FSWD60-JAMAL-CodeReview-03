function calculateInsurance(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var hors = document.getElementById("horse").value;

	

		var country = document.getElementById("country").value;
	

		var select = document.querySelector("select");
		var ouput = select.value;

		if(output === "austria"){
			var price = horse*100/age+50;	
		}
		else if(output === "hungary"){
			var price = horse*120/age+100;	
		}
		else{
			var price = horse*150/(age+3)+50;
		}

		
		
	}


var out = document.getElementById("btn");
out.addEventListener("click", calculateInsurance, false);
