function User(options) {
    //functie constructor ...verifica userul in DB
    this.first_name = options.first_name;
    this.last_name = options.last_name;
    this.age = options.age;
    this.gender = options.gender;
    this.email = options.email;
    this.id = options.id;
}

//

/*global $*/
    
function Login(){
    this.models = [];
}

Login.prototype.login = function(){
    var that = this;
    return $(".login-btn").on("click", login);
        
        function login(){
            var email = $("[name='email-value']").val();
            var password = $("[name='password']").val();
            
            var ajaxOptions = {
                url:"https://curs-jeanina.c9users.io/Curs22-23-24/login",
                type : "POST",
               // dataType: "json",
                data : {
                        email : email,
                        password:password
                    
                },
                success: function(resp){
                     window.currentUser = resp;
                     //getArticles();
                },
                error: function(xhr,status,errorMessage){
                    console.log("Error Status:"+status);
                },
                complete:function(){
                    console.log("AJAX Req has completed");
                }
                
            }
            $.ajax(ajaxOptions);
        }
}