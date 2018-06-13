// Array of topics. Topis is TV Shows
var topics = [
    "The Office",
    "The Simpsons",
    "Family Guy",
    "How I Met Your Mother"
];

$(document).ready(function(){
    // Loop appends a button for each string in the array
    for (i = 0; i < topics.length; i++){
        var buttons = topics[i];
        $("#animalButton").append('<button>' + buttons + '</button> ')
        console.log(buttons)
    }

    $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
})