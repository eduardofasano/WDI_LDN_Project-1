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
  var $cor_arr = [];
  var $iq_val = 1;
  var $count = -1;
  var $counter = setInterval(timer, 1000);
  var $scenario = 0;
  var $instructions = $("#instructions_text");

  function timer(){
    $("#timer").html("Use your time wisely...");
    if($count > 0) {
      $count--;
      if ($count===0){
        clearInterval();
        $number_board.fadeOut(2000);
        $instructions.html("Very well, please fill in as many of the squares as you can remember... Take all the time you need - but I suggest you move quickly. To submit your answers select Load.");
      }
      $("#timer").html("Timer: "+$count + " seconds");
    }
  }

  function resetTimer(){
    $count = 120;
  }

  $submit_button.click(function() {
    var $level = $(".level").val();
    var $language = $(".language").val();
    var $tile_num = 0;

    $instructions.html("Focus... Time is precious. Try to remeber as much of the grid below, before the timer reaches zero. Now is the time to focus! If you wish to start again, then press reset");
    switch(true) {
      case $level === "level1":
      $scenario = 1;
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
      $scenario = 2;
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
      $scenario = 3;
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
      $scenario = 4;
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
    finalPrompt();
  });

  function scoreCheck (){
    var newInput_obj = document.getElementsByClassName("newInput");
    for (i=0; i<newInput_obj.length; i++) {
      if(sol_arr[i] === $rand_arr[i]) {
        newInput_obj[i].className += ' correct';
        $cor_arr.push(1);
      } else {
        newInput_obj[i].className += ' incorrect';
      }
    }
    $iq_val = (($cor_arr.length/newInput_obj.length));
    console.log($iq_val);
    console.log($scenario);
    }

    function finalPrompt (){
    switch (true) {
      case $scenario === 1:
        switch(true) {
        case $iq_val === (1.0):
          $instructions.html("Very impressive, a perfect score, you are obviously ready for the next level!");
          break;
          case $iq_val >= (0.75):
          $instructions.html("Well done indeed. Even though you missed a tile, I suggest you move onto the next level!");
          break;
          case $iq_val < (0.75):
          $instructions.html("There is little to be proud of in your score. Are you trying to ruin my experiment!?!? Focus harder! Repeat the same level!");
          break;
      } break;
      case $scenario === 2:
      switch(true) {
      case $iq_val === (1.0):
        $instructions.html("Very impressive, a perfect score, you are obviously ready for the next level!");
        break;
        case $iq_val >= (0.75):
        $instructions.html("Well done indeed. You scored "+($iq_val*100)+"%, I suggest you move onto the next level!");
        break;
        case $iq_val >= (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%, perhaps you should repeat this level before moving forward... Focus!");
        break;
        case $iq_val < (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%!  Are you trying to ruin my experiment!?!? Focus harder! Repeat the same level!");
        break;
      } break;
      case $scenario === 3:
      switch(true) {
      case $iq_val === (1.0):
        $instructions.html("Very impressive, a perfect score, you are obviously ready for the next level!");
        break;
        case $iq_val >= (0.75):
        $instructions.html("Well done indeed. You scored "+($iq_val*100)+"%, I suggest you move onto the next level!");
        break;
        case $iq_val >= (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%, perhaps you should repeat this level before moving forward... Focus!");
        break;
        case $iq_val < (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%!  Are you trying to ruin my experiment!?!? Focus harder! Repeat the same level!");
        break;
      } break;
      case $scenario === 4:
      switch(true) {
      case $iq_val === (1.0):
        $instructions.html("Mamma mia... A perfect score!!! I never thought this day would come! You have solved the mysteries to memory. What a wonderful mind you have! I am forever greateful...");
        break;
        case $iq_val >= (0.75):
        $instructions.html("Well done indeed. You scored "+($iq_val*100)+"%, dare I say that you are on your way to reaching a state of perfect memory?");
        break;
        case $iq_val >= (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%, this is a hard challenge indeed. It would be best if you treat it as such... Focus!");
        break;
        case $iq_val < (0.60):
        $instructions.html("You scored "+($iq_val*100)+"%!  Are you trying to ruin my experiment!?!? Focus harder! Repeat the same level!");
        break;
      }
    }
    }


  $reset_button.click(function() {
    $grid_arr = [];
    $rand_arr = [];
    sol_arr = [];
    $cor_arr = [];
    $count= 0;
    var $level = $(".level").val();
    var $language = $(".language").val();
    $submit_button.prop( "disabled", false );
    $number_board.fadeIn(2000);
    $number_board.html("");
    $input_board.html("");
    //$input_board.html(" ");
    $number_board.css("z-index", "2");
    $input_board.css("z-index", "1");
    $("input").html(" ");
    $("li").html(" ");
    $instructions.html("Hello! I am Dr. Kawashima. I am a renowed expert on memory. I am looking for subjects who can take part in my research. If you would like to help, pick a level and language...");
  });
});
