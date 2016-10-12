$(document).ready(function(){

	// 	var turn = "X";
	// $(document).on("click", "game-space", function(){
	// 	if($(this).html==="") {
	// 		$(this).html(turn);
	// 	}
	// 	if(turn==="X") {
	// 		turn= "O" 
	// 	} else {
	// 		turn= "X"
	// 	}
	// 	}
	// });

	 var turn = "X";
   //Set up click events on each space of the tictactoe board
   $(document).on("click", ".game-space", function() {
       //Make sure spot is empty before continuing
       if ($(this).html() === "") {
           //Change inner HTML of element we just clicked on
           $(this).html(turn);

           //Change turn based on state of "turn" variable
           if (turn === "X") {
               turn = "O";
           } else {
               turn = "X";
           }
       }
   });
});






