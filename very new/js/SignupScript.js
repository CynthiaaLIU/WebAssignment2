// JavaScript Document

function checkform(){
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var check = document.getElementById("check").checked;

  var namecheck = /^[a-zA-Z]{3,}$/;
  var surnamecheck = /^[a-zA-Z]{5,}$/;
  var emailcheck = /^([a-zA-Z0-9-_]+)(@[a-zA-Z0-9-_]+).([a-zA-Z0-9-_]+)/;
  var datecheck = /^([0-9]+)-([0-9]+)-([0-9]+)/;


  if(name == "" || name == null || surname == "" || surname == null || email == "" || email == null || date == "" || date == null){
    alert("Form Not Completed!");
    return false;
  }else if (check != true) {
    alert("Must Agree User Term");
    return false;
  }else if (!namecheck.test(name)) {
    alert("Name must be at least 3 letters");
    return false;
  }else if (!surnamecheck.test(surname)) {
    alert("Surname must be at least 5 letters");
    return false;
  }else if (!emailcheck.test(email)){
    alert("Email format must be correct");
    return false;
  }else  {
    alert("Sign Up successfully");
    return true;
  }
}
