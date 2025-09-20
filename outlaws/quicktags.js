// JS QuickTags version 1.2
//
// Copyright (c) 2002-2005 Alex King
// http://www.alexking.org/
//
// Licensed under the LGPL license
// http://www.gnu.org/copyleft/lesser.html
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************
//
// This JavaScript will insert the tags below at the cursor position in IE and 
// Gecko-based browsers (Mozilla, Camino, Firefox, Netscape). For browsers that 
// do not support inserting at the cursor position (Safari, OmniWeb) it appends
// the tags to the end of the content.
//
// The variable 'edCanvas' must be defined as the <textarea> element you want 
// to be editing in. See the accompanying 'index.html' page for an example.

function smiley(myValue) {
	myField = document.forms.msg.msg;
	//IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		myField.focus();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		myField.value = myField.value.substring(0, startPos)
		              + myValue 
                      + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		myField.value += myValue;
		myField.focus();
	}
}

function tag(myField, start, end) {
	//IE support
	if (document.selection) {
		myField.focus();
	    sel = document.selection.createRange();
		if (sel.text.length > 0) {
			sel.text = start + sel.text + end;
		}
		else {
		//	if (!edCheckOpenTags(i) || edButtons[i].tagEnd == '') {
		//		sel.text = edButtons[i].tagStart;
		//		edAddTag(i);
		//	}
		//	else {
		//		sel.text = edButtons[i].tagEnd;
		//		edRemoveTag(i);
		//	}
		sel.text = start + end;
		}
		myField.focus();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = endPos;
		var scrollTop = myField.scrollTop;
		if (startPos != endPos) {
			myField.value = myField.value.substring(0, startPos)
			              + start
			              + myField.value.substring(startPos, endPos) 
			              + end
			              + myField.value.substring(endPos, myField.value.length);
			cursorPos += start.length + end.length;
		}
		else {
		//	if (!edCheckOpenTags(i) || edButtons[i].tagEnd == '') {
				myField.value = myField.value.substring(0, startPos) 
				              + start + end
				              + myField.value.substring(endPos, myField.value.length);
		//		edAddTag(i);
		//		cursorPos = startPos + edButtons[i].tagStart.length;
		//	}
		//	else {
		//		myField.value = myField.value.substring(0, startPos) 
		//		              + edButtons[i].tagEnd
		//		              + myField.value.substring(endPos, myField.value.length);
		//		edRemoveTag(i);
		//		cursorPos = startPos + edButtons[i].tagEnd.length;
		//	}
			cursorPos = startPos + start.length;
		}
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		myField.scrollTop = scrollTop;
	}
	else {
		//if (!edCheckOpenTags(i) || edButtons[i].tagEnd == '') {
		//	myField.value += edButtons[i].tagStart;
		//	edAddTag(i);
		//}
		//else {
		//	myField.value += edButtons[i].tagEnd;
		//	edRemoveTag(i);
		//}
		myField.value += start + end;
		myField.focus();
	}
}


function link(myField, myURL, myTITLE) {
	if (myURL.value == "https://"||!myURL.value) { alert("You have not entered a URL.  Please try again."); return false; }
	if (myURL.value.substring(14,0) == "http://http://") { alert("Your URL appears to contain a duplicate \"http://\" and therefore will not function correctly.  Please try again."); return false; }
	if (myURL.value.substring(14,0) == "https://https://") { alert("Your URL appears to contain a duplicate \"https://\" and therefore will not function correctly.  Please try again."); return false; }
	if (!myTITLE.value) { myTITLE.value = myURL.value; }
	var myValue = "[url=" + myURL.value + "]" + myTITLE.value + "[/url]";
	//IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		myField.focus();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		myField.value = myField.value.substring(0, startPos)
		              + myValue 
                      + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		myField.value += myValue;
		myField.focus();
	}
	myURL.value = "https://";
	myTITLE.value = "";
}

function image(myField, myURL) {
	if (myURL.value == "https://"||!myURL.value) { alert("You have not entered a URL.  Please try again."); return false; }
	if (myURL.value.substring(14,0) == "http://http://") { alert("Your URL appears to contain a duplicate \"http://\" and therefore will not function correctly.  Please try again."); return false; }
	if (myURL.value.substring(14,0) == "https://https://") { alert("Your URL appears to contain a duplicate \"https://\" and therefore will not function correctly.  Please try again."); return false; }
	var myValue = "[img]" + myURL.value + "[/img]";
	//IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		myField.focus();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		myField.value = myField.value.substring(0, startPos)
		              + myValue 
                      + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		myField.value += myValue;
		myField.focus();
	}
	myURL.value = "http://";
}


//
//
//
//
//
// miscellaneous unrelated functions, here because it's already loaded!
//
//
//
//

function add_a_link() {
	if (document.getElementById("optional_link").style.display == "none") {
		document.getElementById("optional_link").style.display = "";
		document.getElementById("linkspan").style.border = "1px inset #999999";
		document.msg["url_title"].focus();
	}
	else {
		document.getElementById("optional_link").style.display = "none";
	}
}

function includepoll() {
	if (document.getElementById("poll_form").style.display == "none") {
		document.getElementById("poll_form").style.display="";
		document.forms.msg.poll_post.value="1";
		//alert("You may now scroll down to include a poll in this post.");
	}
	else {
		document.getElementById("poll_form").style.display="none";
		document.forms.msg.poll_post.value="0";
	}
}

function add_an_image() {
	if (document.getElementById("optional_image").style.display == "none") {
		document.getElementById("optional_image").style.display = "";
		document.getElementById("imagespan").style.border = "1px inset #999999";
		document.msg.img.focus();
	}
	else {
		document.getElementById("optional_image").style.display = "none";
	}
}
function smilies() {
	if (document.getElementById("smilies").style.display == "none") {
		document.getElementById("smilies").style.display = "";
		//document.getElementById("linkspan").style.border = "1px inset #999999";
	}
	else {
		document.getElementById("smilies").style.display = "none";
	}
}
function toggle(over,spanid) {
	if (over) {
		document.getElementById(spanid).style.border = "1px inset #999999";
	}
	else {
		if (spanid == "smileyspan") { 
			if (!(document.getElementById("smilies").style.display == "none")) { return; }
		}
		else if (spanid == "pollspan") {
			if (!(document.getElementById("poll_form").style.display == "none")) { return; }
		}
		else if (spanid == "imagespan") {
			if (!(document.getElementById("optional_image").style.display == "none")) { return; }
		}
		else if (spanid == "linkspan") {
			if (!(document.getElementById("optional_link").style.display == "none")) { return; }
		}
		document.getElementById(spanid).style.border = "1px solid #EEEEEE";
	}
}


function notifyme() {
    if (document.getElementById("notify_me").checked == true) {
    var notify_email = prompt("Please enter your email address:\n", "");
    if (notify_email == null) { document.getElementById("notify_me").checked = false; }
    else if(!validateemail(notify_email)) {    
        alert("Sorry, that doesn't appear to be a valid email address. Please try again.");
        notifyme();
    } 
    else {
        document.getElementById("email").value = notify_email;
    }
}
}
function validateemail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function notifyme2() {
if (document.getElementById("notify_me").checked == true) {
	$.prompt(notifyme3);
	if (GetCookie("requested_save_email_notifications")) { 
		document.getElementById("emailremember").checked = true;
		document.getElementById("notifyemail").value = GetCookie("requested_save_email_notifications");
		document.getElementById("remembertext").innerHTML = "<b>(Previously selected)</b>";
		document.getElementById("privacytext").innerHTML = "";
		document.getElementById("remembertext2").innerHTML = "<a href=javascript:forgetemailnotify();><font color=#489AFE><u>Forget email</u></font></a>";

	}
	else {
		document.getElementById("emailremember").checked = false;
		document.getElementById("notifyemail").value = "";
	}
}
}
function forgetemailnotify() {
	var pathArray = window.location.pathname.split( '/' );
	var mbpath = pathArray[1];
	document.cookie = "requested_save_email_notifications=; max-age=0; path=/" + mbpath + "/";
	document.getElementById("emailremember").checked = false;
	document.getElementById("notify_me").checked = false;
	document.getElementById("notifyemail").value = "";
	document.getElementById("email").value = "";
	$.prompt.close();
}


var notifyme3 = {

	state0: {

		html: '<font face=arial size=2><b>Please enter your email address to receive notifications:</b></font><table border=0 style="font-family:arial;color:#000000;line-height:120%"><tr><td colspan=2><input type=text name=notifyemail size=40 id=notifyemail> <span id=remembertext2></span></td></tr><tr><td colspan=2><hr noshade size=1 style="margin-top:2px;"></td></tr><tr><td valign=top><input type=checkbox name=emailremember id=emailremember style="margin-top:-1px;"></td><td><font size=2><label for=emailremember>Remember my email address in a cookie for the next time I request notifications. <span id=remembertext></span> <span id=privacytext><a href=https://boardhost.com/privacy.html target=_privacy><font color=#489AFE><u>Privacy Policy</u></font></a></span></font></label></td><tr></table>',
		buttons: { Cancel: false, Okay: true },
		focus: 1,
		submit:function(e,v,m,f){
			if(v){
				e.preventDefault();
				var notify_email = document.getElementById('notifyemail').value;
				if (!validateemail(notify_email)) { $.prompt.goToState('state1', true); return false;  }
				else { 
					document.getElementById("email").value = notify_email;
					if (document.getElementById("emailremember").checked == true) { 

						var pathArray = window.location.pathname.split( '/' );
						var mbpath = pathArray[1];
						document.cookie = "requested_save_email_notifications=" + notify_email + "; max-age=7776000; path=/" + mbpath + "/";
					}
					else {
						var pathArray = window.location.pathname.split( '/' );
						var mbpath = pathArray[1];
						document.cookie = "requested_save_email_notifications=; max-age=0; path=/" + mbpath + "/";
					}
				}				
			}
			else {
				document.getElementById("notify_me").checked = false;
			}
			$.prompt.close();
		}
	},
	state1: {
		html:'Your email address does not appear to be valid.',
		buttons: { Back: -1, Cancel: 0 },
		focus: 0,
		submit:function(e,v,m,f){
			e.preventDefault();
			if(v==0) {
				document.getElementById("notify_me").checked = false;
				var pathArray = window.location.pathname.split( '/' );
				var mbpath = pathArray[1];
				document.cookie = "requested_save_email_notifications=; max-age=0; path=/" + mbpath + "/";
				$.prompt.close();
			}
			else if(v==-1)
				$.prompt.goToState('state0');
		}
	}
};

function info_img() {
$.prompt("<font size=2>The \"Upload Images\" plugin is a free service allowing you to easily upload a <b>non-offensive</b> image to the Internet, and is provided by imgbb.com.<br><br>imgbb.com is unaffiliated with Boardhost, and your usage of the imgbb plugin is subject to their <a href=https://imgbb.com/tos target=_imgbb>Terms of Service</a>. We are not responsible for imgbb.com's usage and/or retention of your images.</font>");
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

