window.debugging = false;   //  changes between localhost and web server

window.ROOTURL = debugging ? "http://localhost:8080" : "http://sysci.xyz";

// http://papermashup.com/read-url-get-variables-withjavascript/
window.getUrlVars = function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}

window.ajax = function(theUrl, callback, sync) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, sync ? false : true); // true for asynchronous
    xmlHttp.send(null);
}