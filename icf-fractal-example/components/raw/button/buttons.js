
export function buttons() {

	$(document).ready(function(){

		$( ".button-primary" ).on( "click", function() {
			$(this).addClass("button-primary--gradiant");
		});

	});

}
