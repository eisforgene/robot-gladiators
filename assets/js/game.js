// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
// "REPLAY" - Player wants to play again
//    * Visit shop


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// window.alert("Welcome to Robot Gladiators!"); 
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
      
    if (promptFight === "skip" || promptFight === "SKIP") { // If player decides to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) { // if yes (true), leave fight
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10; // subtract money for skipping the fight
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack; // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to udpate the value in the 'enemyHealth' variable
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );   // Log a resulting message to the console so we know that it worked.
    if (enemyHealth <= 0) { // Check enemy's health | control flow statement
      window.alert(enemyName + " has died!");
      break;
    } else { 
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    playerHealth = playerHealth - enemyAttack;  // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining,"
      );   // Log a resulting message to the console so we know that it worked.
    if (playerHealth <= 0) { // Check player's health
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }  
};

var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1)); // Let player know what round they're in
      
      var pickedEnemyName = enemyNames[i]; // Pick new enemy to fight based on the index of the enemyNames array
     
      enemyHealth = 50; // Reset enemy health before starting a new fight
      
      fight(pickedEnemyName); // pass the pickedEnemyName variable's value into the fight(), where it will assume the value of the enemyName parameter
    } 
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  console.log(playerHealth);
  endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame ();