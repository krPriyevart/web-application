


var mainbox = document.getElementById("mainbox");
function sidebar(){
    var sidebar = document.getElementById("sideform");
    sidebar.style.display="block";
    sidebar.style.animation="sidebarform 0.2s";
    sidebar.style.animationFillMode="forwards";
    
}
function sidebarclose(){
    var sidebar = document.getElementById("sideform");
    sidebar.style.animation="sidebarformclose 0.2s";
    sidebar.style.animationFillMode="forwards";
    var ani2s = setInterval(cdown,100);
    function cdown(){
        sidebar.style.display="none";
        clearInterval(ani2s);
    }  
}

function signup(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    if(username !="" && email !="" && mobile !="" && password !=""){
    var user_input = {name:username,email:email,mobile:mobile,password:password};
    var user_data = JSON.stringify(user_input);
        localStorage.setItem(email,user_data);
        document.getElementById("signup_s_t").innerHTML="Sign Up Sucess";
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("mobile").value="";
        document.getElementById("password").value="";
        setTimeout(function(){document.getElementById("signup_s_t").innerHTML=""},2000);
        return false;
    }
    else{
        document.getElementById("signup_s_t").innerHTML="invalid/empty input";
        setTimeout(function(){document.getElementById("signup_s_t").innerHTML=""},2000);
        return false;
    }
}

function user_existed(){
    var email = document.getElementById("email").value;
    if(localStorage.getItem(email) != null)
    {
        document.getElementById("login_s_t").innerHTML="user already existed";
        document.getElementById("mobile").disabled="true";
        document.getElementById("mobile").style.opacity="0.3";
        document.getElementById("password").disabled="true";
        document.getElementById("password").style.opacity="0.3";
        document.getElementById("submit").disabled="true";
        document.getElementById("submit").style.opacity="0.3";
        document.getElementById("submit").style.cursor="not-allowed";

        //creates a new `style` element in the document
var sheet = (function(){
    var style = document.createElement("style");
    // WebKit hack :(
    style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.head.appendChild(style);
    return style.sheet;
  })();
  
  //add the actual rules to it
  sheet.insertRule(
   ".mainbox .sideForm #submit:hover { color: black;font-size:15px;font-weight:normal; }" , 0
  );

    }

  else if(localStorage.getItem(email) == null){
    document.getElementById("login_s_t").innerHTML="";
    document.getElementById("mobile").disabled="";
    document.getElementById("mobile").style.opacity="1";
    document.getElementById("password").disabled="";
    document.getElementById("password").style.opacity="1";
    document.getElementById("submit").disabled="";
    document.getElementById("submit").style.opacity="1";
    document.getElementById("submit").style.cursor="";
    var sheet = (function(){
        var style = document.createElement("style");
        // WebKit hack :(
        style.appendChild(document.createTextNode(""));
        // Add the <style> element to the page
        document.head.appendChild(style);
        return style.sheet;
      })();
      
      //add the actual rules to it
      sheet.insertRule(
       ".mainbox .sideForm #submit:hover { color: #FF7466;font-size:17px;font-weight:bold; }" , 0
      );
  }
    
}

function login(){
    var username = document.getElementById("l_email").value;  
    var password = document.getElementById("l_password").value;
    var log_input = {username:username,password:password};
    var log_data = JSON.stringify(log_input);
    sessionStorage.setItem(username,log_data);
    var session_data = sessionStorage.getItem(username);
    var user_detail = JSON.parse(session_data);
    if(localStorage.getItem(user_detail.username)==null){
        alert("user not exist");
    } 
    else{
        if(localStorage.getItem(user_detail.username).match(user_detail.password)){
            location.replace("profile/index.html");
            sessionStorage.setItem('user_mail',username); 
            return false;
        }
        else{
            alert("incorrect password");
        }
    }
}


