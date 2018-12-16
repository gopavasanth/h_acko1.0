var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "acko" && password == "acko123"){
      alert ("Login successfully");
      window.location = "index.html"; // Redirecting to other page.
      return false;
    }
    else{
      attempt --;// Decrementing by one.
      alert("You have left "+attempt+" attempt;");

      if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
    }
}
