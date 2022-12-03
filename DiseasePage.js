
function search_show() {
	
	document.getElementById('start_button').style.display = "none";
	document.getElementById('search_area').style.display = "block";

}

/*
LIST OF CHANGES MADE

Inventory completed
to lowercase in the search
to upper case for the name
rewrote the link displayed
*/ 



const symptoms = ["cough","loss of smell/taste", "sore throat","dry stool","acid reflux", "chest pain", "difficulty swallowing/chewing","nausea/vomiting, bloating","fatigue", "urinaton","sore throat", "fever", "nasal congestion","excess mucus", "chest pain", "fever","sore throat", "dry cough", "nasal congestion","depression", "diffculty swallowing/chewing"];

for(var i = 0 ;i<=inventory.length;i++){
	if(quan1==array_search){
		alert("hello");
	}
}

var searcharea = document.getElementById('search_area').value;


function search() {
	for (var i = 0; i <=inventory.length ; i++) {
		if(event.key === 'Enter' && document.getElementById('search_area').value.toLowerCase() == inventory[i]["name"] ) {
			var header = document.getElementById('heading');
			var disc = document.getElementById('discription');
			var image = document.getElementById('diseases_img');
			var paragraph = document.getElementById('Not');
			var paragraph2 = document.getElementById('Note');
			var linkpage = document.getElementById('link_page');



			linkpage.style.visibility="visible";
			linkpage.innerHTML=("Click here for more information regarding: " + inventory[i]["name"].toLocaleUpperCase());
			linkpage.href = (inventory[i]["Link"]);


			paragraph2.style.visibility="visible";
			paragraph.style.visibility ="hidden";
			image.style.visibility = "visible";
			header.style.visibility ="visible";
			disc.style.visibility="visible";

			header.innerHTML = (inventory[i]["name"].toUpperCase());
			disc.innerHTML =(inventory[i]["quantity"]);
			image.src=(inventory[i]["Image"]);
			paragraph2.innerHTML = (inventory[i]["discription"])
			event.preventDefault();
			break;
		} 
		else if(event.key === 'Enter' && i==inventory.length-1){
			var header = document.getElementById('heading');
			var disc = document.getElementById('discription');
			var image = document.getElementById('diseases_img');
			var paragraph = document.getElementById('Not');
			var paragraph2 = document.getElementById('Note');
			var linkpage = document.getElementById('link_page');


			linkpage.style.visibility="hidden";
			paragraph2.style.visibility="hidden";
			paragraph.style.visibility="visible";
			header.style.visibility ="hidden";
			image.style.visibility="hidden";
			disc.style.visibility="hidden";
			paragraph.innerHTML = "Nothing Matchs Your Search Sorry";
			event.preventDefault();
		}
	}
}

