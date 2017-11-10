$(document).ready(function() {

	/*
	Part 1
		HINT - Think about what the bounds of the for loop should be
		HINT - $("body").append("<div class='red'></div>"); would add a
		new div with the class of 'red' to the body. Note how we are passing
		in a string to .append()
		HINT - You will be using string concatination; i.e. "race" + "car" returns "racecar"
	*/

	let start =    1
	let end =      31


	for (let i = start; i < end; i++) {
		$("#q3-calendar-start").append("<div class=" + 'q3-calender-item' + ">" + i + "</div");
		// Note this can be done in 1 line and shouldn't
		// take more than 3 lines depending on how you implement it


	}

})
