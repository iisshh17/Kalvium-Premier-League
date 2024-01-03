//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerAge, currentTeam, trophiesWon){
  var ManagerInfo = [managerAge, currentTeam, trophiesWon];
  return ManagerInfo;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  var formationObject = {
    defender : formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return formationObject;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var debutePlayer = players.filter((player) => player.debut == year)
  console.log(debutePlayer)
  return debutePlayer;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var positionPlayer = players.filter((player) => {
    return player.position == position;
  })
  return positionPlayer;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let array1 = players.filter((player) => {
    let hasWon = false;
    for (let j = 0; j < player.awards.length; j++) {
      if(player.awards[j].name === awardName) hasWon = true;
    }
    return hasWon;
  });
  return array1;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let array2 = players.filter((player) => {
    let count = 0;
    for (let j = 0; j < player.awards.length; j++) {
      if (player.awards[j].name == awardName)
       {
          count++;       
      }
    }
    return(count == noOfTimes)
  });
  return array2;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let playerWon = filterByAward(awardName);
  let array3 = playerWon.filter(player => player.country == country);
  return array3;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let array4 = players.filter(player => {
    return (player.awards.length >= noOfAwards && player.team == team && player.age < age)
  });
  return array4;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var sortPlayers = players;
  for (let i = 0; i < sortPlayers.length; i++) {
    for (let j = i + 1; j < sortPlayers.length; j++) {
      if (sortPlayers[i].age < sortPlayers[j].age) {
        let temp = sortPlayers[i];
        sortPlayers[i] = sortPlayers[j];
        sortPlayers[j] = temp;
      }
    }
  }
  console.log(sortPlayers);
  return sortPlayers;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let count = 0;
  let filterPlayers = players.filter((player) => {
    return player.team == team;
  })
  for (let i = 0; i < filterPlayers.length; i++) {
    for (let j = i + 1; j < filterPlayers.length; j++) {
      if (filterPlayers[i].awards.length < filterPlayers[j].awards.length) {
        let temp = filterPlayers[i];
        filterPlayers[i] = filterPlayers[j];
        filterPlayers[j] = temp;
      }
    }
  }
  return filterPlayers;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var filterAwardPlayers = filterByAwardxTimes(awardName, noOfTimes);
  var filterCountryPlayers = filterAwardPlayers.filter((player) => {
    return player.country === country;
  });
  filterCountryPlayers.sort((a, b) => a.name.localeCompare(b.name));

  return filterCountryPlayers;
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var data = players.filter((player) => player.age > age);
  data.sort((a, b) => a.name.localeCompare(b.name));
  data.forEach((player) => {
    player.awards.sort((a, b) => b.year - a.year);
  });

  return data;
}