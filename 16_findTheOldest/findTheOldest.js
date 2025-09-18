const people = [
    {
    name: "Carly",
    yearOfBirth: 1066,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  return arr.reduce((oldest, person) => {
    const age = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
    return age > oldestAge ? person : oldest; 
  });
};
findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
