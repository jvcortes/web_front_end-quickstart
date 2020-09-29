class studentHogwarts {

  constructor() {
    this.privateScore = 0;
    this.name = null;
  }

  changeScoreBy (points) {
    this.privateScore += points;
  }

  setName (newName) {
    this.name = newName;
  }
  
  rewardStudent () {
    this.changeScoreBy(1);
  }
  
  penalizeStudent () {
    this.changeScoreBy(1);
  }
  
  getScore () {
    return this.name + ': ' + this.privateScore;
  }

}

let harry = new studentHogwarts();
let draco = new studentHogwarts();

harry.setName('Harry')
for (let i = 0; i < 4; i++) {
  harry.rewardStudent()
}
console.log(harry.getScore())

draco.setName('Draco')
draco.rewardStudent()
for (let i = 0; i < 4; i++) {
  harry.penalizeStudent()
}

console.log(draco.getScore())
