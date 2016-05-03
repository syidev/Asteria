var form = document.forms[0];
var submit = document.querySelector("#submit").addEventListener("click", add);
var tbody = document.querySelector("#tbody");


function add(e) {
    
    e.preventDefault();
    
    var name = document.querySelector("#name");
    var surname = document.querySelector("#surname");
    var phone = document.querySelector("#phone");
    var avatar = document.querySelector("#avatar");
    var email = document.querySelector("#email");
    var gender = document.querySelector("#gender");
    var maritalStatus;
    var arr;
    var trow = document.createElement("tr");
    
    var avatarPic = "<img src=" + avatar.value + ">";
    
    
    for (var i = 0; i < form.length; i++) {
         if (form[i].checked) {
             maritalStatus = form[i].value;
         }  
    }
    
    arr = [name.value, surname.value, phone.value, 
           avatarPic, email.value, gender.value,
           maritalStatus];
    
    tbody.appendChild(trow);
      
    if (name.value.length > 0 && surname.value.length > 0 && phone.value.length > 0 && avatar.value.length > 0 && email.value.length > 0) {   
        for (var i = 0; i < 7; i++) {
        var td = document.createElement("td");
        td.innerHTML = arr[i];
        trow.appendChild(td);
        document.querySelector("h1").style.color = "#5bc0de";
        document.querySelector("h1").innerHTML = "Done!";
        } 
    } else {
        document.querySelector("h1").style.color = "#f0ad4e";
        document.querySelector("h1").innerHTML = "Please fill in all fields!";
      }          
}