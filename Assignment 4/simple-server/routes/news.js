var express = require('express');
var router = express.Router();
var slug = require('slug');
var random = require('faker');



/* GET users listing. */
router.get('/', function (req, res, next) {
    //var data = generatedData; //See Bottom
    var data = generateBlogPosts();
    console.log(data);
    res.render('news', {title: 'News', data:data });
});

module.exports = router;

//Private Methods

function generateBlogPosts() {
    var list = [];
    var stop = 8;
    var item = {};
    for (var i = 0; i < stop; i++) {
        item = generate_news_item();
        list.push(item);
        item = generate_picture_item(i+1);
        list.push(item);
        item = generate_link_item();
        list.push(item);
    }
    return list;
}
var loremWords = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit,", "sed", "do"];
function generate_link_item() {
    var words = 144;
    var item = {};
    item.type = "link";
    var text = "";
    for (var i = 0; i < words; i++)
        text += getRandomWord();
    item.content = text;
    item.datePublished = random.date.recent();
    return item;
}
function generate_picture_item(index) {
    var words = 10;
    var item = {};

    item.type = "picture";
    var text = "";
    for (var i = 0; i < words; i++)
        text += getRandomWord();
    item.content = text;
    item.datePublished = random.date.recent();
    var url = "/images/news/photo";
    if(index > 4)
        index -= 4;
    url += "-"+index+".jpg";
    item.imgUrl = url;
    return item;
}
function generate_news_item() {
    var words = 20;
    var item = {};
    item.type = "news";
    var text = "";
    for (var i2 = 0; i2 < words; i2++)
        text += getRandomWord();
    item.content = text;
    var heading = "";
    for (var i3 = 0; i3 < words / 5; i3++)
        heading += getRandomWord();
    item.heading = heading;

    item.url = slug(heading);
    item.author = random.name.findName();
    item.email = random.internet.email();
    item.datePublished = random.date.recent();
    return item;
}
function getRandomWord() {
    return loremWords[Math.floor((Math.random() * 10))] + " ";
}

var generatedData = [{
    "type": "news",
    "content": "lorem adipisicing sed do elit, consectetur lorem amet adipisicing adipisicing adipisicing consectetur dolor do elit, adipisicing sit elit, do sit ",
    "heading": "do do do sit ",
    "url": "do-do-do-sit",
    "author": "Amya Dietrich",
    "email": "Angelita48@gmail.com",
    "datePublished": "2015-10-03T22:21:48.031Z"
}, {
    "type": "picture",
    "content": "elit, consectetur sit sit lorem elit, sed dolor do consectetur ",
    "datePublished": "2015-10-04T02:21:43.003Z",
    "imgUrl": "/images/news/photo-1.jpg"
}, {
    "type": "link",
    "content": "sit consectetur ipsum adipisicing adipisicing adipisicing lorem sit dolor consectetur ipsum adipisicing lorem ipsum sit consectetur amet sed ipsum ipsum ipsum consectetur elit, ipsum amet sed dolor sit adipisicing ipsum elit, dolor dolor consectetur amet amet lorem sit lorem sed lorem consectetur ipsum elit, ipsum lorem sed consectetur dolor amet elit, lorem sit amet do sed dolor dolor adipisicing sed sed elit, lorem amet elit, ipsum lorem adipisicing dolor ipsum ipsum do sit ipsum lorem sit sit consectetur amet do adipisicing lorem dolor dolor consectetur ipsum amet consectetur lorem amet do ipsum amet dolor consectetur sit amet sit sed consectetur elit, do ipsum lorem ipsum ipsum sit adipisicing elit, amet dolor dolor consectetur adipisicing elit, dolor ipsum amet ipsum sit ipsum sit sit lorem adipisicing adipisicing dolor dolor sed sit sed dolor sit lorem consectetur elit, ipsum dolor dolor do ipsum consectetur dolor sit ",
    "datePublished": "2015-10-04T05:04:07.605Z"
}, {
    "type": "news",
    "content": "adipisicing sit elit, do sed amet sit do lorem consectetur ipsum sed amet do dolor lorem consectetur amet do sit ",
    "heading": "ipsum lorem do amet ",
    "url": "ipsum-lorem-do-amet",
    "author": "Johnnie Sporer",
    "email": "Skyla22@hotmail.com",
    "datePublished": "2015-10-04T09:00:42.708Z"
}, {
    "type": "picture",
    "content": "amet sed ipsum lorem elit, dolor sit dolor dolor sit ",
    "datePublished": "2015-10-04T00:58:46.364Z",
    "imgUrl": "/images/news/photo-2.jpg"
}, {
    "type": "link",
    "content": "elit, consectetur amet elit, dolor sit sit consectetur elit, do sed ipsum do dolor sed do do dolor sit sit sed sit elit, elit, consectetur sed amet adipisicing sed do lorem dolor do amet sed amet lorem elit, adipisicing ipsum consectetur sit do sit lorem amet adipisicing sit ipsum adipisicing do elit, adipisicing ipsum ipsum elit, do dolor do amet dolor ipsum consectetur lorem ipsum sed lorem lorem amet adipisicing dolor amet dolor elit, sit dolor amet amet adipisicing amet consectetur sit elit, dolor ipsum dolor dolor dolor consectetur consectetur amet lorem adipisicing do do sit adipisicing dolor amet amet adipisicing amet do amet amet ipsum adipisicing sed adipisicing sit do consectetur sit amet lorem dolor dolor amet amet ipsum dolor dolor amet do sed lorem lorem lorem ipsum consectetur consectetur lorem lorem ipsum lorem consectetur do adipisicing sed sit sed consectetur adipisicing amet ",
    "datePublished": "2015-10-04T13:13:41.892Z"
}, {
    "type": "news",
    "content": "ipsum consectetur adipisicing adipisicing sed adipisicing adipisicing lorem ipsum consectetur amet sit ipsum lorem sit sed elit, sed dolor lorem ",
    "heading": "elit, dolor do consectetur ",
    "url": "elit-dolor-do-consectetur",
    "author": "Edmund Turner",
    "email": "Cathrine_Gorczany@yahoo.com",
    "datePublished": "2015-10-03T23:48:15.261Z"
}, {
    "type": "picture",
    "content": "dolor adipisicing lorem ipsum elit, sed amet ipsum amet lorem ",
    "datePublished": "2015-10-04T05:43:30.236Z",
    "imgUrl": "/images/news/photo-3.jpg"
}, {
    "type": "link",
    "content": "amet elit, adipisicing consectetur sed adipisicing elit, ipsum elit, amet consectetur adipisicing do amet adipisicing adipisicing adipisicing lorem amet ipsum sit dolor adipisicing do dolor do elit, dolor do ipsum adipisicing amet sit dolor dolor adipisicing lorem consectetur elit, dolor lorem dolor sit elit, dolor adipisicing ipsum dolor amet do do adipisicing sed sed lorem lorem lorem do sit adipisicing elit, dolor lorem dolor dolor lorem sit lorem dolor consectetur do sit adipisicing sit sit ipsum elit, consectetur dolor do adipisicing sit ipsum sed do adipisicing lorem amet elit, amet consectetur lorem adipisicing elit, dolor dolor dolor do sed elit, sed elit, lorem adipisicing dolor sit lorem consectetur elit, lorem sed sed sit elit, consectetur do sit ipsum consectetur adipisicing ipsum sit dolor ipsum lorem lorem do do dolor consectetur elit, sit ipsum ipsum sed adipisicing do do dolor sed lorem adipisicing lorem ipsum ",
    "datePublished": "2015-10-04T03:14:36.278Z"
}, {
    "type": "news",
    "content": "adipisicing ipsum consectetur lorem sed dolor do sit consectetur sit dolor sit do sed lorem sed dolor do consectetur adipisicing ",
    "heading": "dolor sed lorem amet ",
    "url": "dolor-sed-lorem-amet",
    "author": "Andrew Casper",
    "email": "Rylan39@hotmail.com",
    "datePublished": "2015-10-04T13:30:40.639Z"
}, {
    "type": "picture",
    "content": "ipsum ipsum sit consectetur lorem lorem lorem ipsum dolor sit ",
    "datePublished": "2015-10-04T05:30:30.666Z",
    "imgUrl": "/images/news/photo-4.jpg"
}, {
    "type": "link",
    "content": "elit, elit, lorem sed consectetur dolor lorem adipisicing consectetur amet do ipsum dolor consectetur do sed elit, do lorem amet consectetur dolor consectetur lorem sit sed lorem ipsum lorem do lorem amet consectetur sed do sit ipsum lorem sit ipsum adipisicing lorem elit, ipsum amet adipisicing ipsum elit, ipsum amet sit do amet sed sit dolor adipisicing consectetur ipsum elit, sed consectetur elit, sed adipisicing adipisicing sit lorem lorem do sit consectetur sit sit consectetur adipisicing sit elit, do adipisicing lorem sed sit lorem consectetur adipisicing consectetur adipisicing dolor lorem consectetur amet dolor do consectetur adipisicing do sed lorem sit ipsum adipisicing sit lorem adipisicing lorem amet elit, consectetur dolor adipisicing sed amet dolor ipsum dolor sit ipsum do sed elit, lorem elit, do ipsum do dolor adipisicing consectetur ipsum sit dolor ipsum sed lorem adipisicing adipisicing consectetur sit sed elit, consectetur ipsum elit, ",
    "datePublished": "2015-10-03T22:43:50.420Z"
}, {
    "type": "news",
    "content": "amet lorem consectetur dolor dolor lorem sed elit, sed sit do ipsum sit consectetur sed consectetur adipisicing sed adipisicing sed ",
    "heading": "sit do ipsum ipsum ",
    "url": "sit-do-ipsum-ipsum",
    "author": "Kayli Cruickshank",
    "email": "Fabian_Kemmer77@yahoo.com",
    "datePublished": "2015-10-04T16:25:51.431Z"
}, {
    "type": "picture",
    "content": "amet adipisicing do sit do elit, elit, elit, consectetur elit, ",
    "datePublished": "2015-10-04T10:50:26.140Z",
    "imgUrl": "/images/news/photo-1.jpg"
}, {
    "type": "link",
    "content": "lorem elit, ipsum amet lorem sed dolor amet ipsum do adipisicing ipsum lorem consectetur adipisicing lorem sed adipisicing sit amet sit sit lorem elit, adipisicing lorem consectetur elit, dolor sed do sed consectetur sit ipsum amet amet lorem ipsum sit lorem lorem dolor ipsum elit, sed do elit, adipisicing consectetur dolor sed lorem elit, ipsum do lorem ipsum consectetur elit, dolor consectetur lorem sed adipisicing elit, lorem dolor amet ipsum adipisicing lorem lorem amet amet lorem dolor elit, do ipsum do ipsum do elit, ipsum elit, consectetur dolor do adipisicing dolor do sit sit ipsum ipsum lorem sit consectetur amet sit lorem lorem ipsum dolor amet amet dolor sit sit amet sed do adipisicing adipisicing amet ipsum dolor do dolor elit, amet sed lorem sed amet elit, elit, dolor adipisicing adipisicing consectetur lorem amet sit sit amet ipsum do consectetur dolor lorem consectetur dolor ",
    "datePublished": "2015-10-04T12:52:11.654Z"
}, {
    "type": "news",
    "content": "do elit, lorem sit lorem elit, adipisicing consectetur sit dolor ipsum adipisicing do dolor sit lorem sed adipisicing consectetur sed ",
    "heading": "amet amet lorem adipisicing ",
    "url": "amet-amet-lorem-adipisicing",
    "author": "Judson O'Reilly",
    "email": "Laurie.Kovacek13@yahoo.com",
    "datePublished": "2015-10-04T19:31:50.056Z"
}, {
    "type": "picture",
    "content": "sed sed lorem do dolor sed adipisicing dolor ipsum elit, ",
    "datePublished": "2015-10-04T09:27:09.355Z",
    "imgUrl": "/images/news/photo-2.jpg"
}, {
    "type": "link",
    "content": "sit amet ipsum adipisicing elit, consectetur elit, amet consectetur ipsum dolor sit amet amet sed adipisicing lorem sed elit, sit sed dolor amet sed sit adipisicing amet lorem elit, sed dolor dolor lorem elit, ipsum elit, adipisicing sit sit amet do amet adipisicing amet lorem consectetur lorem lorem lorem sit sed do ipsum lorem dolor elit, dolor lorem ipsum dolor adipisicing lorem sit consectetur ipsum ipsum lorem sed do dolor sit do dolor sit dolor lorem amet sit sit consectetur ipsum amet dolor elit, do adipisicing amet ipsum consectetur lorem elit, sit elit, dolor lorem sed ipsum ipsum elit, adipisicing lorem do lorem lorem sit consectetur consectetur do do sed ipsum adipisicing ipsum adipisicing consectetur elit, consectetur sed lorem dolor do lorem lorem elit, sed adipisicing consectetur adipisicing dolor sed consectetur sed sit sit adipisicing consectetur lorem do sit do ipsum ipsum consectetur dolor ",
    "datePublished": "2015-10-03T22:58:56.167Z"
}, {
    "type": "news",
    "content": "consectetur adipisicing adipisicing lorem dolor lorem adipisicing sit lorem do ipsum sed lorem dolor consectetur dolor amet adipisicing adipisicing sed ",
    "heading": "lorem do lorem sed ",
    "url": "lorem-do-lorem-sed",
    "author": "Catalina Durgan",
    "email": "Elza_Hilll@yahoo.com",
    "datePublished": "2015-10-04T10:05:15.854Z"
}, {
    "type": "picture",
    "content": "sit sed amet lorem elit, ipsum do sed elit, lorem ",
    "datePublished": "2015-10-04T19:36:56.031Z",
    "imgUrl": "/images/news/photo-3.jpg"
}, {
    "type": "link",
    "content": "ipsum sit adipisicing ipsum do elit, do amet sit consectetur consectetur consectetur amet sed amet sed amet dolor sit sed amet ipsum adipisicing consectetur elit, lorem do sit sit sed adipisicing sed amet lorem amet adipisicing dolor ipsum sit lorem elit, amet adipisicing ipsum elit, adipisicing sit sed amet dolor dolor ipsum elit, dolor sit lorem consectetur consectetur lorem amet sit do amet sit lorem elit, elit, sit elit, dolor lorem sit sit lorem sed adipisicing elit, sed dolor elit, do do adipisicing dolor elit, do consectetur dolor do dolor do lorem elit, do elit, lorem sit elit, amet sit adipisicing elit, sit sit consectetur elit, dolor do dolor do sed elit, ipsum dolor do ipsum consectetur elit, ipsum lorem dolor lorem amet dolor sed consectetur sed consectetur do ipsum sit sit ipsum ipsum ipsum consectetur sit adipisicing do lorem do adipisicing dolor amet ",
    "datePublished": "2015-10-03T20:35:37.816Z"
}, {
    "type": "news",
    "content": "elit, consectetur ipsum do sed do ipsum sit sed lorem dolor sed amet ipsum dolor elit, ipsum dolor adipisicing elit, ",
    "heading": "ipsum consectetur elit, adipisicing ",
    "url": "ipsum-consectetur-elit-adipisicing",
    "author": "Lilla Bailey",
    "email": "Prudence20@hotmail.com",
    "datePublished": "2015-10-04T10:44:35.077Z"
}, {
    "type": "picture",
    "content": "sed adipisicing adipisicing sed dolor elit, sed adipisicing sit amet ",
    "datePublished": "2015-10-04T02:50:15.714Z",
    "imgUrl": "/images/news/photo-4.jpg"
}, {
    "type": "link",
    "content": "dolor ipsum elit, sit sed sed adipisicing amet ipsum adipisicing elit, consectetur adipisicing do sed do elit, adipisicing amet dolor ipsum sit elit, sed dolor dolor ipsum sed consectetur sit adipisicing elit, ipsum dolor sit do sit lorem do dolor dolor elit, sed amet lorem dolor lorem adipisicing ipsum elit, lorem consectetur amet sed lorem consectetur dolor dolor adipisicing adipisicing sit adipisicing dolor dolor sed sed elit, consectetur consectetur amet do ipsum elit, lorem sit sed elit, ipsum dolor do dolor sit amet do elit, sit sit sit elit, sit dolor dolor sed sit amet ipsum dolor ipsum elit, elit, sed adipisicing amet elit, lorem elit, elit, sed consectetur elit, amet elit, sit elit, consectetur ipsum adipisicing sit sed sed do sed consectetur dolor adipisicing sed adipisicing elit, lorem lorem consectetur dolor dolor lorem adipisicing consectetur dolor sed do ipsum amet sed elit, consectetur ",
    "datePublished": "2015-10-04T02:03:52.224Z"
}];
