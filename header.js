var config = {
  apiKey: "AIzaSyC41AsCvLAXhtTDJBLRe7v-dfDVRRZC1zo",
  authDomain: "project-a17f6.firebaseapp.com",
  databaseURL: "https://project-a17f6.firebaseio.com",
  projectId: "project-a17f6",
  storageBucket: "project-a17f6.appspot.com",
  messagingSenderId: "886385650903",
  appId: "1:886385650903:web:161f2c2d8d1c866f1ad492"
  };
  firebase.initializeApp(config);
  
    firebase.auth().onAuthStateChanged(function(user) {
  
      if (user) {
        var user = firebase.auth().currentUser;
        var uid = user.uid;  
        firebase.database().ref('Users/').child(uid).once('value', function(snapshot){
            if(snapshot.exists()){
                snapshot.forEach(function(data){
                    var val = data.val();
                    document.getElementById('user').innerHTML = ' <a style="padding:0 10px;" class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">'+val.name+'</a><div style="margin-left:150px;text-align:center;overflow-y:hidden" class="dropdown-menu"><a class="dropdown-item" href="profile.html">صفحتي الشخصية</a><hr><a class="dropdown-item" onclick="signout()" href="#">تسجيل الخروج</a></div>';
                    document.getElementById('login').style.display = "none";
                  });
                }
            });
      } 
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
    });
  
    function signout() {
      firebase.auth().signOut();
      window.location = 'index.html';
  }

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }