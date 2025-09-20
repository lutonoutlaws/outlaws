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

function prefill () {
 var namevalue = GetCookie('requested_save_poster_name');
if (!namevalue) { var namevalue = GetCookie('postername'); }
 if (namevalue) { if (document.msg.yourname) { document.msg.yourname.value = namevalue; } }
}
function erasename () {
document.cookie = 'requested_save_poster_name=;expires=Thu, 01-Jan-70 00:00:01 GMT;';
document.cookie = 'postername=;expires=Thu, 01-Jan-70 00:00:01 GMT;';
document.cookie = 'posteremail=;expires=Thu, 01-Jan-70 00:00:01 GMT;';
document.msg.yourname.value = "";
if (document.msg.email.value) { document.msg.email.value = ""; }
document.getElementById("cookiegreeting").style.display="none";
return false;
}
