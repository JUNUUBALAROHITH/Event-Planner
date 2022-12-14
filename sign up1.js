firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
       
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+id).set({
    admissionno:fname,
    Username:name,
     
    }).then(()=>{

       window.location.assign('userpage.html');
      
    }).catch(err => {
       window.alert(err.message);
   })
}).catch(function(error){

    var errorcode=error.code;
    var errormsg=error.message;
    window.alert(errormsg);

   });


   function login()
{

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function() {
   
    var id=firebase.auth().currentUser.uid;
   
    window.location.assign('userpage.html');
   
    
   }).catch(function(error){

    var errorCode=error.code;
    var errorMsg=error.message;
window.alert("error: "+errorMsg)
   });
  }