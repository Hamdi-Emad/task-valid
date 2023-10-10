function ValidationForm(){
    var tex1 = document.getElementById("tex1").value
    var tex2 = document.getElementById("tex2").value
    var email = document.getElementById("email").value
    var pass1 = document.getElementById("pass1").value
    var pass2 = document.getElementById("pass2").value
    var birth = document.getElementById("birth").value
    var radio = document.getElementById("man").value
    var error = document.getElementById("span")
    var text = ""
    
    if(tex1.length < 5 ){
        text = "Please inter valid Name "
        error.innerHTML = text
        return false
    }
    else if(tex2.length < 5 ){
        text = "Please inter valid Family Name "
        error.innerHTML = text
        return false;
    }
    else if(email.length < 15 || email.indexOf("@") == -1 ){
        text = "Please inter valid Email "
        error.innerHTML = text
        return false;
    }
    else if(pass1.length < 8 ){
        text = "Password must be more than 8 characters"
        error.innerHTML = text
        return false;
    }
    else if(pass2.length < 8 ){
        text = "Password must be more than 8 characters"
        error.innerHTML = text
        return false;
    }
    else if(pass1 != pass2 ){
        text = "The password must be the same"
        error.innerHTML = text
        return false;
    }
    else{
        alert("done");
        return true;
    }
}