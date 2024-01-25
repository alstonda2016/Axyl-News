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

















                          // Initialize Firebase
                        

                          var indexy = 0;
                          var nVal = "";
                          var hasShownAllPosts = false;
                          var iter = 0;

                          // var bigy = document.getElementById('ya');
                          // var pix = document.getElementById('pic2');

                          var dbRef = firebase.database().ref().child('a');
                          dbRef.on('value', snap => bigy.innerText = snap.val());

                          var dbRef2 = firebase.database().ref().child('a1');
                          dbRef2.on('value', snap => pix.src = snap.val());
                          //.startAt('-LUDlc4m2lvAgPI0_r-9').endAt('-LUDmuuOWeb7SDbB336X')
                          var ref = firebase.database().ref().child('CATEGORIES').child('i001').orderByChild('topicCreationTimeInverse').limitToFirst(11);
                          ref.once('value', function (snapshot) {
    var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "hidden"
                                    
                                          var btt = document.getElementById("btt");
                            btt.style.visibility = "visible";
                                    
                              var looptyloop = 0;
                              snapshot.forEach(function (childSnapshot) {
                                  var childKey = childSnapshot.key;
                                  var childData = childSnapshot.val();
                                  // nVal = childKey;
                                  nVal = childData.topicCreationTimeInverse;

                                  //document.body.style.backgroundColor = "blue";
                                  looptyloop++;
                                  if (iter < 10)
                                  {
                                      var childKey = childSnapshot.key;
                                      var childData = childSnapshot.val();

                                      var d = new Date();
                                      var n = d.getTime();
                                      //bigy.innerText = n.toString();

                                      //bigy.innerText = childData.topicName;

                                      var ul = document.getElementById("friendsList");
                                      var li = document.createElement('li');
                                      var g = document.createElement('div');
                                      //g.setAttribute("123", "Div1");
                                      g.style.height = "50";



                                      li.appendChild(g);

                                      var div = document.createElement('div');

                                      div.className = 'row';

                                      div.onclick = function () {
                                          // alert(this.innerHTML);


                                          // var getInput = prompt("Hey type something here: ");
                                        /*  var tN = childData.topicName;
                                          var rd1 = childData.strRundownPoint1;
                                          var rd2 = childData.strRundownPoint2;
                                          var rd3 = childData.strRundownPoint3;
                                          localStorage.setItem("rd1", rd1);
                                          localStorage.setItem("rd2", rd2);
                                          localStorage.setItem("rd3", rd3);
                                          localStorage.setItem("storageName", childKey);
                                          localStorage.setItem("topicName", tN);
                                      */    
                                          window.location = "topic.html"

                                             var topicCategory = childData.topicCategory;

                                          var uri = 'topic.html?pvi='+childKey+'&ct='+topicCategory;

                                           window.location = uri



                                      };

                                      var date = new Date(childData.topicCreationTime);

                                      /* div.innerHTML =
                                       '<label> '+childData.topicName+' </label>\<label> '+childData.topicName+' </label>\
                                       <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                               
                                       ';
                                       */
                                      var lstLst = childData.lstArticleHeadlines;

                                      var date = timeSince(new Date(childData.topicCreationTime));
                                      /*
                                       div.innerHTML = '<hr>\<div class="w3-row">\<div class="w3-col s3">\<img width="150" height="150"  class="fillwidthy pull-left postCellPad" src="'+childData.strPicURL+'" >\</div>\<div class="w3-col s9 w3-container">\    <p>'+date+' ago</p>\n\
                                       \<h3>'+childData.topicName+'</h3>\<p>Including articles from: '+childData.lstArticleHeadlines+'</p>\</div>\</div>'
                                       */

                                      div.innerHTML = '<hr><div class="w3-row ">\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + date + ' ago</p>\<h3 class="boldFont">' + childData.topicName + '</h3>\<p>Including articles from: ' + childData.lstArticleHeadlines + '</p>\</div>\</div>'


                                      /*
                                       div.innerHTML =
                                       '<input type="text" name="name" value="'+ childData.topicName+'" />\
                                       <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                                       <label> "'+childData.topicName+'" </label>\
                                       <input type="button" value="-" onclick="removeRow(this)">';
                               
                                       */
                                      //document.getElementById('content').appendChild(div);
                                      li.appendChild(div);

                                      //li.appendChild(document.createTextNode(childData.topicName));
                                      ul.appendChild(li);

                                  }
                                  iter++;

                              });


                              if (looptyloop < 11) {
                                  hasShownAllPosts = true;
                                  // document.body.style.backgroundColor = "green";
                                  var btt = document.getElementById("btt");
                                  btt.style.visibility = "hidden";
                                  nVal = null;


                              }
                          });





                          var topArticleRef = firebase.database().ref().child('CATEGORIES').child('i001').orderByChild('topicClickRank').limitToFirst(5);
                          topArticleRef.once('value', function (snapshot) {
                              snapshot.forEach(function (childSnapshot) {
                                  var childKey = childSnapshot.key;
                                  var childData = childSnapshot.val();





                                  var ul = document.getElementById("topList");
                                  var li = document.createElement('li');
                                  var g = document.createElement('div');
                                  //g.setAttribute("123", "Div1");
                                  g.style.height = "50";



                                  li.appendChild(g);

                                  var div = document.createElement('div');

                                  div.className = 'row';

                                  div.onclick = function () {
                                      // alert(this.innerHTML);


                                      // var getInput = prompt("Hey type something here: ");
                                   /*   var tN = childData.topicName;
                                      var rd1 = childData.strRundownPoint1;
                                      var rd2 = childData.strRundownPoint2;
                                      var rd3 = childData.strRundownPoint3;
                                      localStorage.setItem("rd1", rd1);
                                      localStorage.setItem("rd2", rd2);
                                      localStorage.setItem("rd3", rd3);
                                      localStorage.setItem("storageName", childKey);
                                      localStorage.setItem("topicName", tN);
                                      window.location = "topic.html"
*/
                                              var topicCategory = childData.topicCategory;

                                          var uri = 'topic.html?pvi='+childKey+'&ct='+topicCategory;

                                           window.location = uri



                                  };

                                  var date = new Date(childData.topicCreationTime);

                                  /* div.innerHTML =
                                   '<label> '+childData.topicName+' </label>\<label> '+childData.topicName+' </label>\
                                   <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                           
                                   ';
                                   */




                                  div.innerHTML =
                                          '<hr><label> ' + childData.topicName + ' </label>';
                                  /*
                                   div.innerHTML =
                                   '<input type="text" name="name" value="'+ childData.topicName+'" />\
                                   <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                                   <label> "'+childData.topicName+'" </label>\
                                   <input type="button" value="-" onclick="removeRow(this)">';
                           
                                   */
                                  //document.getElementById('content').appendChild(div);
                                  li.appendChild(div);

                                  //li.appendChild(document.createTextNode(childData.topicName));
                                  ul.appendChild(li);


                              });
                          });



                          function nextt() {
                              /*  if(indexy == 0){
                               initialRun();
                               indexy++;
                               }
                               else{
                               nextRun();
                               }
                               */
                              // indexy++;
                              if (!hasShownAllPosts) {
                                  nextRun();
                              }

                          }











                          function nextRun() {

var ldrV = document.getElementById("ldr");
                            ldrV.style.visibility = "visible"

                              var iter = 0;

                              //  var ref = firebase.database().ref().child('TOPIC').startAt(nVal).limitToFirst(3);
                              //var ref = firebase.database().ref().child('CATEGORIES').child('Item 1');

                              var ref = firebase.database().ref().child('CATEGORIES').child('i001').orderByChild('topicCreationTimeInverse').startAt(nVal).limitToFirst(11);
                              ref.once('value', function (snapshot) {
  var ldrV = document.getElementById("ldr");
                                    ldrV.style.visibility = "hidden"
                                    
                                          var btt = document.getElementById("btt");
                            btt.style.visibility = "visible";
                                  var looptyloop = 0;
                                  snapshot.forEach(function (childSnapshot) {
                                      var childKey = childSnapshot.key;
                                      var childData = childSnapshot.val();
                                      //  nVal = childKey;
                                      nVal = childData.topicCreationTimeInverse;

                                      //document.body.style.backgroundColor = "blue";
                                      looptyloop++;
                                      if (iter < 10)
                                      {
                                          var childKey = childSnapshot.key;
                                          var childData = childSnapshot.val();

                                          var d = new Date();
                                          var n = d.getTime();
                                          //bigy.innerText = n.toString();

                                          //bigy.innerText = childData.topicName;

                                          var ul = document.getElementById("friendsList");
                                          var li = document.createElement('li');
                                          var g = document.createElement('div');
                                          //g.setAttribute("123", "Div1");
                                          g.style.height = "50";



                                          li.appendChild(g);

                                          var div = document.createElement('div');

                                          div.className = 'row';

                                          div.onclick = function () {
                                              // alert(this.innerHTML);

/*
                                              var tN = childData.topicName;
                                              var rd1 = childData.strRundownPoint1;
                                              var rd2 = childData.strRundownPoint2;
                                              var rd3 = childData.strRundownPoint3;
                                              localStorage.setItem("rd1", rd1);
                                              localStorage.setItem("rd2", rd2);
                                              localStorage.setItem("rd3", rd3);
                                              localStorage.setItem("storageName", childKey);
                                              localStorage.setItem("topicName", tN);
                                              window.location = "topic.html"
*/
        var topicCategory = childData.topicCategory;

                                          var uri = 'topic.html?pvi='+childKey+'&ct='+topicCategory;

                                           window.location = uri



                                          };


                                          /* div.innerHTML =
                                           '<label> '+childData.topicName+' </label>\<label> '+childData.topicName+' </label>\
                                           <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                                   
                                           ';
                                           */

                                          var lstLst = childData.lstArticleHeadlines;

                                          var date = timeSince(new Date(childData.topicCreationTime));
                                          /*
                                           div.innerHTML = '<hr>\<div class="w3-row">\<div class="w3-col s3">\<img width="150" height="150"  class="fillwidthy pull-left postCellPad" src="'+childData.strPicURL+'" >\</div>\<div class="w3-col s9 w3-container">\    <p>'+date+' ago</p>\n\
                                           \<h3>'+childData.topicName+'</h3>\<p>Including articles from: '+childData.lstArticleHeadlines+'</p>\</div>\</div>'
                                           */
                                          div.innerHTML = '<hr><div class="w3-row ">\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + date + ' ago</p>\<h3 class="boldFont">' + childData.topicName + '</h3>\<p>Including articles from: ' + childData.lstArticleHeadlines + '</p>\</div>\</div>'

                                          /*
                                           div.innerHTML =
                                           '<input type="text" name="name" value="'+ childData.topicName+'" />\
                                           <input type="text" name="value" value="" />\<img id = "pic2" src="'+childData.strPicURL+'" alt="Flowers in Chania" width="460" height="345">\
                                           <label> "'+childData.topicName+'" </label>\
                                           <input type="button" value="-" onclick="removeRow(this)">';
                                   
                                           */
                                          //document.getElementById('content').appendChild(div);
                                          li.appendChild(div);

                                          //li.appendChild(document.createTextNode(childData.topicName));
                                          ul.appendChild(li);

                                      }
                                      iter++;

                                  });


                                  if (looptyloop < 11) {
                                      hasShownAllPosts = true;
                                      // document.body.style.backgroundColor = "green";
                                      var btt = document.getElementById("btt");
                                      btt.style.visibility = "hidden";
                                      nVal = null;


                                  }
                              });




                          }

