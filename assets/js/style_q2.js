$(document).ready(function()  {

	/*
	Part 1
		HINT - What are the only two states a button can be in?
		HINT - Hmmm button_active looks pretty helpful...

	Part 2
		HINT - What information did the outer for look give us?
		HINT - Hmmm button_name looks pretty helpful...
		HINT - Display should be set to inline-block
	*/

	$(".q2-nav-item").click(function() {


		let button_name = $(this).text();
		let button_active = $(this).hasClass("q2-active");

		let condition = ! button_active

		if (condition) {
			$(this).addClass("q2-active");
			$(this).removeClass("q2-inactive");

			if (button_name == "WATER") {
				$(".q2-water").css("display", "inline-block");
			}

			if (button_name == "FRUIT"){
				$(".q2-fruit").css("display", "inline-block");
			}

			if (button_name == "BREAD"){
				$(".q2-bread").css("display", "inline-block");
			}

		} else {
			$(this).addClass("q2-inactive");
			$(this).removeClass("q2-active");

			if (button_name == "WATER") {
				$(".q2-water").css("display", "none");
			}

			if (button_name == "FRUIT"){
				$(".q2-fruit").css("display", "none");
			}

			if (button_name == "BREAD"){
				$(".q2-bread").css("display", "none");
			}
		}
	})



})
