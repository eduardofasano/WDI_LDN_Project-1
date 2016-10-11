$(function() {
  console.log('loaded');

  var $numberBoard = $(".number_board"); //number board a.k.a grid
  var $inputBoard = $(".input_board"); //input board which appears at end of timer and replaces game board grid
  //var $form_event = $(".form_event");  REMOVE??
  var $submitButton = $("#submit_button"); //submit button which drives the grid functionality
  var submitClick = false;
  var $loadButton = $("#load_button"); //allows user to upload answers to missing grid elements
  var $resetButton = $("#reset_button"); //allows users to reset game board and levels to start over
  var $timerButton = $("#timer_button"); //allows users to manually end the timer and input grid elements
  var $timer = $("#timer"); //timer HTML selector
  var $tiles = $("li"); //number board is made up of individual <li> elements
  var gridArr = []; //primary array used to populate number board based on language & level when submit clicked
  var randArr = []; //stores randomised depicted components of grid array into seperate array
  var solArr = []; // stores user inputs into grid
  var corArr = []; // stores '1' each time user matches grid_arr[i] to solArr[i]
  var iqVal = 1; // (cor_arr.length)/(rand_arr.length); % correct
  var count; // variable for time user has to complete each level
  var counter; // variable which stores setInterval functionalilty for timer
  var scenario = 0; // alternative variable to store 'level' used in finalPrompt() switch
  var $instructions = $("#instructions_text"); // HTML selector to display text in instructions div
  $('.selectpicker').selectize(); //initialising selectize JS
  var newTile;
  var newInput;
  var arrVal;

  $loadButton.prop( "disabled", true );
  $timerButton.prop( "disabled", true );

  //TIMER FUNCTIONALITY
  //Timer function
  function timer(){
    if(count > 0) {
      count--;
      if (count===0) {
        resetTimer();
      }
      $timer.html("Timer: "+count + " seconds");
    }
  }

  //Sets setInterval when called in submit button click event
  function startTimer() {
    counter = setInterval(timer, 1000);
  }

  //Reset timer function called when timer reaches 0 or when user manually end timer
  function resetTimer(){
    console.log("reset timer function automatically");
    clearInterval(counter);
    count = 0;
    $numberBoard.fadeOut(1000);
    $instructions.html("Very well, please fill in as many of the squares as you can remember... Take all the time you need - but I suggest you move quickly. To submit your answers click Load.");
  }

  //Manual function which allows user to call resetTimer function
  $timerButton.click(resetTimer);

  //Submit button click event which defines level & language switches as well as the number board size
  $submitButton.click(function() {
    var $level = $(".level").val();
    var $language = $(".language").val();
    var $tile_num = 0;
    $instructions.html("Focus... Time is precious. Try to remeber as much of the grid below, before the timer reaches zero. Now is the time to focus! If you wish to start over, then press reset");

    //Switch statement within switch statement to determine tile num, count, language and level
    switch($level) {
      case "level1":
      scenario = 1;
      $tile_num = 4; //set level one tile count (2x2 grid)
      switch ($language) { //Switch to pick level2 language
        case "numbers":
        gridArr = [1,2,3,4];
        break;
        case "letters":
        gridArr = ["A","B","C","D"];
        break;
        case "chinese":
        gridArr = ["我","你","他","她"];
        break;
        case "emoji":
        gridArr = ["😜","😂","🎾","😘"];
        break;
      }
      count=4; //Set level1 timer count
      $numberBoard.width("150px"); //Set level1 grid styling - number board
      $inputBoard.width("150px"); //Set level1 grid styling - input board
      break;
      case "level2":
      scenario = 2;
      $tile_num = 9;
      switch ($language) { //Switch to pick level2 language
        case "numbers":
        gridArr = [1,2,3,4,5,6,7,8,9];
        break;
        case "letters":
        gridArr = ["A","B","C","D","E","F","G","H","I"];
        break;
        case "chinese":
        gridArr = ["我","你","他","她","饭","吃","茶","是","不"];
        break;
        case "emoji":
        gridArr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡"];
        break;
      }
      count=31;
      $numberBoard.width("220px"); //set level2 grid styling - number_board
      $inputBoard.width("220px"); //set level2 grid styling - number_board
      console.log($tile_num);
      break;
      case "level3":
      $tile_num = 16;
      scenario = 3;
      count=61;
      switch (true) {
        case $language === "numbers":
        gridArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        break;
        case $language === "letters":
        gridArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
        break;
        case $language === "chinese":
        gridArr = ["我","你","他","她","饭","吃","茶","是","不","太","好",'马',"雨","快","大","吧",];
        break;
        case $language === "emoji":
        gridArr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡","💩","💀","👻","👽","🤖","🙉","🐨"];
        break;
      }
      $numberBoard.width("250px");
      $inputBoard.width("250px");
      console.log($tile_num);
      break;
      case "level4":
      scenario = 4;
      $tile_num = 25;
      count=121;
      switch (true) {
        case $language === "numbers":
        gridArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        break;
        case $language === "letters":
        gridArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
        break;
        case $language === "chinese":
        gridArr = ["我","你","他","她","饭","吃","茶","是","不","太","好",'马',"雨","快","大","吧","了","写","了","男","女","狗","猫","米","国"];
        break;
        case $language === "emoji":
        gridArr = ["😜","😂","🎾","😘","😄","😆","🤓","😉","😡","💩","💀","👻","👽","🤖","🙉","🐨","🐲","🕊","🍜","🎷","🗿","🕶","🌊","🎱","🏄"];
        break;
      }
      $numberBoard.width("330px");
      $inputBoard.width("330px");
      console.log($tile_num);
      break;
    }

    //For loop which creates and appends tiles for board depending on tile_num figure set by user above
    for (i=0; i<$tile_num; i++) {
      var randNum = Math.floor(Math.random()*(gridArr.length)); //get random number
      arrVal = gridArr[randNum]; //extract array value using random number

      newTile = document.createElement('li'); //create <li> for i<$tile_num for number board
      newInput = document.createElement('input');//cre <input> for i<$tile_num for input board

      $numberBoard.append(newTile); //append newTile to $numberBoard
      $inputBoard.append(newInput); //append newInput to $inputBoard

      newTile.id = i;
      newTile.className += ' newTile';
      newInput.className += ' newInput';
      newInput.id = i;

      newTile.innerHTML = arrVal;
      newInput.type = "text";

      randArr.push(newTile.innerHTML);
      var $rem_num = (gridArr.indexOf(arrVal)); //assign array value to a variable
      gridArr.splice($rem_num, 1); //take away array vaue from array
    }
    startTimer();
    $submitButton.prop( "disabled", true );
    $loadButton.prop( "disabled", false );
    $timerButton.prop( "disabled", false );

  });

  //Load button gets user inputted numbers and figures, runs score function as well as final prompt function
  $loadButton.click( function() {
    var newInputObj = document.getElementsByClassName("newInput");
    for (i=0; i<newInputObj.length; i++) {
      solArr.push(newInputObj[i].value);
    }
    scoreCheck();
    finalPrompt();
  });

  //scoreCheck function compares the arrays and adds '1' to the 'cor_arr' if the answers are a match
  function scoreCheck (){
    $inputBoard.html("");
    $numberBoard.fadeIn(1);
    var newTileObj = document.getElementsByClassName("newTile");
    for (i=0; i<newTileObj.length; i++) {
      if(solArr[i] === randArr[i]) {
        newTileObj[i].className += ' correct';
        corArr.push(1);
      } else {
        newTileObj[i].className += ' incorrect';
      }
    }
    iqVal = ((corArr.length/newTileObj.length));
    }

    // //scoreCheck function compares the arrays and adds '1' to the 'cor_arr' if the answers are a match
    // function scoreCheck (){
    //   var newInputObj = document.getElementsByClassName("newInput");
    //   for (i=0; i<newInputObj.length; i++) {
    //     if(solArr[i] === randArr[i]) {
    //       newInputObj[i].className += ' correct';
    //       corArr.push(1);
    //     } else {
    //       newInputObj[i].className += ' incorrect';
    //     }
    //   }
    //   iqVal = ((corArr.length/newInputObj.length));
    //   }

    //Function to set Kawashima prompt depending on level selected and IQvalue i.e. the score
    function finalPrompt() {
      var message = "";
      switch(true) {
      case iqVal === 1:
        message = "Very impressive, a perfect score, you are obviously ready for the next level!";
        if(scenario === 4) message = "Mamma mia... A perfect score!!! I never thought this day would come! You have solved the mysteries to memory. What a wonderful mind you have! I am forever greateful...";
        break;
      case iqVal >= 0.75:
        message = "Well done indeed. You scored "+((iqVal*100).toFixed(2))+"%, I suggest you press reset and move onto the next level!";
        if(scenario === 4) message = "Well done indeed. You scored "+((iqVal*100).toFixed(2))+"%, dare I say that you are on your way to reaching a state of perfect memory?";
        break;
      case iqVal >= 0.6:
        message ="You scored "+((iqVal*100).toFixed(2))+"%, perhaps you should repeat this level before moving forward... Focus!";
        if(scenario === 4) message = "You scored "+((iqVal*100).toFixed(2))+"%, this is a hard challenge indeed. It would be best if you treat it as such... Focus!";
        break;
      case iqVal < 0.6:
        message = "You scored "+((iqVal*100).toFixed(2))+"%!  Are you trying to ruin my experiment!?!? Focus harder! Repeat the same level!";
        if(scenario === 4) message = "You scored "+((iqVal*100).toFixed(2))+"%!  You were obviously not ready for this challenge...";
      }
      $instructions.html(message);
    }

  $resetButton.click(function() {
    //Clear grids, prompt and arrays
    $instructions.html("Hello! I am Dr. Kawashima. I am a renowed expert on memory. I am looking for subjects for my research. If you would like to help, pick a level and language, then press submit!");
    $numberBoard.css("z-index", "2"); // when reset, place number board back in front
    $inputBoard.css("z-index", "1"); // when reset, place input board in the back again
    $numberBoard.html(""); // clear number board content
    $inputBoard.html(""); // clear input board content
    $("input").html(" "); // clear input inner html
    $("li").html(" "); // clear li inner html
    $numberBoard.fadeIn(2000);
    gridArr = [];
    randArr = [];
    solArr = [];
    corArr = [];

    //Clear level and language select values
    var $level = $(".level").val();
    var $language = $(".language").val();

    //Re-enable or disable buttons
    $submitButton.prop( "disabled", false );
    $loadButton.prop( "disabled", true );
    $timerButton.prop( "disabled", true );

    //Clear timer functionality
    clearInterval(counter);
    count= 0;
    $timer.html("Timer: "+count + " seconds");

  });
});
