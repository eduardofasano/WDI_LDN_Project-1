$(function() {
  console.log('loaded');

  var $number_board = $(".number_board");
  var $input_board = $(".input_board");
  var $form_event = $(".form_event");
  var $submit_button = $("#submit_button");
  var $tiles = $("li");
  var $grid_arr = [];
  var $rand_arr = [];
  var $count = 0;
  var $counter = setInterval(timer, 1000);

    function timer(){
      if($count > 0) {
        $count--;
        if ($count===0){
        clearInterval();
        $number_board.fadeOut(2000);
        //$input_board.fadeIn(2000);
      }
    }
      $("#timer").html($count + " seconds");
    }

    function resetTimer(){
      $count = 120;
    }

  $submit_button.one("click", function() {
    var $level = $(".level").val();
    var $tile_num = 0;

    switch(true) {
      case $level === "level1":
        $tile_num = 4;
        $grid_arr = [1,2,3,4];
        $count=3;
        $number_board.width("150px");
        $number_board.height("150px");
        $input_board.width("150px");
        $input_board.height("150px");
        console.log($tile_num);
      break;
      case $level === "level2":
        $tile_num = 9;
        $grid_arr = [1,2,3,4,5,6,7,8,9];
        $count=3;
        $number_board.width("220px");
        $number_board.height("220px");
        $input_board.width("220px");
        $input_board.height("220px");
        console.log($tile_num);
      break;
      case $level === "level3":
        $tile_num = 16;
        $count=3;
        $grid_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        $number_board.width("250px");
        $number_board.height("250px");
        $input_board.width("250px");
        $input_board.height("250px");
        console.log($tile_num);
      break;
      case $level === "level4":
        $tile_num = 25;
        $count=3;
        $grid_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        $number_board.width("330px");
        $number_board.height("330px");
        $input_board.width("330px");
        $input_board.height("330px");
        console.log($tile_num);
      break;
    }

    for (i=0; i<$tile_num; i++) {
      var $rand_num = Math.floor(Math.random()*($grid_arr.length)); //get random number
      var $arr_val = $grid_arr[$rand_num]; //extract array value using random number

      var $new_tile = document.createElement('li');
      var $new_input = document.createElement('input');

      $number_board.append($new_tile);
      $input_board.append($new_input);

      $new_tile.id = i;
      $new_input.className += ' newInput';
      $new_input.id = i;

      $new_tile.innerHTML = $arr_val;
      $new_input.type = "text";

      $rand_arr.push(parseFloat($new_tile.innerHTML));
      var $rem_num = ($grid_arr.indexOf($arr_val)); //assign array value to a variable
      $grid_arr.splice($rem_num, 1); //take away array vaue from array
      //e.preventDefault();
    }
    if ($count===0) {
    }
  });
});


// console.log($level);
//
// switch(true) {
//   case $level === "level1":
//   $tile_num = 4;
//   $board.style.width = "200px";
//   $board.style.height = "200px";
//   console.log($tile_num);
//   break;
//   case $level === "level2":
//   $tile_num = 9;
//   $board.style.width = "250px";
//   $board.style.height = "250px";
//   console.log($tile_num);
//   break;
//   case $level === "level3":
//   $tile_num = 16;
//   $board.style.width = "300px";
//   $board.style.height = "300px";
//   console.log($tile_num);
//   break;
//   case $level === "level4":
//   $tile_num = 25;
//   $board.style.width = "350px";
//   $board.style.height = "350px";
//   console.log($tile_num);
//   break;
// }

// $form_event.submit(function(e) {
//
//   $tile.each(function(i, tile) {
//     var $rand_num = Math.floor(Math.random()*($grid4_arr.length)); //get random number
//     var $arr_val = $grid4_arr[$rand_num]; //extract array value using random number
//     tile.innerHTML = $arr_val;
//     $rand_arr.push(parseFloat(tile.innerHTML));
//     var $rem_num = ($grid4_arr.indexOf($arr_val)); //assign array value to a variable
//     $grid4_arr.splice($rem_num, 1); //take away array vaue from array
//     e.preventDefault();
//   });
//   $count=10;
//   console.log($rand_arr);
// });
// });
