   $(document).ready(function(){
    $('#addTask').on('click',addTask);
    function addTask(){
      event.preventDefault();
      var input =$('#mytxt').val();
      input=input.trim();
      if (input=="") 
      {
          alert("enter your task please");
          return false;
      }
      else{   
                flag=true;
                 if (($('#ul').children().length>0)) {
                  //   alert('hi');
                  
                    for (var i = 0; i < ($('#ul').children().length); i++) {
                      console.log($('#ul').children()[i].innerHTML);
                        if ($('#ul').children()[i].innerHTML.trim() == input) {
                        alert("enter difirent task");
                        flag=false
                         break;
                       }

                      } 
                    }
                    if(flag==true){
                         $('#ul').append('<li>'+ input+'</li>');
                    
                    }
                     
                 }       
      }
 
 
   function removeTask(){
   var message = confirm("are you  sure you want to remove your task");
      if (message==true) {
        $( '#ul' ).delegate( "li","click" ,function(){
          $('li:selected').remove();
      });


     };

  
 }
});