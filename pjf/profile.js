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



















        var name, email, photoUrl, uid, emailVerified;

        var btt1 = document.getElementById('btt1');
        var btt2 = document.getElementById('btt2');

        var profBtn = document.getElementById("profBtn");
        var profBtn2 = document.getElementById("accBtnSO");

        firebase.auth().onAuthStateChanged(firebaseUser =>
        {
            if (firebaseUser) {
                var user = firebase.auth().currentUser;
                if (user != null) {
                    profBtn.innerText = 'My Account';
                    profBtn2.innerText = 'My Account';
                    name = user.displayName;
                    email = user.email;
                    photoUrl = user.photoURL;
                    emailVerified = user.emailVerified;
                    uid = user.uid;
                    historyy()



                }

            } else {
                window.location = "index.html"
                profBtn.innerText = 'Sign In';
                profBtn2.innerText = 'Sign In';

            }




        })


        //  bigy.innerText = 'e';
        function historyy() {
            btt2.style.background = '#f1f1f1';
            btt1.style.background = '	#DCDCDC';

            var ull = document.getElementById("mainList");
            ull.innerHTML = '';
            var ref = firebase.database().ref().child("USERVIEWHISTORY").child(uid).orderByChild('topicCreationTimeInverse');
            ref.once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    var ul = document.getElementById("mainList");
                    var li = document.createElement('li');
                    var g = document.createElement('div');
                    //g.setAttribute("123", "Div1");
                    g.style.height = "50";
                    li.appendChild(g);

                    var date = timeSince(new Date(childData.topicCreationTime));


                    var div = document.createElement('div');
                    div.className = 'row';

                    div.innerHTML = '<hr><div class="w3-row ">\<div class="w3-third w3-container">\<img src="' + childData.strPicURL + '" width="350" height="200" class="pull-left w3-bar-item  w3-wide fillwidthy">\</div>\<div class="w3-twothird w3-container">\<p>' + date + ' ago</p>\<h3 class="boldFont">' + childData.topicName + '</h3>\<p>Including articles from: ' + childData.lstArticleHeadlines + '</p>\</div>\</div>'


                    div.onclick = function () {
                        // alert(this.innerHTML);


                        // var getInput = prompt("Hey type something here: ");
                        localStorage.setItem("storageName", childKey);


                        //window.location = "www.example.com"
                        window.location = "topic.html"




                    };

                    li.appendChild(div);
                    ul.appendChild(li);
                });
            });

        }
        function submissionHistory() {
            btt2.style.background = '#DCDCDC';
            btt1.style.background = '	#f1f1f1';
            var ull = document.getElementById("mainList");
            ull.innerHTML = '';

            var ref = firebase.database().ref().child("PROPOSED_ARTICLES_USER_HISTORY").child(uid).orderByChild('proposalTimeInverse');
            ref.once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    var ul = document.getElementById("mainList");
                    var li = document.createElement('li');
                    var g = document.createElement('div');
                    //g.setAttribute("123", "Div1");
                    g.style.height = "50";
                    li.appendChild(g);
                    var div = document.createElement('div');
                    div.className = 'row';
                    //div.innerHTML ='<label> "'+childData.proposalTopicName+'" </label>';
                    var date = timeSince(new Date(childData.proposalTime));



                    if (childData.proposalStatus == "PENDING") {
                        div.innerHTML = '<div class="w3-col s9 w3-container">\<hr>\<p>proposed ' + date + ' ago</p>\<h3>' + childData.proposalTopicName + '</h3>\<p>' + childData.strArticleURL + '</p>\<p>' + childData.proposalStatusDescription + '</p>\<h6>' + childData.strRundownPoint1 + '</h6>\</div>'
                    } else {
                        div.innerHTML = '<div class="w3-col s9 w3-container">\<hr>\<p>proposed ' + date + ' ago</p>\<h3>' + childData.proposalTopicName + '</h3>\<p>' + childData.strArticleURL + '</p>\<p>' + childData.proposalStatus + '</p>\<p>' + childData.proposalStatusDescription + '</p>\<h6>' + childData.strRundownPoint1 + '</h6>\</div>'

                    }



                    li.appendChild(div);
                    ul.appendChild(li);
                });
            });

        }
        function signOut() {

            firebase.auth().signOut().then(function () {
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });

            window.location = "index.html"


        }

