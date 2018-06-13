// Array of topics. Topis is TV Shows
var topics = [
    "The Office",
    "The Simpsons",
    "Family Guy",
    "How I Met Your Mother",
    "King of the Hill"
];

var buttons;

$(document).ready(function(){
    // Loop appends a button for each string in the array
    for (i = 0; i < topics.length; i++){
        buttons = topics[i];
        $("#animalButton").append('<button class="gif">' + buttons + '</button> ');
        console.log(buttons);
    }

    $("#addAnimal").on("click", function(){
        // evt.preventDefault();
        console.log("buttons works");
    })

    // When the user clicks on a button, the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.
    $(".gif").on("click", function(){
        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {


        })
    })

    // $(".gif").on("click", function() {
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    //   });
})