
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

const inventory = [
	{ name: "covid", quantity: ["cough", "loss of smell/taste", "sore throat"] , Image:"Images/covid.jpg", Link:"Links/Coronavirus disease 2019 (COVID-19) - Symptoms and causes - Mayo Clinic.html", href:"Links/Coronavirus disease 2019 (COVID-19) - Symptoms and causes - Mayo Clinic.html",discription:"Covid-19 is a virus known as SARS-COV-2, belonging to the coronavirus family. As with other respiratory illnesses, covid-19 spreads quickly through the air droplets of an infected person. An infection can result from direct contact with either an infected individual or a contaminated surface/object. Viruses belonging to the coronavirus family are known for their spike proteins that quickly attach to human cells and begin to replicate and spread inside other cells. Mutations in the virus are responsible for the creation of the known variants of the covid-19, most notably the omicron and delta variants. These variants have allowed for both a faster transmission of the virus and in some cases, a decrease in severity. "},
	{ name: "constipation", quantity: ["dry stool"] , Image:"Images/constipation.jpg", Link: "Links/Constipation - Diagnosis and treatment - Mayo Clinic.html", href:"Links/Constipation - Diagnosis and treatment - Mayo Clinic.html",discription:"Constipation is a condition where an individual has uncomfortable or infrequent bowel movements. It is considered constipation when bowel movements result in hard, dry stool, usually fewer than three times a week. Some experience chronic constipation which interferes with their ability to do daily tasks."},
	{ name: "ulcers", quantity: ["acid reflux"] , Image:"Images/ulcers.jpg", Link:"Links/Peptic ulcer - Symptoms and causes - Mayo Clinic.html", href:"Links/Peptic ulcer - Symptoms and causes - Mayo Clinic.html",discription:"Ulcer is a sore on the lining of your stomach, small intestine or esophagus. "},
	{ name: "gerd", quantity: ["acid reflux", "chest pain", "difficulty swallowing/chewing"] , Image:"Images/gerd.jpg", Link:"Links/Mayo Clinic - Mayo Clinic.html", href:"Links/Mayo Clinic - Mayo Clinic.html",discription:""},
	{ name: "lactose intolerance", quantity: ["nausea/vomiting, bloating"] , Image:"Images/lacctose.jpg", Link:"Links/Lactose intolerance - Symptoms and causes - Mayo Clinic.html", href:"Links/Lactose intolerance - Symptoms and causes - Mayo Clinic.html",discription:"People with lactose intolerance are unable to fully digest dairy products due to the lack of enzymes called lactase in their body. Due to this condition people with lactose intolerance suffer diarrhea, gas and bloating consuming dairy products. The condition is harmless though the symptoms can be uncomfortable."},
	{ name: "diabetes", quantity: ["fatigue", "urinaton"] , Image:"Images/diabetes.jpg", Link:"Links/Diabetes - Diagnosis and treatment - Mayo Clinic.html", href:"Links/Diabetes - Diagnosis and treatment - Mayo Clinic.html",discription:"Diabetes is a disease that affects how the body uses blood sugar (glucose), it is an important source of energy for the cells that make up the muscles and tissues, and the brain's main source of fuel. Main cause of diabetes varies by type Diabetes consists of type 1 diabetes and type 2 diabetes. In both cases, sugar builds up in the bloodstream and this is because the pancreas doesn't produce enough insulin. Both diabetes may be caused by a combination of genetic or environmental factors. Type 1 diabetes can start at any age, can start during childhood or teen years. Type 2 diabetes can develop at any age and is more common in people older than 40."},
	{ name: "influenza", quantity: ["sore throat", "fever", "nasal congestion"] , Image:"Images/influenza.jpg", Link:"Links/Influenza (flu) - Symptoms and causes - Mayo Clinic.html", href:"Links.Influenza (flu) - Symptoms and causes - Mayo Clinic.html",discription:"Influenza, more commonly known as the “flu,” is a viral infection that spreads via air droplets when an infected person coughs or sneezes. Those air droplets are either transferred directly to another person or land on nearby objects that others may touch. Once infected, a person is contagious from the day prior to them experiencing symptoms until approximately four days after they have begun. New strains of the virus appear every year, so while one’s immune system may have developed antibodies to a previous strain, there is no guarantee that it will protect them against a new strain."},
	{ name: "common cold", quantity: ["sore throat", "dry cough", "nasal congestion"] , Image:"Images/cold.jpg", Link:"Links/Common cold - Symptoms and causes - Mayo Clinic.html", href:"Links/Common cold - Symptoms and causes - Mayo Clinic.html",discription:"The common cold is a viral infection that most commonly affects parts of the upper respiratory tract (i.e. nose and throat). Many viruses are known to cause the cold but the most common of them are rhinoviruses. Similar to other infections, the virus enters one body through direct contact with an infected person or an infected surface or object. "},
	{ name: "pneumonia", quantity: ["excess mucus", "chest pain", "fever"] , Image:"Images/pneumonia.jpg", Link:"Links/Pneumonia - Symptoms and causes - Mayo Clinic.html", href:"Links/Pneumonia - Symptoms and causes - Mayo Clinic.html",discription:"Pneumonia is an infection that causes inflammation in the air sacs of one’s lungs. As a result of the infection, the air sacs are filled with fluid/pus and a signature effect of the illness is producing coughs with phlegm or pus. Pneumonia is caused by a variety of bacteria, viruses, and fungi and is usually acquired from community or hospital settings. "},
	{ name: "cystic fibrosis", quantity: ["excess mucus", "nasal congestion"] , Image:"Images/cystic.jpg", Link:"Links/Cystic fibrosis - Symptoms and causes - Mayo Clinic.html", href:"Links/Cystic fibrosis - Symptoms and causes - Mayo Clinic.html",discription:"Cystic Fibrosis is a hereditary disorder that primarily affects the lungs and digestive system. Harmful mutations in the cystic fibrosis conductance transmembrane regulator gene (CFTR) disrupt the function of the protein responsible for the transport of electrolytes through cells, specifically those that produce secreted fluids, such as mucus, sweat, and digestive juices. These secreted fluids that are normally thin and act as lubricants, thicken and block various passageways in the body as a result of the mutation. As a hereditary illness, the gene for cystic fibrosis is inherited from each parent. If an individual inherits only one CF gene, they are known as carriers of the mutated gene but the gene is not expressed and they are not born with the disorder."},
	{ name: "coronary artery disease", quantity: ["chest pain", "shortness of breath"] , Image:"Images/arrhythmia.jpg", Link:"Links/Coronary Artery Disease _ cdc.gov.html", href:"Links/Coronary Artery Disease _ cdc.gov.html",discription:"Coronary artery disease (CAD) is a common heart condition that reduces the transport of oxygen carrying blood to the heart through blood vessels. The buildup of cholesterol, fats, and other substances into what is known as plaque in arteries causes a blockage and prevents the flow of blood to the heart."},
	{ name: "myocardial infarction", quantity: ["shortness of breath", "chest pain", "fatigue"] , Image:"Images/stroke.jpg", Link:"Links/Heart attack - Symptoms and causes - Mayo Clinic.html", href:"Links/Heart attack - Symptoms and causes - Mayo Clinic.html",discription:" Myocardial infarction, more commonly known as a heart attack, occurs due to a complete or partial blockage in the arteries, preventing blood flow to the heart. Heart attacks are most commonly a result of coronary artery disease, but can be caused by other medical issues, such as viral infections or coronary artery spasm (sudden squeezing of an unblocked blood vessel)."},
	{ name: "stroke", quantity: ["paralysis", "headache"] , Image:"Images/stroke.jpg", Link:"Links/Stroke - Symptoms and causes - Mayo Clinic.html", href:"Links/Stroke - Symptoms and causes - Mayo Clinic.html",discription:"A stroke is caused by reduced blood flow, preventing the transport of oxygen and nutrients to the brain. There are two types of strokes: ischemic and hemorrhagic. An ischemic stroke is the most common form of a stroke and occurs in response to blocked or narrowed blood vessels that inhibit blood flow to the brain. The blockage is caused by fat buildup or blood clots that travel from the heart to blood vessels in the brain. A hemorrhagic stroke refers to a leak or rupture of blood vessels in the brain. This leak/rupture can occur as a result of high blood pressure, head trauma, or the overuse of blood thinners."},
	{ name: "arrhythmia", quantity: ["irregular hearbeat", "chest pain"] , Image:"Images/arrhythmia.jpg", Link:"Links/Heart arrhythmia - Symptoms and causes - Mayo Clinic.html", href:"Links/Heart arrhythmia - Symptoms and causes - Mayo Clinic.html",discription:"A heart arrhythmia is the technical term for an irregular heartbeat caused by delayed coordination between electrical signals responsible for heartbeats. These electrical signals are transmitted by the sinus node and cause heart muscles to squeeze and pump blood from the heart and into the ventricles. An irregular heartbeat can either be one that is too fast (tachycardia) or too slow (brachycardia). The former is found in conditions such as atrial fibrillation (A-fib), where an individual’s heart rate becomes erratically rapid and ventricular fibrillation, where the electrical signals become more rapid and prevent proper contraction of the ventricles (lower heart chambers). Brachycardia can be found in conditions such as sick sinus syndrome, caused by damage to the sinus node that prevents the transmission of electrical signals and a conduction block, where signals travelling the electrical pathway of the heart are slowed down due to a blockage."},
	{ name: "congenital heart disease", quantity: ["shortness of breath"] , Image:"Images/congenital.jpg", Link:"Links/Congenital heart disease in adults - Symptoms and causes - Mayo Clinic.html", href: "Congenital heart disease in adults - Symptoms and causes - Mayo Clinic.html",discription:" Congenital heart disease refers to a birth defect in the structure of the heart. The structure of the heart is that of four chambers: the two upper ones are known as the atria and receive incoming blood while the two lower ones, known as the ventricles, pump blood from the heart. Heart valves located at the openings of the chambers facilitate blood flow in the correct direction. Congenital heart disease can result from a defect in any one of these structures that form the heart. The exact cause of the disease is unknown, but its presence at birth have led researchers to believe that it is hereditary."},
	{ name: "epilepsy", quantity: ["seizure"] , Image:"apple.jpg", Link:"Links/Epilepsy - Symptoms and causes - Mayo Clinic.html", href:"Links/Epilepsy - Symptoms and causes - Mayo Clinic.html",discription:"A neurological disorder in which brain activity becomes abnormal. This causes seizures or loss of awareness."},
	{ name: "aneurysm", quantity: ["nausea, seizure", "stiff neck"] , Image:"Images/aneurysm.jpg", Link:"Links/Brain aneurysm - Symptoms and causes - Mayo Clinic.html", href:"Links/Brain aneurysm - Symptoms and causes - Mayo Clinic.html",discription:"A brain aneurysm is a bulge/ballooning blood vessel in the brain. Ruptured aneurysm can be fatal."},
	{ name: "alzheimers", quantity: ["memory loss"] , Image:"Images/alzheimers.jpg", Link:"Links/Alzheimer's disease - Symptoms and causes - Mayo Clinic.html", href:"Links/Alzheimer's disease - Symptoms and causes - Mayo Clinic.html",discription:"Alzeimers is a neurological disorder that causes the brain to shrink and is the most common cause of dementia. 50 million people worldwide suffer from dementia."},
	{ name: "dementia", quantity: ["memory loss"] , Image:"Images/dementia.jpg", Link:"Links/Dementia - Symptoms and causes - Mayo Clinic.html", href:"Links/Dementia - Symptoms and causes - Mayo Clinic.html",discription:"Dementia is a group of symptoms that affects memory, thinking and social abilities."},
	{ name: "meningitis", quantity: ["headache", "nausea", "fever"] , Image:"Images/meningitis.jpg", Link:"Links/Meningitis - Symptoms and causes - Mayo Clinic.html", href:"Links/Meningitis - Symptoms and causes - Mayo Clinic.html",discription:" Meningitis is inflammation of the membranes and fluid surrounding the brain and spinal cord. This causes headaches, fever and stiff necks. Mostly caused by viral infection."},
	{ name: "parkinsons", quantity: ["depression", "diffculty swallowing/chewing"] , Image:"Images/parkinsons.jpg", Link:"Links/Parkinson's disease - Symptoms and causes - Mayo Clinic.html", href:"Links/Parkinson's disease - Symptoms and causes - Mayo Clinic.html",discription:"Parkinson's Disease is a brain disorder which leads to shaking or tremors. This can lead to trouble with coordination and daily activities, such as walking, eating etc. Parkinsons is caused by destroyed noradrenaline-producing neurons, which are responsible for sending signals to muscles. Parkinson's disease affects around 1 million Americans and is the second most common neurodegenerative disorder after Alzheimer’s disease."},
  
	{},
  ];

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

