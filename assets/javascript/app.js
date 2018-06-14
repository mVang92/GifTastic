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
    $("#submit").prop("disabled", true);

    // Enables the submit button only when there is text in the dialog box
    // Diables the box if text is not present
    $("#showLength").keyup(function(){
        if($("#showLength").val() == ""){
            $("#submit").prop("disabled", true);
        } else {
            $("#submit").removeAttr("disabled");
        }
    })

    function renderButtons(){
        $("#movieButton").empty();
        // Loop appends a button for each string in the array
        for (i = 0; i < topics.length; i++){
            var mButton = $("<button>")
            mButton.addClass("showGif");
            mButton.attr("data-name", topics[i]);
            mButton.text(topics[i]);
            $("#movieButton").append(" ", mButton);
        }
        generateGif();
    }

    // Submit button function
    $("#submit").on("click", function(){
        // evt.preventDefault();
        var show = $("#showLength").val().trim();
        topics.push(show);
        mButton = $("<button>")
        mButton.addClass("showGif");
        mButton.attr("data-name", topics[i]).text(topics[i]);
        $("#movieButton").append(" ", mButton);
        renderButtons();
        // console.log(topics);
        $("#showLength").val("");
        // Disables the submit button once again
        $(this).prop("disabled", true);
        
    })

    function generateGif(){
    // When the user clicks on a button, the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.
        $(".showGif").on("click", function(){
            var show = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                show + "&api_key=whIW4NL8ItI77ZD3d2Yomtb0G40WFANS&limit=10";

            // Ajax Start
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response)
                var results = response.data;
                var image;  

                for (n = 0; n < results.length; n++) {

                    // Make a div with jQuery and store it in a variable named showDiv.
                    var showDiv = $("<div>");
                    // Make a paragraph tag with jQuery and store it in a variable named p.
                    var p = $("<p>");
                    // Set the inner text of the paragraph to the rating of the image in results[i].
                    p.html(results[n].rating);
                    // Make an image tag with jQuery and store it in a variable named image.
                    var image = $("<img>");
                    // Set the image's src to results[i]'s fixed_height.url.
                    image.attr("src", results[n].images.fixed_height_still.url);
                    // image.attr("data-still", results[n].images.fixed_height_still.url);
                    image.attr("data-state", "still");
                    image.attr("data-still", results[n].images.fixed_height_still.url);
                    image.attr("data-animate", results[n].images.fixed_height.url);
                        // image.attr("src", results[n].images.fixed_height.url);
                        // image.attr("src", results[n].images.fixed_height.url + "data-still=" + results[n].images.fixed_height.url + "data-animate=" + results[n].images.fixed_height.url);
                    // Append the p variable to the showDiv variable.
                    p.append(showDiv);
                    // Append the image variable to the showDiv variable.
                    showDiv.append(image);
                    // Prepend the showDiv variable to the element with an id of gifs.
                    $("#gifs").prepend(showDiv);

                    
                }

                $("img").on("click", function(){
                    console.log("animate function")
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                })

            })
        })
    }
    renderButtons();
})