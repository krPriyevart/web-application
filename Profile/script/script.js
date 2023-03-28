
function up_profile(){
    // var filename = document.getElementById("profile_pic_input").files[0];
    // var reader = new FileReader();
    // reader.readAsDataURL(filename);
    // reader.onload = function(){
    //     var iframe = document.getElementById("dis_img");
    //     iframe.scr = reader.result;     
    // }
    //var url = URL.createObjectURL(filename.files[0]);
       
       var filename = document.getElementById("profile_pic_input");
       if(filename.files[0].size < 2000000)
       {
       var reader = new FileReader();
       reader.readAsDataURL(filename.files[0]);
       reader.onloadend = function(event){
       //var image_url = event.target.result;
       var dis_img = document.getElementById("dis_img");
           var img_url_path = event.target.result;
       dis_img.src= img_url_path;
        
       var for_button = document.getElementById("forward_btn");
       for_button.style.display="block";    
       for_button.onclick = function(){
        localStorage.setItem(sessionStorage.getItem('user_mail')+"__image_url",img_url_path);
        document.getElementById("profile_box").style.display="none";
        document.getElementById("app_content").style.display="block";
            window.location = location.href;
       }
      
       }}
       else{
        alert("image size must be lesser then 2mb")
       }
}
function profile_name(){
    var result = document.getElementById("username");
    var h_name = document.getElementById("h_name");
    var h_img = document.getElementById("h_img");
    var user_mail = sessionStorage.getItem("user_mail");
    var user_details = localStorage.getItem(user_mail);
    var user_data = JSON.parse(user_details);
    var enco_name = user_data.name;
    h_name.innerHTML = enco_name;
    result.innerHTML = enco_name;
    
    var img_up_var = localStorage.getItem(user_mail+"__image_url"); 
    h_img.style.background = "url("+img_up_var+")";
    h_img.style.backgroundRepeat = "none";
    h_img.style.backgroundSize = "cover";
    h_img.style.backgroundColor = "white";
    
    if(localStorage.getItem(user_mail+"__image_url") != null){
       document.getElementById("profile_box").style.display="none";
        document.getElementById("app_content").style.display="block"; document.getElementById("app_content").style.zIndex="1"; document.getElementById("body").style.backgroundColor="white";  
    }
    else{
        document.getElementById("profile_box").style.display="block";
        document.getElementById("app_content").style.display="none";
         document.getElementById("app_content").style.zIndex="-1";  document.getElementById("body").style.backgroundColor="black"; 
    }
}
 document.getElementById("app_content").style.display="none";




profile_name();






