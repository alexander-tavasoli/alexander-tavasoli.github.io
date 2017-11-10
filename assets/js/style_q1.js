$(document).ready(function() {

    /*
    HINT: to get the id of a div use this code:
    $(".my_elem").attr("id");

    HINT: You're going to have to do some string concatination
    - i.e. "race" + "car" returns "racecar"

    HINT: All the variable(s) you need have already been defined,
    all you need to do is *reassign*, not define any new variables
    */

    // Hmmmm... what could this be for?
    let last_selected_button = "#q1-red";


    $(".q1-button").click(function() {

        $(last_selected_button).removeClass("active");
        $(last_selected_button).addClass("inactive");


        /* YOUR CODE HERE - start */
        last_selected_button =  "#" + $(this).attr("id");
        /* YOUR CODE HERE - end */

        $(last_selected_button).removeClass("inactive");
        $(last_selected_button).addClass("active");

        $("#q1-overlay").css("background", $(last_selected_button).css("background"));
    })




})
