var firebaseConfig = {
      apiKey: "AIzaSyDj3tj0_sTaAyiBvfMnV_v34VhHoEuF7zM",
      authDomain: "chirp-eb2f1.firebaseapp.com",
      databaseURL: "https://chirp-eb2f1-default-rtdb.firebaseio.com",
      projectId: "chirp-eb2f1",
      storageBucket: "chirp-eb2f1.appspot.com",
      messagingSenderId: "805652316411",
      appId: "1:805652316411:web:5f67c2c60c092f72f9705e",
      measurementId: "G-DKQ9K1JXEF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
