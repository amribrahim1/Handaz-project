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

  window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        document.getElementById('ready').style.display = 'block';
        document.getElementById('LoginForm').style.display = 'none';
        setTimeout(function(){ window.location = "profile.html"; },3000);
      } 
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
    });
  };

  document.forms.LoginForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('أدخل البريد الإلكتروني.');
        return;
      }
      if (password.length < 4) {
        alert('أدخل كلمة السر.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('كلمة المرور غير صحيحة.');
        } else {
          alert('لا يوجد حساب بهذا البريد الإلكتروني');
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
  }



// Disable form submissions if there are invalid fields