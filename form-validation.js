//make sure it runs after DOM

$(document).ready(
  $("#submit").on("click", function (event) {
    console.log("button clicked!");
    //create variable array variable named Required---name, email, phone number//
    const nameOf = $("#name");
    const email = $("#email");
    const phoneNumber = $("#phone");
    const required = [nameOf, email, phoneNumber];
    //Utilize a for loop to iterate of the entire required array//
    for (let i = 0; i < required.length; i++) {
      //use an if statement to check the value of each array item//
      if (required[i].val() == "") {
      //populate the message <p> with the following text:"Please Fill Out Required Fields"/
        $("p").html("Please Fill Out the Required Field").addClass("warning");
        //add the warning class to this message/
        $(required[i]).prev("label").addClass("warning");
        //once the field has something other than a blank string. make sure the warning class is removed//
      } else { 
       //Attach the warning class to the array item's <label>/
       $(required[i]).prev("label").removeClass("warning");
      }
    }
    //verify that no <label>'s have the warning class//
    if ($("label").hasClass("warning")==false) {
      $('#form').remove(); //remove the form from the DOM//
      $("h2").html("Thanks for your feedback!");//manipulate the <h2> to say: "Thanks for your feedback!"//
    }
  })
);

