
		function checkCookie(){
			if(navigator.cookieEnabled == false){
				mainbox.style.display="none";
				document.body.style.backgroundColor="black";
				document.body.innerHTML="<h1 style='color:red;font-family:calibri;background-color:yellow;text-align:center;'>Enable Cookie</h1>";
			}
		}
		checkCookie();
		
		function checkBrowser(){
			if(navigator.userAgent.indexOf("MSIE") != -1){
				mainbox.style.display="none";
				document.body.style.backgroundColor="black";
				document.body.innerHTML="<h1 style='color:red;font-family:calibri;background-color:yellow;text-align:center;'>Open In Chrome Browser</h1>";
			}
		}
		checkBrowser();
        