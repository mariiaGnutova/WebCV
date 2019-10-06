
var enLanguage = document.getElementById("en");
enLanguage.addEventListener("click", function(){changeLanguage(enLanguage.id)});
 var deLanguage = document.getElementById("de");
 deLanguage.addEventListener("click", function(){changeLanguage(deLanguage.id)});

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
  }
  else{
    document.getElementById("de").classList.remove("on");
    elementForChange.classList.add("on");
    document.getElementById("certificates").innerHTML = "Certificates";
    workExperience[1].classList.add("deactivated");
    workExperience[0].classList.remove("deactivated");
  }
}
