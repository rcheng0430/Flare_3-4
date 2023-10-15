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
username=localStorage.getItem("user_name");
document.getElementById("welcome_user").innerHTML = "Welcome, " + username + ".";
function add_room()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref ("/").child(room_name).update({
    purpose: "adding_user"
  });
  localStorage.setItem("room_name", room_name);
  window.location="group.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id="+Room_names+" onclick= 'redToRoom(this.id)'> #"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();
function redToRoom(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="group.html";
}
function logout()
{
  localStorage.removeItem("room_name", room_name);
  localStorage.removeItem("user_name", username);
  window.location = "index.html";
}