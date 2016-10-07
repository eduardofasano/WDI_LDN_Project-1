$(function() {
  console.log('loaded');

  var $grid1_arr = [1,2,3,4];
  var $grid2_arr = [1,2,3,4,5,6,7,8,9];
  var $grid3_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  var $grid4_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var $board = $("board");
  var $tiles = $("li");
  var $form_event = $(".form_event");
  var $rand_arr = [];

  var $count = 0;
  var $counter = setInterval(timer, 1000);

    function timer(){
      if($count > 0) {
        $count--;
        if ($count===0){
        clearInterval();
        window.alert("Timer up!");
      }
    }
      $("#timer").html($count + " seconds");
    }


  $form_event.submit(function(e) {

    $tiles.each(function(i, tile) {
      var $rand_num = Math.floor(Math.random()*($grid4_arr.length)); //get random number
      var $arr_val = $grid4_arr[$rand_num]; //extract array value using random number
      tile.innerHTML = $arr_val;
      $rand_arr.push(parseFloat(tile.innerHTML));
      var $rem_num = ($grid4_arr.indexOf($arr_val)); //assign array value to a variable
      $grid4_arr.splice($rem_num, 1); //take away array vaue from array
      e.preventDefault();
    });
    $count=10;
    console.log($rand_arr);
  });
});
