'use strict'
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski','Lewandowski', 'Gnarby', 'Gnarby','Lewandowski', 'Hummels', 'Ylistava'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

 const [players1 , players2] = game.players
 console.log(players1 , players2);

 const [gk, ...fieldplayers] = players1
 console.log(gk, fieldplayers)

 const allplayers = [...players1 , ...players2]
 console.log(allplayers); 

 const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic' ]
 console.log(players1Final);

 const team1 = game.odds.team1
 const draw = game.odds.x
 const team2 = game.odds.team2
 console.log(team1,draw,team2);

 const printGoals = function (...players) {
  console.log(`${players}`);
  console.log(`${players.length} goals were scored`);
 }
 printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
 printGoals(...game.scored)

 team1 > team2 && console.log('team1 is more likely to win');
 team1 < team2 && console.log('team2 is more likely to win');




for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i +1} : ${player}`);
}




const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd
average /= odds.length
console.log(average);

for (const [team, odd] of Object.entries(game.odds)){
const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
console.log(`odd of ${teamStr} ${odd}`);
}

console.log(Object.entries(game.odds));

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
