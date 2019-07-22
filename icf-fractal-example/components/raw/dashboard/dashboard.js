
export function dashboard() {

	$(document).ready(function(){

		let DASHBOARD_TRANSITION_LENGTH = 2000;

		let iteration = 1;
		let iterationMax = 6;

		setInterval(function() {

			if($(".icf-dashboard").hasClass("icf-dashboard--black")){
				$(".icf-dashboard").removeClass("icf-dashboard--black");
				// let fontToRemove;
				// if(1 < iteration){
				// 	fontToRemove = iteration-1;
				// }else{
				// 	fontToRemove = iterationMax;
				// }
				let fontToRemove = (iteration-1);
				$(".icf-dashboard").removeClass("icf-dashboard--font-color-" + (fontToRemove > 0 ? fontToRemove : iterationMax));

			}else{
				$(".icf-dashboard").addClass("icf-dashboard--black");
				$(".icf-dashboard").addClass("icf-dashboard--font-color-" + iteration);

				// Switch the BG while the white BG is up
				setTimeout(function(){
					$(".icf-dashboard").removeClass("icf-dashboard--bg-" + iteration);
					iteration++;
					if(iteration > iterationMax){
						iteration = 1;
					}
					$(".icf-dashboard").addClass("icf-dashboard--bg-" + iteration);


				}, DASHBOARD_TRANSITION_LENGTH);

			}

		}, 6000);

	});

}
