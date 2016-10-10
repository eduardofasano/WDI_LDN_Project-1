$(function() {
  console.log('loaded');

  var $number_board = $(".number_board");
  var $input_board = $(".input_board");
  var $form_event = $(".form_event");
  var $submit_button = $("#submit_button");
  var $load_button = $("#load_button");
  var $reset_button = $("#reset_button");
  var $tiles = $("li");
  var $grid_arr = [];
  var $rand_arr = [];
  var sol_arr = [];
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

  $submit_button.click(function() {
    var $level = $(".level").val();
    var $language = $(".language").val();
    var $tile_num = 0;

    switch(true) {
      case $level === "level1":
        $tile_num = 4;
        switch (true) {
          case $language === "numbers":
          $grid_arr = [1,2,3,4];
          break;
          case $language === "letters":
          $grid_arr = ["A","B","C","D"];
          break;
          case $language === "chinese":
          $grid_arr = ["我","你","他","她"];
          break;
          case $language === "emoji":
          $grid_arr = ["😜","😂","🎾","😘"];
          break;
        }
        $count=4;
        $number_board.width("150px");
        $number_board.height("150px");
        $input_board.width("150px");
        $input_board.height("150px");
        console.log($tile_num);
      break;
      case $level === "level2":
        $tile_num = 9;
        switch (true) {
          case $language === "numbers":
          $grid_arr = [1,2,3,4,5,6,7,8,9];
          break;
          case $language === "letters":
          $grid_arr = ["A","B","C","D","E","F","G","H","I"];
          break;
          case $language === "chinese":
          $grid_arr = ["我","你","他","她","饭","吃","茶","是","不"];
          break;
          case $language === "emoji":
          $grid_arr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡"];
          break;
        }
        $count=31;
        $number_board.width("220px");
        $number_board.height("220px");
        $input_board.width("220px");
        $input_board.height("220px");
        console.log($tile_num);
      break;
      case $level === "level3":
        $tile_num = 16;
        $count=61;
        switch (true) {
          case $language === "numbers":
          $grid_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
          break;
          case $language === "letters":
          $grid_arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
          break;
          case $language === "chinese":
          $grid_arr = ["我","你","他","她","饭","吃","茶","是","不","太","好",'马',"雨","快","大","吧",];
          break;
          case $language === "emoji":
          $grid_arr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡","💩","💀","👻","👽","🤖","🙉","🐨"];
          break;
        }
        $number_board.width("250px");
        $number_board.height("250px");
        $input_board.width("250px");
        $input_board.height("250px");
        console.log($tile_num);
      break;
      case $level === "level4":
        $tile_num = 25;
        $count=121;
        switch (true) {
          case $language === "numbers":
          $grid_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
          break;
          case $language === "letters":
          $grid_arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
          break;
          case $language === "chinese":
          $grid_arr = ["我","你","他","她","饭","吃","茶","是","不","太","好",'马',"雨","快","大","吧","了","写","了","男","女","狗","猫","米","国"];
          break;
          case $language === "emoji":
          $grid_arr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡","💩","💀","👻","👽","🤖","🙉","🐨","🐲","🕊","🍜","🎷","🗿","🕶","🌊","🎱","🏄"];
          break;
        }
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

      $rand_arr.push($new_tile.innerHTML); //omitted parse float
      var $rem_num = ($grid_arr.indexOf($arr_val)); //assign array value to a variable
      $grid_arr.splice($rem_num, 1); //take away array vaue from array
      //e.preventDefault();
    }
    if ($count===0) {
    }
    $submit_button.prop( "disabled", true );
  });

$load_button.click(function() {
  var newInput_obj = document.getElementsByClassName("newInput");
  for (i=0; i<newInput_obj.length; i++) {
    console.log(i, newInput_obj[i].value);
    sol_arr.push(newInput_obj[i].value); //omitted parse float
  }
  scoreCheck();
});

function scoreCheck (){
  var newInput_obj = document.getElementsByClassName("newInput");
  for (i=0; i<newInput_obj.length; i++) {
    if(sol_arr[i] === $rand_arr[i]) {
      newInput_obj[i].className += ' correct';
    } else {
      newInput_obj[i].className += ' incorrect';
    }
  }
  console.log(sol_arr);
  console.log($rand_arr);
}

$reset_button.click(function() {
  $grid_arr = [];
  $rand_arr = [];
  sol_arr = [];
  $count= 0;
  $level = "";
  $language = "";
  $submit_button.prop( "disabled", false );
  $number_board.fadeIn(2000);
  $number_board.html("");
  $input_board.html("");
  //$input_board.html(" ");
  $number_board.css("z-index", "2");
  $input_board.css("z-index", "1");
  $("input").html(" ");
  $("li").html(" ");
});


});
