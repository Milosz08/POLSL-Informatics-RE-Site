//NEW ARRAY
var galTable= new Array(); 
var galx = 0;

//CREATING COOKIE
function CookieNotification_create(name,value,days) { 
    if (days) { 
        var date = new Date(); 
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    } else {
        var expires = ""; 
        document.cookie = name+"="+value+expires+"; path=/"; 
        document.getElementById("simplecookienotification_v01").style.display = "none"; 
    } 
    
//READ COOKIE    
function CookieNotification_read(name) { 
    var nameEQ = name + "="; 
    var ca = document.cookie.split(";"); 
    for(var i=0;i < ca.length;i++) { 
        var c = ca[i]; 
        while (c.charAt(0)==" ") c = c.substring(1,c.length); 
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); 
    } 
    return null;
}

//HIDING COOKIE NOTIFICATION    
var CookieNotificationIst = CookieNotification_read("simplecookienotification_v01");
    if(CookieNotificationIst == 1) {                           
        document.getElementById("simplecookienotification_v01").style.display = "none"; 
    }
