var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
  
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack; // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to udpate the value in the 'enemyHealth' variable
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );   // Log a resulting message to the console so we know that it worked.
    if (enemyHealth <= 0) { // Check enemy's health | control flow statement
      window.alert(enemyName + " has died!");
    } else { 
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    playerHealth = playerHealth - enemyAttack;  // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining,"
      );   // Log a resulting message to the console so we know that it worked.
    if (playerHealth <= 0) { // Check player's health
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
  } else if (promptFight === "skip" || promptFight === "SKIP") { // If player decides to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) { // if yes (true), leave fight
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2; // subtract money for skipping the fight
    }
    
    else { // if no (false), ask question again by running fight() again
        fight();
    }
  }
};


fight();