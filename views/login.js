/*global $*/
$(window).ready(function(){
    //add event lisener ok click function
    var userContainer = $(".js-login");
    var user = new User();  //ne returneaza un array gol....trebuie instantiata get articles
    var userLogin = user.login();
    userLogin.done(isLoggedIn);
    
    function isLoggedIn (){
       $(".js-articles-btn").on("click",function(){
                    window.location.href = "https://curs-jeanina.c9users.io/blog/pages/loginsuccess.html"
        });
    }
    
    
   

})