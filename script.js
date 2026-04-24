function player(name) {
 this.name = name,
 this.lvl = 1,
 this.points = 0;
 }

player.prototype.gainxp = function (xp){
    this.points += xp;

    if(this.points >= 10){
        this.lvl++;
        this.points -= 10;
    }
 }

 player.prototype.describe = function() {
    return`${this.name} is level ${this.lvl} with ${this.points} experience points`
 }


 const player1 = new player('krish');
 const player2 = new player('krishit');


 player1.gainxp(4);
 player1.gainxp(7);
 player1.gainxp(2);
 player1.gainxp(9);
 
 player2.gainxp(3);
 player2.gainxp(5);
 player2.gainxp(8);
 
 console.log(player1.describe());
 console.log(player2.describe());


 