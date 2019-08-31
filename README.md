# MONSTER SLAYER

This is my own implementation of A. SWARTZMULLER game. This game is an exercice to check the comprehension of the first concepts of VueJS.

## Installation

Just clone the repository and open index.html file with an internet browser. That's it ! You can also install the application on a web server.

## How to play ?

Monster Slayer is a really simple and basic fight game between the player and the computer. Player and computer begin with 100% of health. The first one who reaches 0% health has lost. 

The player launches an attack by pressing "Attack" or "Special Attack" buttons.

At the beginning of the game, player and monster have both 100% of health. By attacking, the health decreases depending of the amount of damage caused by the opponent.

# ATTACK

By pressing "Attack", the player launches 2 actions :

1. The computer calculates the amount of damage caused by the player to the monster. It's a value between 0 and 10%. 

2. The computer calculates the amount of damage caused by the monster to the player. It's also a value between 0 and 10%.

3. The amount of attack is aplied to the player and the monster health.

# SPECIAL ATTACK

Same as ATTACK, but damages are multiplied by 2.

# HEAL

By pressing "Heal", the player launches 2 actions :

1. The computer calculates the amount of health the player is recovering. It's a value between 0 and 10%. 

2. The computer calculates the amount of health the monster is recovering. It's also a value between 0 and 10%.

3. The amount of health recovered is added to the player and the monster health.

# GIVE UP

By pressing "Give Up", the player ends the game. He can then lauch a new game by pressing the "START NEW GAME" button.

That's it !
