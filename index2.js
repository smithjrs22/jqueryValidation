
//make sure it runs after DOM


$(document).ready($('#submit').on

('click', function(event){
   console.log('button clicked!');
      const nameOf = $('#name');
      const email = $('#email');
      const phoneNumber= $('#phone');
      const required = [nameOf, email, phoneNumber];
   For
      (let i= 0; i < required.length; i++){
         if (nameOf.val() == "" || email.val() == "" || phoneNumber.val() == ""){
            $('p').html("Please Fill Out the Required Field");
            submitButton.addClass('warning')
         else {
              submitButton.warning.remove;
           }
            }
         }
         const form = $('#form');
         if (submitButton != submitButton.warning) {
            $('#form')$('h2').html("Thanks for your feedback!");
         }
      })
   }); 
   
   
   
   
 //   message.html("Please Fill Out Required Fields"); 
//my attempt at the first one//
//create variable array variable named Required---name, email, phone number/

// const Required = jQuery.makeArray(nameOf, email, phoneNumber);



   //Attach the warning class to the array item's <label>//
           //once the field has something other than a blank string. make sure the warning class is removed/
        //    /add the warning class to this message//
        //Add a CSS Class: $('#myButton').addClass('newClass');/
         
               
          
//utilize a for loop to iterate the entire required
// for (variable of iterable) {
//     statement
  




        //if trueremove the form from the DOM manipulate the <h2> to say: Thanks for your feedback!//
         //  if (submitButton != submitButton('warning')){
         //      .remove
         //  }
         //  else{}
        
    
//