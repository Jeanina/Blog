function Article (options){
    //functie constructor ...seteaza date initiale
    this.title = options.title;
    this.content = options.content;
    this.id = options.id;
    
}

Article.prototype.update =  function (){
    // do an Ajax request to update article https://curs-jeanina.c9users.io/Curs22-23-24/articles/update
    
}


Article.prototype.delete = function (articleId){
   // do an Ajax request to delete article https://curs-jeanina.c9users.io/Curs22-23-24/articles/delete&articleId=
   //concateneaza id-ul articolului...la fel ca si comtariu.
   // Method Post
    
}

Article.prototype.add = function (){
    // do an Ajax ti add an article https://curs-jeanina.c9users.io/Curs22-23-24/articles/add
    //Method Post
    
}