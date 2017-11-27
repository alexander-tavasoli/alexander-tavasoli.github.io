$(document).ready(function(){

	const BLOCK_MOVE_FACTOR = 40;
	const NUM_BLOCKS = 4;
	const FRAME_RATE = 10;

	const ENEMIES = ['ajit','FCC','comcast','twc','verizon','att','xfinity'];
  const ENCOURAGEMENT = ['Great Job!', 'Keep Going!', 'The Fight isn\'t Over!', 'Free the Net!', 'Suck it, Pai!', 'Take that!']
	const MILESTONES = [25, 50, 100, 150, 200, 300, 500, 700, 1000]
	const COLORS = ['peachpuff', 'salmon', 'powderblue', 'palegreen', 'plum', 'lavender', 'lemonchiffon', 'aqua', 'salmon', 'pink'];

	let current_frame = 0;

	update_score = (score) => {
		$("#game-score").text("GBs Downloaded: " + score); /*jQuery Function Number 1*/
		if (MILESTONES.includes(score) || (score > 1000 && score % 500 == 0)) {
			encourage()
		}
	}


	encourage = () => {
		let message = ENCOURAGEMENT[Math.floor(Math.random() * ENCOURAGEMENT.length)];
		let color1 = COLORS[Math.floor(Math.random() * COLORS.length)];
		let color2 = COLORS[Math.floor(Math.random() * COLORS.length)];
		$("#message").css("color", color1); /* jQuery Function Number 2 */
		$("#message").text(message);
		$("#message").show(); /* jQuery Function Number 3 */
		setTimeout(function() {
			$("#message").fadeOut();  /* jQuery Function Number 4 */
		}, 1000)
	}


	parseToIntAt = ($obj1, property, delimiter) => {
		return parseInt($obj1.css(property).slice(0, $obj1.css(property).indexOf(delimiter)))
	}

	generate_blocks = (num_blocks) => {
		for (let i = 0; i<num_blocks; i++) {
			let ypos = Math.random();
			let index = Math.floor(ypos * 100) % ENEMIES.length;
			let img = "<img src='assets/img/" + ENEMIES[index] + ".jpg' />";
			let overlay = "<div class='tint enemy-animation'></div>"
			let block_string = "<div class='block' style='top: " + ((ypos * 100) + "%") + ";'>" + overlay + img + "</div>";
			$("#wall-spawn").append(block_string); /* jQuery Function Number 5 */
		}
	}

	remove_blocks = () => {
		$(".block").click(function(){  /* jQuery Function Number 6 */
				$(this).remove();
			})
		}

	remove_bad_blocks = () => {
		$(".block").each(function(){
			let top = parseToIntAt($(this), "top", "p");
			let bottom = parseToIntAt($(this), "bottom", "p");
			if (top < 100){$(this).remove();}
			else if (bottom < 100){$(this).remove();}
		})
	}

	end_game = () => {
		clearInterval(game_self);
		$("#message").hide();
		$(".block, #game-score").addClass("end");
		$("#end-score").text("Total " + $("#game-score").text());
		$("#overlay").show();
		$("#game-over").show();
	}

	$("#try-again-button").click(function() {
		location.reload();
	})

	end_of_net = () => {
		$(".block").each(function(){
			let left = parseToIntAt($(this), "left", "p");
			if (left < -100) end_game()

	})}

	move_blocks = () => {

		$(".block").each(function() {
			let new_left = parseToIntAt($(this), "left", "p") - BLOCK_MOVE_FACTOR;
			$(this).css("left", new_left + "")

		});
	}

	game_loop = () => {
		current_frame += 1;

		if (current_frame == 1 || current_frame % FRAME_RATE == 0) {
			generate_blocks(NUM_BLOCKS);
		}

		move_blocks();

		end_of_net()

		remove_blocks();

		update_score(current_frame);
	}

	let game_self = setInterval(game_loop, 200);

})
