 function getlangCookie(){
	var siteCookie = document.cookie;
	if(siteCookie.length == 0){
		setLangCookie("en");
		document.cookie = "path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
	}
}

function setDE(){
	if ((getCookie('language').localeCompare('de')) == 0){
	     console.log("window not loaded");
		 changeLanguage("de");
		 console.log("window loaded");

	}
}

function setLangCookie(langValue){
	var a = document.cookie = "language="+langValue;
	console.log(a);
}


window.onload = function(){
var enLanguage = document.getElementById("en");
enLanguage.addEventListener("click", function(){changeLanguage(enLanguage.id)});
var deLanguage = document.getElementById("de");
 deLanguage.addEventListener("click", function(){changeLanguage(deLanguage.id)});
}

function changeLanguage(elementId){
  var elementForChange = document.getElementById(elementId);
  var workExperience = document.getElementsByClassName('work-experience');
  if(elementForChange.classList.contains("on")){
    console.log("language " + elementId + " is already on");
  } else if(elementId =="de"){
    document.getElementById("en").classList.remove("on");
    elementForChange.classList.add("on");
    document.getElementById("certificates").innerHTML = "Zertifikate";
    workExperience[0].classList.add("deactivated");
    workExperience[1].classList.remove("deactivated");
	setLangCookie("de");
  }
  else{
    document.getElementById("de").classList.remove("on");
    elementForChange.classList.add("on");
    document.getElementById("certificates").innerHTML = "Certificates";
    workExperience[1].classList.add("deactivated");
    workExperience[0].classList.remove("deactivated");
	setLangCookie("en");
  }
}


// getCookie taken frome https://www.w3schools.com/js/js_cookies.asp

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
