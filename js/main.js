new Vue({
    el: '#app',
    data: {
        readyForNewGame: false,
        playerHealth: 100,
        monsterHealth: 100,
        healthMaxDamage: 10,
        healMaxGain : 10,
        eventList: []
    },
    methods: {
        reinit: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.readyForNewGame = false;
            this.eventList = [];
            console.clear();
        },
        attack: function() {
            // Calculate player and monster damage
            playerDamage = this.calculateDamage(this.healthMaxDamage);
            monsterDamage = this.calculateDamage(this.healthMaxDamage);

            // Insert events in the list
            this.eventList.push({isPlayer: true, text: 'Player hits monster for : ' + monsterDamage});
            this.eventList.push({isPlayer: false, text: 'Monster hits player for : ' + playerDamage});

            // Recalculate player and monster health
            this.playerHealth = this.playerHealth -= playerDamage;
            this.monsterHealth = this.monsterHealth -= monsterDamage;

            // Check if someone wins
            if ( (this.playerHealth <= 0) && (this.monsterHealth <= 0) ) {
                alert("Tie ! :-)");
            }
            else if  (this.playerHealth <= 0) {
                this.playerHealth = 0;
                alert("You lose ! :-(");
                this.readyForNewGame = true;
            }
            else if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                alert("You win ! Congratulations !");
                this.readyForNewGame = true;
            }
        },
        specialAttack: function() {
            playerDamage = this.calculateDamage(this.healthMaxDamage * 2);
            if (playerDamage > 100) playerDamage = 100;
            monsterDamage = this.calculateDamage(this.healthMaxDamage * 2);
            if (monsterDamage > 100) monsterDamage = 100;

            this.eventList.push({isPlayer: true, text: 'Player hits monster for : ' + monsterDamage});
            this.eventList.push({isPlayer: false, text: 'Monster hits player for : ' + playerDamage});

            this.playerHealth = this.playerHealth -= playerDamage;
            if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                alert("Monster wins ! :-(")
                this.readyForNewGame = true;
            }

            this.monsterHealth = this.monsterHealth -= monsterDamage;
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                alert("You win ! Congratulations !")
                this.readyForNewGame = true;
            }
        },
        heal: function() {
            if (this.playerHealth < 100) playerDamage = this.calculateDamage(this.healMaxGain); else playerDamage = 0;
            if (this.monsterHealth < 100) monsterDamage = this.calculateDamage(this.healMaxGain); else monsterDamage = 0;

            this.eventList.push({isPlayer: true, text: 'Player heals himself with ' + playerDamage});
            this.eventList.push({isPlayer: false, text: 'Monster heals himself with ' + monsterDamage});

            this.playerHealth = this.playerHealth += playerDamage;
            if  (this.playerHealth > 100) this.playerHealth = 100;

            this.monsterHealth = this.monsterHealth += monsterDamage;
            if (this.monsterHealth > 100) this.monsterHealth = 100;
        },
        calculateDamage: function(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
    }
 });