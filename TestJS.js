document.getElementById('second page').style.display='none';

class Company {
  constructor(name, contact, bio, sector){
    this.name = name;
    this.contact = contact;
    this.bio = bio;
    this.sector = sector;
  }
}

var hash = new Object();

let tech = new Company("TechUp", "(974) 266-3974", 'We do maintainance on tech products. Learn more abour our services by calling our number', 'Technology')
let manu = new Company("ManU", "(369) 538-4145", 'Contact us if you need help with engineering new machines with a quick turnaround. We will make sure you are producing as efficiently as possible.', 'Manufacturing')
let finance = new Company("GCoin", "(955) 502-5859", 'We are here to help with your financial needs. Give us a call and we will be glad to assist. Grow Coin!!!', 'Finance');
let agri = new Company("FeedAll", "(419) 521-4174", 'We provide food at discount rates for bulk orders.', 'Agriculture');
let edu = new Company("North Public College", "(453) 337-9465", "We educate the youth and teach the value of communication, cooperation, and collaboration in computer science.", "Education");
let energy = new Company("Energize", "(432) 774-7558", "We transition your current energy usage to rely on renewable energy at cheap prices!", "Energy");
let health = new Company("JD Hospital", "(538) 463-8886", "Dr.Gupta Shah is the lead doctor at our hospital. If you feel any symptoms or pain don't hesitate to contact to contact our health specialists.", "Health");
let public = new Company("HelpingHands", "(900) 428-9981", "If you need any support or extra hands, we would be glad to help out!", "Public Service");

hash['Agriculture'] = [manu, public];
hash['Education'] = [tech, agri];
hash['Energy'] = [manu, finance];
hash['Finance'] = [tech, edu];
hash['Health'] = [edu, energy];
hash['Manufacturing'] = [tech, health];
hash['Public Service'] = [health, agri];
hash['Technology'] = [finance, edu];


function hideAll() {
  document.getElementById('first page').style.display='none';
  document.getElementById('second page').style.display='block';

  var x = document.getElementById("profileForm");
  var txt = "Thanks for using our service " + x.elements[0].value;
  var key = document.getElementById("Match Sector").value;

  document.getElementById('Name Display').innerHTML= txt;

  document.getElementById('t1el1').innerHTML= hash[key][0].name;
  document.getElementById('t1el2').innerHTML= hash[key][0].contact;
  document.getElementById('t1el3').innerHTML= hash[key][0].bio;
  document.getElementById('t1el4').innerHTML= hash[key][0].sector;

  document.getElementById('t2el1').innerHTML= hash[key][1].name;
  document.getElementById('t2el2').innerHTML= hash[key][1].contact;
  document.getElementById('t2el3').innerHTML= hash[key][1].bio;
  document.getElementById('t2el4').innerHTML= hash[key][1].sector;

}

function showAll(){
   document.getElementById('first page').style.display='block';
   document.getElementById('second page').style.display='none';
}