<?php
    $p = $_GET["p"] or "alex";
    $about=json_decode(file_get_contents("../people/".$p.".json"));
    $shortname=strtolower(substr($about->name, 0, strpos($about->name, " ")));
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            SyScI
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/includes/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <link rel="stylesheet" type="text/css" href="/css/profile.css">
    </head>
    <body>
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
            <div id="personarea" class="row">
                <div class="col-xs-12 col-sm-5">
                    <div id="personpic"><img src=<?='"/img/'.$shortname.'.jpg"'?> alt=<?="\"$about->name\""?>></div>
                    <div id="personinfo" class="row">
                        <div class="col-xs-3">
                            <p class="lead">Email:</p>
                            <p class="lead">Github:</p>
                            <p class="lead">Website:</p>
                        </div>
                        <div class="col-xs-9">
                            <p class="lead"><?=$about->email?></p>
                            <p class="lead"><a href=<?="\"https://github.com/{$about->github}\""?>><?=$about->github?></a></p>
                            <p class="lead"><a href=<?="\"{$about->website}\""?>>Link Here</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7">
                    <h1><?=$about->name?></h1>
                    <h2><?=$about->title?></h2>
                    <div><?=$about->desc?></div>
                </div>
            </div>
        </div>
    </body>
</html>