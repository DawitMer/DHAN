var names = ["Covid 19", "Influenza"];
var description = ["Description: Covid-19 is a virus known as SARS-COV-2, belonging to the coronavirus family. As with other respiratory illnesses, covid-19 spreads quickly through the air droplets of an infected person. An infection can result from direct contact with either an infected individual or a contaminated surface/object. Viruses belonging to the coronavirus family are known for their spike proteins that quickly attach to human cells and begin to replicate and spread inside other cells. Mutations in the virus are responsible for the creation of the known variants of the covid-19, most notably the omicron and delta variants. These variants have allowed for both a faster transmission of the virus and in some cases, a decrease in severity. ", "Description: Influenza, more commonly known as the “flu,” is a viral infection that spreads via air droplets when an infected person coughs or sneezes. Those air droplets are either transferred directly to another person or land on nearby objects that others may touch. Once infected, a person is contagious from the day prior to them experiencing symptoms until approximately four days after they have begun. New strains of the virus appear every year, so while one’s immune system may have developed antibodies to a previous strain, there is no guarantee that it will protect them against a new strain. "];
var symptoms = ["Symptoms: fever, loss of smell/taste, dry cough, muscle aches, body chills, headache, nasal congestion, sore throat, nausea/vomiting", "Symptoms: fever, muscle pain, sore throat, runny nose, body chills, fatigue, dry cough"];
var treatment = ["Prevention & Treatment: The best practices to prevent contracting the virus include receiving and keeping up to date with vaccinations, washing/sanitizing hands frequently, wearing a mask, and avoiding contact with those known or suspected to be infected. If one begins to experience symptoms related to covid-19, they should perform a rapid test and begin to isolate themselves from others. Some treatment methods to be recommended by your doctor include antiviral medication and pain relievers, such as acetaminophen (Tylenol) and ibuprofen (Advil). Be sure to check with a medical professional first and to follow the instructions outlined on the label of the medication.", "Prevention & Treatment: Receiving the annual flu vaccine, available as both an injection and nasal spray, is the best way to protect oneself from contracting the virus. Most people infected with the flu are able to self medicate at home and recover within a few weeks. However, if symptoms worsen, one should see a health care provider immediately."];
var disclaimer = "Disclaimer: The safest route is to check in with your healthcare provider if you begin to experience any symptoms, as they would best be able to inform you on your next steps.";
var info = ["To receive further information: Centre for Disease Control and Prevention (CDC), https://www.cdc.gov/coronavirus/2019-ncov/your-health/about-covid-19.html Government of Canada: https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html", "To receive further information: Mayo Clinic, https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719"];

function getPage(num){

    var n = document.getElementById("name");
    var d = document.getElementById("description");
    var s = document.getElementById("symptoms");
    var t = document.getElementById("treatment");
    var dis = document.getElementById("disclaimer");
    var i = document.getElementById("info");

    n.innerHTML = "";
    d.innerHTML = "";
    s.innerHTML = "";
    t.innerHTML = "";
    dis.innerHTML = "";
    i.innerHTML = "";

    n.innerHTML = names[num];
    d.innerHTML = description[num];
    s.innerHTML = symptoms[num];
    t.innerHTML = treatment[num];
    dis.innerHTML = disclaimer;
    i.innerHTML = info[num];

}