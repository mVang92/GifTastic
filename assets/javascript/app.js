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
    // Initially disables the submit box
    $("#addShow").prop("disabled", true);

    // Enables the submit button only when there is text in the dialog box
    // Diables the box if text is not present
    $("#showLength").keyup(function(){
        if($("#showLength").val() == ""){
            $("#addShow").prop("disabled", true);
        } else {
            $("#addShow").removeAttr("disabled");
        }
    })

    // Loop appends a button for each string in the array
    for (i = 0; i < topics.length; i++){
        buttons = topics[i];
        $("#animalButton").append('<button class="gif" value=' + i + '>' + buttons + '</button> ');
        console.log(buttons);
    }

    $("#addShow").on("click", function(){
        // evt.preventDefault();
        console.log("buttons works");
        var show = $("#showLength").val().trim();
        topics.push(show);
        $("#animalButton").append('<button class="gif" value=' + i + '>' + show + '</button> ');
        console.log(topics);
        $("#showLength").val("");
        $(this).prop("disabled", true);
    })

    // When the user clicks on a button, the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.
    $(".gif").on("click", function(){
        var show = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            show + "&api_key=whIW4NL8ItI77ZD3d2Yomtb0G40WFANS&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)

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