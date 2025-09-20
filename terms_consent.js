function agreeall() {
	if (document.getElementById('agreeterms').checked == true) {
		document.getElementById('agreeterms').checked = false;
		document.getElementById('agreeconsent').checked = false;
		document.getElementById('agreeprivacy').checked = false;
		document.getElementById('agreeremember').checked = false;
	}
	else {
		document.getElementById('agreeterms').checked = true;
		document.getElementById('agreeconsent').checked = true;
		document.getElementById('agreeprivacy').checked = true;
		document.getElementById('agreeremember').checked = true;
	}
}
var showterms = {
	state0: {
		html:'<font face=arial size=2><b>Please agree to the following to post your message:</b></font><hr noshade size=1><table border=0 style="font-family:arial;color:#000000;line-height:120%"><tr><td><input type=checkbox id=agreeterms name=agreeterms style="margin-top:-1px;"></td><td><font size=2><label for=agreeterms>I agree to the message board\'s <a href=\"https://www.boardhost.com/terms/tou_pop.html\" target=\"usageterms\" onclick=\"window.open(\'https://www.boardhost.com/terms/tou_pop.html\',\'usageterms\',\'width=350,height=450,scrollbars=yes\'); return false\"><font color=#489AFE><u>usage terms</u></font></a>.</label></b></td></tr><tr><td valign=top><font size=2><input type=checkbox id=agreeconsent name=agreeconsent style="margin-top:-1px;"></td><td valign=top><font size=2><label for=agreeconsent>I consent to my messages being posted publicly to this message board and understand that information such as my IP address will be logged and shared with the message board creator and/or moderators in order to control abuse.</label></b></td></tr><tr><td valign=top><input type=checkbox id=agreeprivacy name=agreeprivacy style="margin-top:-1px;"></td><td valign=top><font size=2><label for=agreeprivacy>I consent to the message board\'s <a href=https://boardhost.com/privacy.html target=_privacy><font color=#489AFE><u>Privacy Policy</u></font></a> and the board\'s usage of cookies.</label></b></td></tr><tr><td colspan=2><hr noshade size=1 style="margin:2px;"></td></tr><tr><td><input type=checkbox name=agreeremember id=agreeremember style="margin-top:-1px;"></td><td><font size=2><label for=agreeremember>Remember my consent for 6 months <font style="font-size:11px;">(optional)</font></label></td><tr></table><a href=javascript:agreeall(); style="float:right;"><font face=arial color=#489AFE><u>Select all</u></font></a>',
		buttons: { Cancel: false, Agree: true },
		focus: 1,
		submit:function(e,v,m,f){
			if(v){
				e.preventDefault();
				if (!((document.getElementById('agreeterms').checked == true) && (document.getElementById('agreeconsent').checked == true) && (document.getElementById('agreeprivacy').checked == true))) { $.prompt.goToState('state1', true); return false;  }
				else { 
					if (document.getElementById('agreeremember').checked == true) { 
						document.getElementById('terms_prompted_remember').value = 1; 
					}
					document.getElementById('terms_prompted_agreed').value = 1; 

					$.prompt.close();
					document.getElementById("msg").submit(); }
				
			}
			$.prompt.close();
			
		}
	},
	state1: {
		html:'You must agree to the first 3 items to post your message.',
		buttons: { Back: -1, Cancel: 0 },
		focus: 0,
		submit:function(e,v,m,f){
			e.preventDefault();
			if(v==0)
				$.prompt.close();
			else if(v==-1)
				$.prompt.goToState('state0');
		}
	}
};
function postconsent() {
var ccookie = GetCookie("terms_agreed");
if (!(ccookie > 20180000)) { if (document.getElementById("terms_prompted_agreed").value < 1) { $.prompt(showterms); } else { document.getElementById("msg").submit(); }} else { document.getElementById("msg").submit(); } 
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



