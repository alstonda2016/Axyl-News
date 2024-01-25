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
















               var pIDfrL = ""
                var pCATfrL = ""
                var topicName = ""

 if (location.search.match(/pvi=([^&]*)/i))
        {
            pIDfrL = location.search.match(/pvi=([^&]*)/i)[1];
                      

        }
 if (location.search.match(/ct=([^&]*)/i))
        {
            pCATfrL = location.search.match(/ct=([^&]*)/i)[1];

        }
 if (location.search.match(/tn=([^&]*)/i))
        {
            var tnbi = location.search.match(/tn=([^&]*)/i)[1];
            topicName = decodeURIComponent(tnbi)
        }

var tN2 = document.getElementById('yip');

                  //  himgg.src = snapshot.val().strPicURL;
  
              tN2.innerText = topicName;


        var imgURL = ""

       // var bigy = document.getElementById('ya');

        //var tN2 = document.getElementById('tN');
       // var topicPic = document.getElementById('topicPic');

        // tN2.innerText = localStorage.getItem("topicName");



        //  bigy.innerText = localStorage.getItem("storageName");
       
        //topicPic.src = topicPicLink;
        
        var isi = false;

        function writee() {

            var user = firebase.auth().currentUser;
            var name, email, photoUrl, uid, emailVerified;

            if (user != null) {

                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.




                var txtUrl = document.getElementById('urlText').value.toString();
                var txtR1 = document.getElementById('txtSummary').value.toString();

                if (txtUrl == "") {
                    alert("Fill out each textbox to submit");

                } else if (txtR1 == "") {
                    //   document.body.style.backgroundColor = "red";

                    alert("Fill out each textbox to submit");
                } else {

                    var keyVal = firebase.database().ref().push().key;

                    //  var rootRef = firebase.database().ref().child("PROPOSED_ARTICLES").child(id).child(keyVal);
                    var rootRef = firebase.database().ref().child("PROPOSED_ARTICLES").child(pIDfrL).child(uid);

                    var hisRef = firebase.database().ref().child("PROPOSED_ARTICLES_USER_HISTORY").child(uid).child(pIDfrL);


                    var d = new Date();
                    var timeVar = d.getTime();



                    rootRef.set(
                            {
                                "strArticleURL": txtUrl,
                                "proposalAuthorID": uid,
                                "proposalAuthorName": name,
                                "proposalTime": timeVar,
                                "proposalTimeInverse": -timeVar,

                                "rundownCount": 1,
                                "strRundownPoint1": txtR1,
                                "strRundownPoint2": "",
                                "strRundownPoint3": "",
                                "strRundownPoint4": "",
                                "strRundownPoint5": "",
                                "strArticlePublisher": "",
                                "strArticleTitle": "",
                                "postID": keyVal,
                                "proposalTopicName": topicName,
                                "proposalTopicID": pIDfrL,
                                "proposalStatus": "PENDING",
                                "proposalStatusDescription": "Awaiting Review"


                            }



                    );

                    hisRef.set(
                            {
                                "strArticleURL": txtUrl,
                                "proposalAuthorID": uid,
                                "proposalAuthorName": name,
                                "proposalTime": timeVar,
                                "proposalTimeInverse": -timeVar,

                                "rundownCount": 3,
                                "strRundownPoint1": txtR1,
                                "strRundownPoint2": "",
                                "strRundownPoint3": "",
                                "strRundownPoint4": "",
                                "strRundownPoint5": "",
                                "strArticlePublisher": "",
                                "strArticleTitle": "",
                                "postID": keyVal,
                                "proposalTopicName": topicName,
                                "proposalTopicID": pIDfrL,
                                "proposalStatus": "PENDING",
                                "proposalStatusDescription": "Awaiting Review"


                            }



                    );
                    alert("Submission Successful!");

                    window.history.back();




                }
            } else {

                alert("Sign in to submit an article ");



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


        function gtAS() {
            if (isi) {
                //alert("yip")
                window.location = "profile.html"

            } else {

                if (confirm('Sign in with Facebook')) {
                    firebase.auth().signInWithPopup(provider).then(function (result) {
                        //   document.body.style.backgroundColor = "red";

                        var token = result.credential.accessToken;
                        var user = result.user;

                        if (user != null) {
                            isi = true;
                            window.location = "profile.html"


                        }

                    }).catch(function (error) {
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


        function gtUN() {
            window.location = "us_news.html"

        }
        function gtGlobal() {
            window.location = "world_news.html"

        }
        function gtWhiteHouse() {
            window.location = "wh.html"

        }

        firebase.auth().onAuthStateChanged(firebaseUser =>
        {
            if (firebaseUser) {
                // profBtn.innerText = 'Sign In';
                //profBtn2.innerText = 'Sign In';

                isi = true;
                var user = firebase.auth().currentUser;
                if (user != null) {
                    profBtn.innerText = 'My Account';
                    profBtn2.innerText = 'My Account';

                    isi = true;


                }

            } else {
                profBtn.innerText = 'Sign In';
                profBtn2.innerText = 'Sign In';
                isi = false;
            }




        })

