$(document).ready(function(){
    const key = 'qww4Qdu3s2zsKCNl0AFU';
    let headers = new Headers();
    headers.set('x-api-key', key);
    
    const url = 'https://the-one-api.herokuapp.com/v1/book';
    
    let output = '';

    let chapteroutput = '';
    
    $.getJSON(url, function(data){
         for(i = 0; i < data.docs.length; i++) {
            output += "<h3 data-id="+data.docs[i]._id+">"+data.docs[i].name+"</h3>";
         }
        
         $('#content').append(output);
    
         $('h3').click(function(){
           let bookId = $(this).data("id");
           console.log(bookId);
            gitChapters(bookId);
        });
    });
    function gitChapters(id){

      $.getJSON("https://the-one-api.herokuapp.com/v1/book/"+id+"/chapter", function(data){
        for(i = 0; i < data.docs.length; i++) {
           chapteroutput += "<h3>"+data.docs[i].book+"</h3>";

        }
       
        $('#content').append(chapteroutput);
   });
    }







    });