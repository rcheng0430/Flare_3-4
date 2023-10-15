var firebaseConfig = {
    apiKey: "AIzaSyC_8r98AP8ZPe9F7D6IktEquea14w-pMSA",
    authDomain: "flare-main.firebaseapp.com",
    databaseURL: "https://flare-main-default-rtdb.firebaseio.com",
    projectId: "flare-main",
    storageBucket: "flare-main.appspot.com",
    messagingSenderId: "786263422815",
    appId: "1:786263422815:web:564ee72a99905a5e9aa8ea"
  };
  
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();


