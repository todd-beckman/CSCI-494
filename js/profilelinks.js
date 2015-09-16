function loadlinks() {
    var names;
    ajax(ROOTURL + "/php/allpeople.php", function (response) {
        names = response.split(',');
        names.splice(names.indexOf(".."), 1);
        names.splice(names.indexOf("."), 1);
        var data = [], numitems = names.length, numloaded = 0;
        function finishLoading() {
            console.log(JSON.stringify(data));
            var str = "";
            for (var i = 0; i < data.length; i++) {
                var name = data[i].name;
                var shortname = name.split(" ")[0].toLowerCase();
                str += "<div class=\"col-xs-12 col-sm-6 col-md-4 text-center profile\"><a href=\"/profile/?p=" + shortname + "\"><div class=\"profilelink\"><img src=\"/img/" + shortname + ".jpg\" class=\"profilepic\" alt=\"" + name + "\"><h2>" + name + "</h2><h3>" + data[i].title + "</h3></div></a></div>";
            }
            document.getElementById("profiles").innerHTML = str;
        }
        for (var x = 0; x < names.length; x++) {
            var shortname = names[x].split(".")[0];
            ajax(ROOTURL+"/people/"+names[x],
                function (response) {
                    var d = JSON.parse(response);
                    var index = names.indexOf(d.name.split(" ")[0].toLowerCase() + ".json");
                    console.log(index);
                    data[index] = d;
                    numloaded++;
                    if (numloaded == numitems) {
                        finishLoading();
                    }
                }
            );
        }
    });
}
