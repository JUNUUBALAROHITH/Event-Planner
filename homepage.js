function signOut() {
    Auth.signOut().then(function() {

        alert("Signed Out");
        window.location.assign('signup1.html');
    })
}
