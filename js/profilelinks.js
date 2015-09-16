
function loadlinks() {
    var data;
    httpGetAsync(ROOTURL + "/php/allpeople.php", function (response) {
        data = response.split(',');
        for (var x = 0; x < data.length; x++) {
            if (data[x].indexOf(".json") == -1) {
                continue;
            }
            httpGetAsync(ROOTURL+"/php/getperson.php?p="+data[x].split(".")[0],
                function (response) {
                    d = JSON.parse(response);
                    var shortname = d.name.split(" ")[0].toLowerCase();
                    var name = d.name;
                    var title = d.title;
                    document.getElementById("profiles").innerHTML +=
                        "<div class=\"col-xs-12 col-sm-6 col-md-4 text-center profile\"><a href=\"/profile/?p=" + shortname + "\"><div class=\"profilelink\"><img src=\"/img/" + shortname + ".jpg\" class=\"profilepic\" alt=\"" + name + "\"><h2>" + name + "</h2><h3>" + title + "</h3></div></a></div>";
            });
        }
    });
}
