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
var databaseRef = firebase.database().ref('Users');
// Listen for form submit
document.forms.RegForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('أدخل كلمة المرورلا تقل عن 6 حروف أو أرقام.');
        } else {
          alert('أدخل بريد إلكتروني صحيح، أو أنك عضو بالفعل');
        }
        // [START_EXCLUDE]
        console.log(error);
        // [END_EXCLUDE]
      })
    }
    function initApp() {

    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {

        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-up').innerHTML = '<button class="btn btn-primary" disabled>من فضلك أدخل بيانات لإكمال التسجيل</button>';
        document.getElementById('sign-out').style.display = "block";
        document.getElementById('DataForm').style.display = "block";
        // [END_EXCLUDE]
      } 
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
  }

  window.onload = function() {
    initApp();
  };
  function signout() {
    firebase.auth().signOut();
    window.location = 'register.html';
  }

  var databaseRef = firebase.database().ref();
// Listen for form submit
document.forms.DataForm.addEventListener('submit', submitform);

function submitform(event) {
  event.preventDefault();
  var name = document.getElementById('username').value;
  var mobile = document.getElementById('phone').value;
  var BirthYear = document.getElementById('yearpicker').value;
  var gender = document.getElementById('gender').value;
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var email = user.email;
  var newUserRef = databaseRef.child('Users/'+ uid +'/');
  var newuser = {
    email: email,
    name: name,
    uid : uid,
    mobile: mobile,
    BirthYear: BirthYear,
    gender : gender,
  };    
  newUserRef.push(newuser);

}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needdata');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === true) {
          window.location = 'profile.html';
        }
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Birth Year select input
let startYear = 1800;
let endYear = new Date().getFullYear();
for (i = endYear; i > startYear; i--)
{
  $('#yearpicker').append($('<option />').val(i).html(i));
}

