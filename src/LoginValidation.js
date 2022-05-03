
var historyRef;


function setHistoryref(history) {
	historyRef = history;
}

var loginVar = document.getElementById('loginButton');
function myValidate()
{
var email=document.getElementById("Email");
var password=document.getElementById("Password");
if(email=="admin@gmail.com" && password == "password")
{
	alert("login successful");
	return false;
}  
else{
	alert("login failed");
}
}


function loginFunction() {
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	if(email=="admin@gmail.com" && password=="admin")
	{
		//  window.location.href = "./adminhome"
		historyRef('/adminhome')
	}  
	else if(email=="manager@gmail.com" && password	=="manager")
	{
		window.location.href = "./managerhome"
	}
	else if(email=="user@gmail.com" && password	=="user")
	{
		window.location.href = "./userhome"
	}
	else if(email=="visitor@gmail.com" && password	=="visitor")
	{
		window.location.href = "./visitorhome"
	}
	else{
		alert("Enter Correct Credentials")
	}
}

// if(ele)
loginVar.addEventListener('click', () => {
	loginFunction();
})