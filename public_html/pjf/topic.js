/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var config = {
    apiKey: "AIzaSyC78ygb5kaYfS9RVSu1KOCw-XLmyB2OuXU",
    authDomain: "poliapp-c85e3.firebaseapp.com",
    databaseURL: "https://poliapp-c85e3.firebaseio.com",
    projectId: "poliapp-c85e3",
    storageBucket: "poliapp-c85e3.appspot.com",
    messagingSenderId: "594264278951"
  };
  //var res = encodeURI(uri);

  firebase.initializeApp(config);

            var isi = false;

    window.fbAsyncInit = function() {
      FB.init ({
         appId      : '267503890776887',
         xfbml      : true,
         version    : 'v2.6'
      });
   };

   (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
   } (document, 'script', 'facebook-jssdk'));

        
        var provider = new firebase.auth.FacebookAuthProvider();

    
    
    
     var profBtn = document.getElementById("profBtn");
              var profBtn2 = document.getElementById("accBtnSO");



    firebase.auth().onAuthStateChanged(firebaseUser =>
    {
        if(firebaseUser){
                            profBtn.innerText = 'Sign In';
                            profBtn2.innerText = 'Sign In';

                            isi = true;
           var user = firebase.auth().currentUser;
            if(user!= null){
                            profBtn.innerText = 'My Account';
                             profBtn2.innerText = 'My Account';
                           
                        isi = true;
                                   //  document.body.style.backgroundColor = "red";

   
            }

        }
        else{
                            profBtn.innerText = 'Sign In';
                             profBtn2.innerText = 'Sign In';
isi = false;
        }




    })
    
    

    
    
    
    function gtAS(){
      if(isi){
            //alert("yip")
                    window.location = "profile.html"

        }
        else{
            
            if (confirm('Sign in with Facebook')) {
                       firebase.auth().signInWithPopup(provider).then(function(result) {
                     //   document.body.style.backgroundColor = "red";

      var token = result.credential.accessToken;
      var user = result.user;

       if(user!= null){
                        isi = true;
                    window.location = "profile.html"

   
            }
            
   }).catch(function(error) {
                              // document.body.style.backgroundColor = "blue";

     /* console.log(error.code);
      console.log(error.message);
      */
   });
    // Save it!
} else {
    // Do nothing!
}
 
            
            
                       // alert("SI With Facebook")
                        
                    
   


        }
        
    }
    

      function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }


    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");

    function w3_open() {

      if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
      } else {
        mySidebar.style.display = 'block';
      }
    }

    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";

    }


    function w3_close_SI() {

        mySidebar.style.display = "none";

        gtAS();
    }

  function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

/*
    function gtAS(){
        if(isi){
            //alert("yip")
                    window.location = "profile.html"

        }
        else{
            
            if (confirm('Sign in with Facebook')) {
                       firebase.auth().signInWithPopup(provider).then(function(result) {
                     //   document.body.style.backgroundColor = "red";

      var token = result.credential.accessToken;
      var user = result.user;

       if(user!= null){
                        isi = true;
                    window.location = "profile.html"

   
            }
            
   }).catch(function(error) {
                              // document.body.style.backgroundColor = "blue";

     /* console.log(error.code);
      console.log(error.message);
     
   });
    // Save it!
} else {
    // Do nothing!
}
 
            
            
                       // alert("SI With Facebook")
                        
                    
   


        }
        
    }
*/

function gtUN(){
                window.location = "us_news.html"

          }
          function gtGlobal(){
                window.location = "world_news.html"

          }
          function gtWhiteHouse(){
                window.location = "wh.html"

          }
          
          
          
           function gtHome() {
                       window.location = "hometest.html"

    }












 var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "visible"




                // Initialize Firebase
                var pIDfrL = ""
                var pCATfrL = ""
                var topicName = "";
                var articles = [];

 if (location.search.match(/pvi=([^&]*)/i))
        {
            pIDfrL = location.search.match(/pvi=([^&]*)/i)[1];
                      

        }
 if (location.search.match(/ct=([^&]*)/i))
        {
            pCATfrL = location.search.match(/ct=([^&]*)/i)[1];

        }
    

                var imgURL = ""
                //var provider = new firebase.auth.FacebookAuthProvider();



                // var bigy = document.getElementById('ya');
                
                var dbRef = firebase.database().ref().child("THOME").child(pCATfrL).child(pIDfrL);
              //dbRef.on('value', snap =>   bigy.innerText = snap.val());
           //   dbRef.on('value', snap =>   alert(snap.val().strPicSource));
dbRef.once('value').then(function(snapshot) {
 // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
         var rd1 = document.getElementById('rd1');
                var rd2 = document.getElementById('rd2');
                var rd3 = document.getElementById('rd3');
   var tN2 = document.getElementById('tN');
     var himgg = document.getElementById('hImg');

                    himgg.src = snapshot.val().strPicURL;
  
              tN2.innerText = snapshot.val().topicName;
              topicName = snapshot.val().topicName;
                rd1.innerText = "‣" + snapshot.val().strRundownPoint1;
                rd2.innerText = "‣" + snapshot.val().strRundownPoint2;
                rd3.innerText = "‣" + snapshot.val().strRundownPoint3;
                
                 articles = snapshot.val().lstArticles;

                for(var ll = 0; ll < articles.length; ll++){
                       //  document.body.style.backgroundColor = "blue";

                    var childData = articles[ll];

                        var ul = document.getElementById("friendsList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";

                        imgurl = childData.strPicURL;

                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };

               
                        var datey = timeSince(new Date(childData.articleTime));

                        imgURL = childData.strPicURL;

                        //div.innerHTML =    '<hr>\<div class="w3-row">\<h3>'+childData.articlePublisher+'</h3>\<div class="w3-col s3">\<div style="width:100%">\<img src="'+childData.strPicURL+'" width="150" height="150" class="fillwidthy">\</div>\</div>\<div class="w3-col s9 w3-container">\<h3>'+childData.strArticleHeadline+'</h3>\<p>'+childData.strArticleAuthor+'</p>\<p>'+datey+'</p>\</div>\</div>'       

                        div.innerHTML = '<hr><div class="w3-row ">\<h3>' + childData.articlePublisher + '</h3>\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + datey + ' ago</p>\<h3 class="boldFont">' + childData.strArticleHeadline + '</h3>\<p>' + childData.strArticleAuthor + '</p>\</div>\</div>'


                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);

                    
                }
                
                
                
    
//alert(snapshot.val().strPicSource)
});

                // bigy.innerText = "ldfg";


               // var id = localStorage.getItem("storageName");
               // var topicName = localStorage.getItem("topicName");
                var isi = false;
                var imgurl = "";

                //  bigy.innerText = localStorage.getItem("storageName");

/*
                var tN2 = document.getElementById('tN');
                tN2.innerText = localStorage.getItem("topicName");



                var rd1 = document.getElementById('rd1');
                var rd2 = document.getElementById('rd2');
                var rd3 = document.getElementById('rd3');

                rd1.innerText = "‣" + localStorage.getItem("rd1");
                rd2.innerText = "‣" + localStorage.getItem("rd2");
                rd3.innerText = "‣" + localStorage.getItem("rd3");
             
*/
/*
                var ref = firebase.database().ref().child('ARTICLES').child(id);
                ref.once('value', function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();

                        // bigy.innerText = childKey;



                        var ul = document.getElementById("friendsList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";

                        imgurl = childData.strPicURL;

                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };

               
                        var datey = timeSince(new Date(childData.articleTime));

                        imgURL = childData.strPicURL;

                        //div.innerHTML =    '<hr>\<div class="w3-row">\<h3>'+childData.articlePublisher+'</h3>\<div class="w3-col s3">\<div style="width:100%">\<img src="'+childData.strPicURL+'" width="150" height="150" class="fillwidthy">\</div>\</div>\<div class="w3-col s9 w3-container">\<h3>'+childData.strArticleHeadline+'</h3>\<p>'+childData.strArticleAuthor+'</p>\<p>'+datey+'</p>\</div>\</div>'       

                        div.innerHTML = '<hr><div class="w3-row ">\<h3>' + childData.articlePublisher + '</h3>\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + datey + ' ago</p>\<h3 class="boldFont">' + childData.strArticleHeadline + '</h3>\<p>' + childData.strArticleAuthor + '</p>\</div>\</div>'


                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);


                    });

                    var himgg = document.getElementById('hImg');

                    himgg.src = imgURL;

                });
*/






                var ref = firebase.database().ref().child('CHATS').child(pIDfrL);
                ref.once('value', function (snapshot) {
                     var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "hidden"
                    
                    snapshot.forEach(function (childSnapshot) {
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();

                        // bigy.innerText = childKey;

  if( childData.postIsActive)
                               {

                        var ul = document.getElementById("discussionList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";



                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };




                        var time = childData.postTime;
                        //var datey = new Date(time);

                        var dati = timeSince(new Date(time));


                        div.innerHTML =
                                '<label> ' + dati + ' ago </label>\<br>\<h5> ' + childData.creatorName + ' </h5>\<h3 style="word-wrap: break-word;" > ' + childData.postText + ' </h3>\<hr>';



                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);
                               }

                    });


                   
                });





                function writee() {
                    //rootRef.set(writee);
                    //document.body.style.backgroundColor = "black";
                    var pix = document.getElementById('texty').value.toString();
                    var keyVal = firebase.database().ref().push().key;
                    var rootRef = firebase.database().ref().child("CHATS").child(pIDfrL).child(keyVal);

                    var heeh = rootRef.push().key;

                    var d = new Date();
                    var n = d.getTime();
                    var textbox = document.getElementById('texty')
                    textbox.value = ""

                    if (pix == "") {

                        alert("nah");
                    } else {
                        var user = firebase.auth().currentUser;
                        var name, email, photoUrl, uid, emailVerified;

                        if (user != null) {
                            //document.body.style.backgroundColor = "green";

                            name = user.displayName;
                            email = user.email;
                            photoUrl = user.photoURL;
                            emailVerified = user.emailVerified;
                            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                            // this value to authenticate with your backend server, if
                            // you have one. Use User.getToken() instead.






                            rootRef.set(
                                    {
                                        "postCreatorID": uid,
                                        "postText": pix,
                                        "postID": keyVal,

                                        "postTime": n,
                                        "postTimeInverse": -n,
                                        "postUserName": name,
                                        "postType": "CHAT_IOS",
                                        "postDescription": "NONE",
                                        "creatorName": name,
                                        "ratingBlend": 0,
                                        "textCount": 0,
                                        "replyCount": 0,

                                        "postVisibilityStartTime": 0,
                                        "postVisibilityEndTime": 0,
                                        "postIsActive": true,
                                        "postIsFlagged": false,
                                        "originalTopicID": pIDfrL,
                                        "chatVersionType": 1,
                                        "postMediaLink": "none"


                                    }



                            );
                   /*  var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "visible"
                                    */
                                   // reload()
                  
                            var ul = document.getElementById("discussionList");
                            var li = document.createElement('li');
                            var g = document.createElement('div');
                            var div = document.createElement('div');

                            div.className = 'row';

                            var datey = timeSince(new Date(n));

                            div.innerHTML =
                                '<label> ' + datey + ' ago </label>\<br>\<h5> ' + name + ' </h5>\<h3 style="word-wrap: break-word;" > ' + pix + ' </h3>\<hr>';


                            //  document.body.style.backgroundColor = "green";


                            //document.getElementById('content').appendChild(div);
                            li.appendChild(div);

                            //li.appendChild(document.createTextNode(childData.topicName));
                          //  ul.appendChild(li);
                            ul.appendChild(li);

var objDiv = document.getElementById("discussionList");
//objDiv.scrollTop = objDiv.scrollTopMax;
   objDiv.scrollIntoView(false);
                       
                         
                         /*
 var ref = firebase.database().ref().child('CHATS').child(pIDfrL);
                    ref.once('value', function (snapshot) {
                         var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "hidden"
                        snapshot.forEach(function (childSnapshot) {
                            var childKey = childSnapshot.key;
                            var childData = childSnapshot.val();

                            //  bigy.innerText = childKey;

                               if( childData.postIsActive)
                               {

                            //  var ul = document.getElementById("discussionList");
                            var li = document.createElement('li');
                            var g = document.createElement('div');
                            //g.setAttribute("123", "Div1");
                            g.style.height = "50";



                            li.appendChild(g);

                            var div = document.createElement('div');

                            div.className = 'row';

                            div.onclick = function () {
                                // alert(this.innerHTML);
                                var urll = childData.strURL;
                                var win = window.open(urll, '_blank');
                                win.focus();






                            };


                            var time = childData.postTime;
                            //var datey = new Date(time);

                            var dati = timeSince(new Date(time))
                            div.innerHTML =
                                '<label> ' + dati + ' ago </label>\<br>\<label> ' + childData.creatorName + ' </label>\<br>\<h3 style="word-wrap: break-word;" > ' + childData.postText + ' </h3>\<hr>';



                            //document.getElementById('content').appendChild(div);
                            li.appendChild(div);

                            //li.appendChild(document.createTextNode(childData.topicName));
                            ul.appendChild(li);

                               }
                        });

                       
var objDiv = document.getElementById("discussionList");
objDiv.scrollTop = objDiv.scrollHeight;
                    });

*/




                        } else {

                            alert("Sign in to comment ");


                        }
                    }

                }


                function reload() {
                    var ul = document.getElementById("discussionList");

                    ul.innerHTML = '';

//                    var ref = firebase.database().ref().child('CHATS').child(pIDfrL).orderByChild('postTimeInverse');

                    var ref = firebase.database().ref().child('CHATS').child(pIDfrL);
                    ref.once('value', function (snapshot) {
                         var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "hidden"
                        snapshot.forEach(function (childSnapshot) {
                            var childKey = childSnapshot.key;
                            var childData = childSnapshot.val();

                            //  bigy.innerText = childKey;

                               if( childData.postIsActive)
                               {

                            //  var ul = document.getElementById("discussionList");
                            var li = document.createElement('li');
                            var g = document.createElement('div');
                            //g.setAttribute("123", "Div1");
                            g.style.height = "50";



                            li.appendChild(g);

                            var div = document.createElement('div');

                            div.className = 'row';

                            div.onclick = function () {
                                // alert(this.innerHTML);
                                var urll = childData.strURL;
                                var win = window.open(urll, '_blank');
                                win.focus();






                            };


                            var time = childData.postTime;
                            //var datey = new Date(time);

                            var dati = timeSince(new Date(time))
                            div.innerHTML =
                                '<label> ' + dati + ' ago </label>\<br>\<h5> ' + childData.creatorName + ' </h5>\<h3 style="word-wrap: break-word;" > ' + childData.postText + ' </h3>\<hr>';



                            //document.getElementById('content').appendChild(div);
                            li.appendChild(div);

                            //li.appendChild(document.createTextNode(childData.topicName));
                            ul.appendChild(li);

                               }
                        });

                       

                    });


                }

                function sa() {
                    // var getInput = prompt("Hey type something here: ");
                   /* localStorage.setItem("storageName", id);
                    localStorage.setItem("topicName", topicName);
                    localStorage.setItem("topicPic", imgURL);
*/
                    //window.location = "www.example.com"
                 
                        var topNam = encodeURIComponent(topicName);
                        var uri = 'submit-article.html?pvi='+pIDfrL+'&ct='+pCATfrL+'&tn='+topNam;

                     window.location = uri




                }






function showAllArticles(){
       document.getElementById('btnArticleSortCategory').innerText = "All ▾";

    document.getElementById('friendsList').innerHTML = "";
     for(var ll = 0; ll < articles.length; ll++){
                     // document.body.style.backgroundColor = "white";

                    var childData = articles[ll];

                        var ul = document.getElementById("friendsList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";

                        imgurl = childData.strPicURL;

                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };

               
                        var datey = timeSince(new Date(childData.articleTime));

                        imgURL = childData.strPicURL;

                        //div.innerHTML =    '<hr>\<div class="w3-row">\<h3>'+childData.articlePublisher+'</h3>\<div class="w3-col s3">\<div style="width:100%">\<img src="'+childData.strPicURL+'" width="150" height="150" class="fillwidthy">\</div>\</div>\<div class="w3-col s9 w3-container">\<h3>'+childData.strArticleHeadline+'</h3>\<p>'+childData.strArticleAuthor+'</p>\<p>'+datey+'</p>\</div>\</div>'       

                        div.innerHTML = '<hr><div class="w3-row ">\<h3>' + childData.articlePublisher + '</h3>\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + datey + ' ago</p>\<h3 class="boldFont">' + childData.strArticleHeadline + '</h3>\<p>' + childData.strArticleAuthor + '</p>\</div>\</div>'


                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);

                    
                }
}
function showConservativeArticles(){
    
       document.getElementById('btnArticleSortCategory').innerText = "Conservative ▾";

     document.getElementById('friendsList').innerHTML = "";
     for(var ll = 0; ll < articles.length; ll++){
                       // document.body.style.backgroundColor = "red";

                    var childData = articles[ll];
 if(childData.articleBias < 3)
                    {
                        var ul = document.getElementById("friendsList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";

                        imgurl = childData.strPicURL;

                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };

               
                        var datey = timeSince(new Date(childData.articleTime));

                        imgURL = childData.strPicURL;

                        //div.innerHTML =    '<hr>\<div class="w3-row">\<h3>'+childData.articlePublisher+'</h3>\<div class="w3-col s3">\<div style="width:100%">\<img src="'+childData.strPicURL+'" width="150" height="150" class="fillwidthy">\</div>\</div>\<div class="w3-col s9 w3-container">\<h3>'+childData.strArticleHeadline+'</h3>\<p>'+childData.strArticleAuthor+'</p>\<p>'+datey+'</p>\</div>\</div>'       

                        div.innerHTML = '<hr><div class="w3-row ">\<h3>' + childData.articlePublisher + '</h3>\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + datey + ' ago</p>\<h3 class="boldFont">' + childData.strArticleHeadline + '</h3>\<p>' + childData.strArticleAuthor + '</p>\</div>\</div>'


                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);

            }
                    
                }
    
}
function showLiberalArticles(){
    
   document.getElementById('btnArticleSortCategory').innerText = "Liberal ▾";

    
     document.getElementById('friendsList').innerHTML = "";
     for(var ll = 0; ll < articles.length; ll++){
                     //  document.body.style.backgroundColor = "blue";

                    var childData = articles[ll];
                    if(childData.articleBias > 3)
                    {
                        var ul = document.getElementById("friendsList");
                        var li = document.createElement('li');
                        var g = document.createElement('div');
                        //g.setAttribute("123", "Div1");
                        g.style.height = "50";

                        imgurl = childData.strPicURL;

                        li.appendChild(g);

                        var div = document.createElement('div');

                        div.className = 'row';

                        div.onclick = function () {
                            // alert(this.innerHTML);
                            var urll = childData.strURL;
                            var win = window.open(urll, '_blank');
                            win.focus();






                        };

               
                        var datey = timeSince(new Date(childData.articleTime));

                        imgURL = childData.strPicURL;

                        //div.innerHTML =    '<hr>\<div class="w3-row">\<h3>'+childData.articlePublisher+'</h3>\<div class="w3-col s3">\<div style="width:100%">\<img src="'+childData.strPicURL+'" width="150" height="150" class="fillwidthy">\</div>\</div>\<div class="w3-col s9 w3-container">\<h3>'+childData.strArticleHeadline+'</h3>\<p>'+childData.strArticleAuthor+'</p>\<p>'+datey+'</p>\</div>\</div>'       

                        div.innerHTML = '<hr><div class="w3-row ">\<h3>' + childData.articlePublisher + '</h3>\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + datey + ' ago</p>\<h3 class="boldFont">' + childData.strArticleHeadline + '</h3>\<p>' + childData.strArticleAuthor + '</p>\</div>\</div>'


                        //document.getElementById('content').appendChild(div);
                        li.appendChild(div);

                        //li.appendChild(document.createTextNode(childData.topicName));
                        ul.appendChild(li);

            }
                }
}




