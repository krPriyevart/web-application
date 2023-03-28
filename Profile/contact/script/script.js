   function profile_pic(){
            var pic_box = document.getElementById("profile_pic");
            var user_mail = sessionStorage.getItem("user_mail");
            
            var img_up_var =        localStorage.getItem(user_mail+"__image_url"); 
            pic_box.style.background = "url("+img_up_var+")";
            pic_box.style.backgroundRepeat = "none";
            pic_box.style.backgroundSize = "cover";
            pic_box.style.backgroundColor = "white";
        }
        profile_pic();
function add_contact(){
     
    var pop_text = document.getElementById("c_save_pop");
    var fullname = document.getElementById("nbox").value;
    var fnumber = document.getElementById("fnumber").value;
    var snumber =  document.getElementById("snumber").value;
    if(fullname !="" && fnumber !="" && snumber!=""){
      
        if(fullname.length < "4"){
            nbox_c();pc_box();
            pop_text.innerHTML = "enter valid fullname...";
            setTimeout(function(){
                pop_text.style.display = "none";
            },2000);
          
        }
        else if(fnumber.length < "10"){
            fbox_c();pc_box();
            pop_text.innerHTML = "enter valid 10digit f number...";
            setTimeout(function(){
                pop_text.style.display = "none";
            },2000);
            
        }  
         else if(snumber.length < "10"){
            sbox_c();pc_box();
            pop_text.innerHTML = "enter valid 10digit s number..."
            setTimeout(function(){
                pop_text.style.display = "none";
            },2000);
            
         }
        else{
            var user = {fullname:fullname,pnum:fnumber,snum:snumber};
            var user_detail = JSON.stringify(user);
            var user_mail = sessionStorage.getItem("user_mail");
            localStorage.setItem(user_mail+"_contact"+fullname,user_detail);
            pop_text.style.display="block";
            pop_text.innerHTML ="sucessfully saved!";
            pop_text.style.color = "green";
            pc_box_sucess();
            setTimeout(function(){
                pop_text.style.display = "none";
                pop_text.style.color = "red";
                window.location = location.href;
            },2000);
        }
        
    }
    else{
       nbox_c();fbox_c();sbox_c();pc_box();
       pop_text.innerHTML = "enter valid input..."
       setTimeout(function(){
                pop_text.style.display = "none";
            },2000);
    }
   
}
function nbox_c(){
            var nbox = document.getElementById("nbox");
            nbox.style.borderLeftColor="red";
            setTimeout(function(){
                nbox.style.borderLeftColor="#008aff";
                window.location = location.href;
            },2000);
    }
 function fbox_c(){
            var fbox = document.getElementById("fnumber");
            fbox.style.borderLeftColor="red";
            setTimeout(function(){
                fbox.style.borderLeftColor="#008aff";
                window.location = location.href;
            },2000);
    }
function sbox_c(){
            var sbox = document.getElementById("snumber");
            sbox.style.borderLeftColor="red";
            setTimeout(function(){
                sbox.style.borderLeftColor="#008aff";
                window.location = location.href;
            },2000);
    }
function pc_box(){
    var box = document.getElementById("pc_box");
    var p_logo = document.getElementById("p_logo");
    box.style.borderLeftColor="red";
    box.style.borderBottomColor="red";
    p_logo.style.color="red";
    setTimeout(function(){
        box.style.borderLeftColor="#FF7466";
        box.style.borderBottomColor="#FF7466";
        p_logo.style.color="#FF7466";
    },2000);
    
}
function pc_box_sucess(){
    var box = document.getElementById("pc_box");
    var p_logo = document.getElementById("p_logo");
    box.style.borderLeftColor="green";
    box.style.borderBottomColor="green";
    p_logo.style.color="green";
    setTimeout(function(){
        box.style.borderLeftColor="#FF7466";
        box.style.borderBottomColor="#FF7466";
        p_logo.style.color="#FF7466";
    },2000);
    
}

function show_contact(){
    
    var i;
    var user_mail = sessionStorage.getItem("user_mail");
    console.log(user_mail);
    for(i=1;i<=localStorage.length;i++){
        var keys = localStorage.key(i);
        if(keys.match(user_mail+"_contact")){
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var c_list = document.getElementById("c_list")
            var fieldset = document.createElement("FIELDSET");
            var legend =  document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var li_one = document.createElement("LI");
            var li_two = document.createElement("LI");
            var itag = document.createElement("I");
            var saved = document.createElement("SPAN");
            var save = document.createElement("I");
            itag.setAttribute("class","fa fa-trash");
            itag.setAttribute("id","delete-icon");
            var edit = document.createElement("I");
            edit.setAttribute("class","fa fa-edit");
            edit.setAttribute("id","delete-icon");
            edit.setAttribute("style","margin-right:35px;");
            save.setAttribute("class","fa fa-save");
            save.setAttribute("id","delete-icon");
            save.setAttribute("style","margin-right:0px;");
            saved.appendChild(document.createTextNode("saved successfully !"));
            save.style.display="none";
            saved.style.display="none";
            c_list.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            ol.appendChild(itag);
            ol.appendChild(edit); 
            ol.appendChild(save);
            ol.appendChild(saved); legend.appendChild(document.createTextNode(json_extract.fullname)); 
            li_one.appendChild(document.createTextNode(" +91 " + json_extract.pnum));
            li_two.appendChild(document.createTextNode(" +91 " + json_extract.snum));
            del_contact(keys,itag);
            edit_contact(keys,edit,save,saved,itag);
        }
    }  
     window.location = location.href;
}
show_contact();
function del_contact(contact_name,del_button){
    del_button.onclick = function(){
        var answer = confirm("delete " + contact_name);
        if(answer==true){
            var ol = this.parentElement;
            var fieldset = ol.parentElement;
            fieldset.remove();
            localStorage.removeItem(contact_name);  
            window.location = location.href;
            
            var c_list = document.getElementById("c_list").children.length;
            if(c_list==0){
            document.getElementById("c_l_t").innerHTML = "No Contact";
            }
            else{
            document.getElementById("c_l_t").innerHTML = "Contact list";
            }
            return false;
        }
    }
}
window.onload = function(){
    var c_list = document.getElementById("c_list").children.length;
    if(c_list==0){
        document.getElementById("c_l_t").innerHTML = "No Contact";
    }
    else{
        document.getElementById("c_l_t").innerHTML = "Contact list";
    }
    return false;
}

function search_c(contact_s){
    var keyword = contact_s.value.toUpperCase();
    var c_list = document.getElementById("c_list");
    var legend = c_list.getElementsByTagName("LEGEND");
    var i;
    for(i=0;i<legend.length;i++){
        if(legend[i].innerHTML.toUpperCase().indexOf(keyword) != -1){
           legend[i].parentElement.style.display=""; 
        }
        else{
            legend[i].parentElement.style.display="none";
        }
    }
}
function edit_contact(keys,edit_btn,save_btn,saved_txt,del_btn){
    edit_btn.onclick = function(){
        del_btn.style.display="none";
        save_btn.style.display = "block";
        var ol = this.parentElement;
        var fieldset = ol.parentElement;
        var legend = fieldset.getElementsByTagName("LEGEND");
        legend[0].setAttribute("contenteditable","true");
        legend[0].setAttribute("style","color:red;text-shadow:1px 1px 1px YELLOW;");
        
        var li = ol.getElementsByTagName("LI");
        var i;
        for(i=0;i<li.length;i++){
            li[i].setAttribute("contenteditable",true);
            li[i].setAttribute("style","color:red;text-shadow:1px 1px 1px YELLOW;");
        }
        var recent_leg;
        var current_leg = [];
        legend[0].onclick = function(){
            recent_leg = this.innerHTML;
        }
        legend[0].onblur = function(){
            current_leg = this.innerHTML;
        }
        var recent_num = [];
        var current_num = [];
        li[0].onclick = function(){
            recent_num[0] = this.innerHTML;
        }
        li[1].onclick = function(){
            recent_num[1] = this.innerHTML;
        }
        li[0].onblur = function(){
            current_num[0] = this.innerHTML;
        }
        li[1].onblur = function(){
            current_num[1] = this.innerHTML;
        }
        
//        save_btn.onclick = function(){
//        
//           if(current_leg.length == undefined){
//               current_leg = recent_leg;
//           }
//           if(current_num.length == undefined){
//               current_num[0] = recent_num[0];
//           }
//           if(current_num.length == undefined){
//               current_num[1] = recent_num[1];
//           }
//            var edited_data =  {fullname:current_leg, pnum:current_num[0], snum:current_num[1]};
//            var final_data = JSON.stringify(edited_data);
//            var txt = localStorage.getItem(keys);
//            localStorage.setItem(keys,txt.replace(txt,final_data));
//            saved_txt.style.display="block";
//            setTimeout(function(){saved_txt.style.display="none";legend[0].style.color="yellow";
//                                  legend[0].style.color="yellow";},2000);
//            for(i=0;i<li.length;i++){
//            li[i].setAttribute("style","color:yellow;text-shadow:none;");
//        }
//            setTimeout(function(){alert(current_leg)},4000);
//        }
        save_btn.onclick = function() {
  
  var edited_data =  {
    fullname: current_leg==undefined?legend[0].innerHTML:current_leg,
    pnum: current_num[0]==undefined?li[0].innerHTML:current_num[0],
    snum: current_num[1]==undefined?li[1].innerHTML:current_num[1]
  };
  var final_data = JSON.stringify(edited_data);
  var txt = localStorage.getItem(keys);
  localStorage.setItem(keys, final_data);
  saved_txt.style.display = "block";
  setTimeout(function() {
    saved_txt.style.display = "none";
    legend[0].style.color = "yellow";
    legend[0].style.color = "yellow";
  }, 2000);
  for(var i = 0; i < li.length; i++) {
    li[i].style.color = "yellow";
    li[i].style.textShadow = "none";
  }
 
}

    }
}









