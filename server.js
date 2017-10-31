var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.all('/*', function(req, res, next){
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Accept');
    req.header('Access-Control-Allow-Methods', 'POST', 'GET');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var tutorial = [
    {
    id: 1,
    title: "Android Studio Tutorial For Beginners",
    description: "Learn how to install Android Studio and then go through this tutorial to build your very first app",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/F-k5gwz_91o" frameborder="0" allowfullscreen></iframe></div>',
    thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/androidwhite-learn.png"
  },
  {
    id: 2,
    title: "How to Support High Resolution on iOS - @1x @2x @3x",
    description: "Learn how to support multiple screen resolutions and devices such as iPhone 4, iPhone 5, iPhone 6, iPhone 6 Plus",
    thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/ios-image-sizes.png",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/WOnczJSsMqk" frameborder="0" allowfullscreen></iframe></div>'
  },
  {
    id: 3,
    title: "How to build an Apple TV App Tutorial for tvOS",
    description: "In this app we download popular movies from an IMDB service and implement scrolling and navigation on the Apple TV",
    thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/tv-test.png",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/XmLdEcq-QNI" frameborder="0" allowfullscreen></iframe></div>'
  },
  {
    id: 4,
    title: "Photoshop Tutorial For Beginners How To Create a Log",
    description: "Learn how to make a professional logo in Photoshop without any design experience. This is a Photoshop tutorial for beginners that will give you all the basics of Photoshop that you need to make a logo.",
    thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/logo.png",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/CrKnswpftp4" frameborder="0" allowfullscreen></iframe></div>'
  }
];

var comments = [
  {
    username: 'Jay',
      comment: 'This video is really good'
  }
    
];

app.get('/tutorials', function(req, res) {
    console.log('GET from server.');
    res.send(tutorial);
});

app.post('/comments', function(req, res) {
    var comment = req.body;
    console.log(comment);
    if (comment) {
        if (comment.username && comment.comment) {
            comments.push(comment);
            
            console.log(comments);
            
            res.send('Your post is successfully posted!');
        } else if (!comment.username) {
            console.log('Missing username');
            res.send('You post invalid comment!');
        } else {
            console.log('Missing comment');
            res.send('You post invalid comment!');
        }
    } else {
        console.log('Missing body!');
        res.send('Your post has no body!');
    }
    
});

app.get('/comments', function(req, res) {
    console.log('GET comments from server!');
    res.send(comments);
});

app.put('/comments', function(req, res) {
    var comment = req.body;
    var theID = comment.uniqueID;
    
    //talk to database, find the record by the id
    //then your replace the existing record with req.body
    
    res.send('Successfully update!');
})


app.listen(6069);

