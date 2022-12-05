const symptoms = ["covid","influenza","common cold","pneumonia","cystic fibrosis","coronary artery disease","myocardial infarction","stroke","arrhythmia","congenital heart disease","epilepsy","aneurysm","alzeihmer's","dementia","meningitis","parkinson's","gerd","constipation","diabetes","ulcers","lactose intolerance","covid","influenza","common cold","pneumonia","cystic fibrosis","coronary artery disease","myocardial infarction","stroke","arrhythmia","congenital heart disease","epilepsy","aneurysm","alzeihmer's","dementia","meningitis","parkinson's","gerd","constipation","diabetes","ulcers","lactose intolerance"];
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

function button_color() {
	var color = document.getElementById('0');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}
function button2_color() {
	var color = document.getElementById('1');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";

	}
	else{
		color.style.backgroundColor = "white";
		array_search.slice(1,1);
	}
	
}

function button3_color() {
	var color = document.getElementById('2');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button4_color() {
	var color = document.getElementById('3');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button5_color() {
	var color = document.getElementById('4');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}
function button6_color() {
	var color = document.getElementById('5');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button7_color() {
	var color = document.getElementById('6');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button8_color() {
	var color = document.getElementById('7');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button9_color() {
	var color = document.getElementById('8');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button10_color() {
	var color = document.getElementById('9');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button11_color() {
	var color = document.getElementById('10');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button12_color() {
	var color = document.getElementById('11');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button13_color() {
	var color = document.getElementById('12');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button14_color() {
	var color = document.getElementById('13');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button15_color() {
	var color = document.getElementById('14');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}
function button16_color() {
	var color = document.getElementById('15');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button17_color() {
	var color = document.getElementById('16');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button18_color() {
	var color = document.getElementById('17');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button19_color() {
	var color = document.getElementById('18');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button20_color() {
	var color = document.getElementById('19');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button21_color() {
	var color = document.getElementById('20');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}

function button22_color() {
	var color = document.getElementById('21');
	if(color.style.backgroundColor == "white"){
		color.style.backgroundColor = "orange";
	}
	else{
		color.style.backgroundColor = "white";
	}
	
}
		