var express = require('express');
var router = express.Router();
var slug = require('slug');
var random = require('faker');

function rendermembers(req, res, next) {
  //var data = generatedData; //See Bottom
  var data = generateMembers();
  console.log(data);
  res.render('members', {title: 'Members', data:data });

}

/* GET users listing. */
router.get('/', rendermembers);

router.get('/index.html', rendermembers);

module.exports = router;

//Private Methods

function generateMembers() {
    var list = [];
    for (var i = 0; i < 31; i++) {
        list[i]={
            "user": random.name.findName(),
            "email": random.internet.email(),
            "joined": random.date.recent(),
            "bio": randomWords(~~(Math.random() * 30) + 15),
            //  Thanks to this resource: https://avatars.io/
            //  and to the Twitter userbase for this source
            "avatar": "http://avatars.io/twitter/"+~~(Math.random()*1000)
        };
    }
    return list;
}
var loremWords = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit,", "sed", "do"];
function randomWords(num) {
    var words = [];
    for (var i = 0; i < num; i++) {
        words[i] = loremWords[~~(Math.random() * 10)];
    }
    return words.join(" ");
}
