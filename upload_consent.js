
var showuploadterms = {
	state0: {
		html:'<font face=arial size=2>The image upload plugin is a free service allowing you to upload a <b>non-offensive</b> image to <b>imgbb.com</b>, a third-party website.<br><img src=https://images.boardhost.com/invisible.gif height=1><br>This plugin and <b>imgbb.com</b> are unaffiliated with Boardhost or this message board. Your use of this plugin is subject to <b>imgbb.com</b>\'s <a href=https://imgbb.com/tos target=_terms><font color=#489afe><u>Terms of Service</u></font></a> and image usage policies.</b></font><table border=0 style="font-family:arial;color:#000000;line-height:150%"><tr><td colspan=2><hr noshade size=1 style="margin:2px;"></td></tr><tr><td><input type=checkbox name=agreeremember1 id=agreeremember1 onclick=uploadcookie() style="margin-top:-1px;"></td><td><font size=2><label for=agreeremember1>Don\'t show me this next time</label></td><tr></table>',
		buttons: { Cancel: false, Agree: true },
		focus: 1,
		submit:function(e,v,m,f){
			if(v){
				$( "#uploadbutton" ).click();
				$.prompt.close();
			}
			else {
				$.prompt.close();
			}		
		}
	},
};
function uploadconsent() {
var ccookie = GetCookie("upload_agreed");
if (!(ccookie > 0)) { $.prompt(showuploadterms); } 
else { $( "#uploadbutton" ).click(); }
}
function uploadcookie() {
      var now = new Date();  
      now.setMonth(now.getMonth() + 6);  
      if (document.getElementById("agreeremember1").checked == true) { 
	      document.cookie = "upload_agreed=1; expires = " + now.toUTCString() + ";";
      }
      else {
	      document.cookie = "upload_agreed=0; expires=;";
      }
}
/////////////////////////////////////////////////////////////
// Written by: Bill Dortch, hIdaho Design <bdortch@netw.com>
// The following functions are released to the public domain.
function getCookieVal (offset) {
         var endstr = document.cookie.indexOf (";", offset);
            if (endstr == -1)
            endstr = document.cookie.length;
         return unescape(document.cookie.substring(offset, endstr));
         }

function GetCookie (name) {
         var arg = name + "=";
         var alen = arg.length;
         var clen = document.cookie.length;
         var i = 0;
         while (i < clen) {
         var j = i + alen;
             if (document.cookie.substring(i, j) == arg)
             return getCookieVal (j);
         i = document.cookie.indexOf(" ", i) + 1;
             if (i == 0) break;
             }

     return null;
     }
// End cookie code
/////////////////////////////////////////////////////////////



