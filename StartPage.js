const symptoms = ["cough","loss of smell/taste", "sore throat","dry stool","acid reflux", "chest pain", "difficulty swallowing/chewing","nausea/vomiting, bloating","fatigue", "urinaton","sore throat", "fever", "nasal congestion","excess mucus", "chest pain", "fever","sore throat", "dry cough", "nasal congestion","depression", "diffculty swallowing/chewing"];
var searcharea=document.getElementById('search_area');

function search() {
	for (var i = 0; i <=symptoms.length ; i++) {
		var nameid = String(i);
		if(event.key === 'Enter' && document.getElementById('search_area').value.toLowerCase() == symptoms[i]) {
			document.getElementById(nameid).style.display = "block";
			event.preventDefault();
		}
		else if (event.key === 'Enter' && document.getElementById('search_area').value.toLowerCase() == "") {
			document.getElementById(nameid).style.display = "block";
			event.preventDefault();
		}
		else if(event.key === 'Enter' && document.getElementById('search_area').value.toLowerCase() != symptoms[i]){
			document.getElementById(nameid).style.display = "none";
			event.preventDefault();
		}
	}
}