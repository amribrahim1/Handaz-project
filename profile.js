
  window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById('sign-out').style.display = 'block';
        
      } else {
        document.getElementById('sign-in').style.display = 'block';
        setTimeout(function(){ window.location = "userlogin.html"; },5000);
      }
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
    });
  };
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
      
        var user = firebase.auth().currentUser;
        var uid = user.uid;  
        firebase.database().ref('Users/').child(uid).once('value', function(snapshot){
            if(snapshot.exists()){
                snapshot.forEach(function(data){
                    var val = data.val();
                    var today = new Date();
                    var age = today.getFullYear() - val.BirthYear;
                    document.getElementById('name').innerHTML = val.name;
                    document.getElementById('email').innerHTML = val.email;
                    document.getElementById('gender').innerHTML = val.gender;
                    document.getElementById('age').innerHTML = age;
                    document.getElementById('mobile').innerHTML = val.mobile;
                });
            }
        });
    })

    function signout() {
        firebase.auth().signOut();
        window.location = 'index.html';
    }

function editName() {
    document.getElementById('name').innerHTML = '<input id="nameedit" type="text" required>';
    document.getElementById('editname').innerHTML = '<button type="button" id="editname" onclick="editNameFB()" class="btn btn-warning ok">تأكيد</button>';
    document.getElementById('cancel1').innerHTML = '<button type="button" id="editname" onclick="reload()" class="btn btn-secondary no">إلغاء</button>';
}
function editNameFB() {
    var name = document.getElementById('nameedit').value;
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var dbRefReq = firebase.database().ref().child('Users/'+ uid +'/')
    dbRefReq.once("child_added", function(snapshot ) {
        snapshot.ref.update({ name: name })
    })
    alert('تم التعديل !');
    location.reload(true);
}

function editPhone() {
    document.getElementById('mobile').innerHTML = '<input id="phoneedit" type="text" required>';
    document.getElementById('editphone').innerHTML = '<button type="button" id="editname" onclick="editPhoneFB()" class="btn btn-warning ok">تأكيد</button>';
    document.getElementById('cancel2').innerHTML = '<button type="button" id="editname" onclick="reload()" class="btn btn-secondary no">إلغاء</button>';
}
function editPhoneFB() {
    var mobile = document.getElementById('phoneedit').value;
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var dbRefReq = firebase.database().ref().child('Users/'+ uid +'/')
    dbRefReq.once("child_added", function(snapshot ) {
        snapshot.ref.update({ mobile: mobile })
    })
    alert('تم التعديل !');
    location.reload(true);
}

function reload() {
    location.reload(true);
}