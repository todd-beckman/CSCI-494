<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            SyScI
        </title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css"
            href="/includes/bootstrap.min.css">
        <link rel="stylesheet" type="text/css"
            href="/css/style.css">
        <script type="text/javascript" src="/js/script.js"></script>
    </head>
    <body onload="loadlinks()">
        <div id="wrapper" class="container-fluid">
            <div class="row">
                <div id="header" class="col-xs-12 col-sm-8">
                    <a href="/">
                        <div class="col-xs-12 col-sm-2 text-center">
                            <img id="logo" src="/img/logo.png" alt="SciSI Logo">
                        </div>
                        <div class="col-xs-12 col-sm-2 text-center">
                            <h2 id="pagetitle">
                                <em>SyScI</em>
                            </h2>
                        </div>
                        <div id="motto" class="col-xs-12 col-sm-8 text-center">
                            <h3><em>Synergistic Scalable Integration</em></h3>
                        </div>
                    </a>
                </div>
                <a href="/explore/">
                    <div id="explore" class="col-xs-12 col-sm-2 text-center">
                        <h3>Explore</h3>
                    </div>
                </a>
                <a href="/contact/">
                    <div id="contact" class="col-xs-12 col-sm-2 text-center">
                        <h3>Contact</h3>
                    </div>
                </a>
            </div>
            <div class="row">
                <div id="intro" class="col-xs-12 text-center">
                    <p>Integrity, Synergy, Scalability</p>
                </div>
            </div>
            <div class="row">
                <div id="desc" class="col-xs-12">
                    <p class="lead">
                        Our highly skilled team of passionate consultants can transform your company. We offer a multitude of sustainable, scalable solutions to maximize your synergy. Leveraging our innovative analytics we enable you to reach your potential. We engage your employees to boost your integration. Other companies offering synergy and integration try to integrate <em>for</em> you, we are the only company to integrate <em>with</em> you.
                    </p>
                </div>
            </div>
            <div class="row-fluid">
                <div class="col-xs-12 text-center">
                    <h1>Meet Our Team</h1>
                </div>
            </div>
            <div id="profiles" class="row-fluid">
                <?php
$people = scandir("people");
for ($i = 0; $i < count($people); $i++) {
    $name=$people[$i];
    if (2 < strlen($name)) {
        $data = json_decode(file_get_contents("people/$name"));
        $fullname=$data->name;
        $shortname=strtolower(substr($fullname, 0, strrpos($fullname, " ")));
        $title=$data->title;
        echo "<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center profile\"><a href=\"/profile/?p=$shortname\"><div class=\"profilelink\"><img src=\"/img/$shortname.jpg\" class=\"profilepic\" alt=\"$fullname\"><h2>$fullname</h2><h3>$title</h3></div></a></div>";
    }
}
                ?>
            </div>
            <div id="footer" class="row">
                <div class="col-xs-12 text-center">
                    &copy; 2015 SyScI LLC Incorporated
                </div>
            </div>
        </div>
    </body>
</html>


<!--
Here at SyScI we maximize your success. One of the many challenges of a company is synergizing and integrating both internally and externally; this is where we help.
    -->