const fruits = [
  "Banana",
  "Jabuka",
  "Limun",
  "Lubenica",
  "Banana",
  "Jabuka",
  "Kiwi",
  "Banana",
];

const countedFruits = fruits.reduce((allFruits, fruit) => {
  if (fruit in allFruits) allFruits[fruit]++;
  else allFruits[fruit] = 1;

  return allFruits;
}, {});

let poljeSlova = ["a", "b", "b", "c", "a", "d", "e", "c", "f", "b"];
const sortiranoPoljeSlova = poljeSlova.reduce((accu, currValue) => {
  if (accu.indexOf(currValue) === -1) accu.push(currValue);
  return accu;
}, []);

let pilots = [
    {
      id: 13,
      name: "Chuck Schuldinger",
      years: 14,
    },
    {
      id: 72,
      name: "Nicholas Cage",
      years: 30,
    },
    {
      id: 91,
      name: "Denzel Washington",
      years: 16,
    },
    {
      id: 44,
      name: "Quentin Tarantino",
      years: 22,
    }
  ];
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

const mostExpPilot = pilots.reduce((oldest, pilot) => {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});

module.exports = { countedFruits, sortiranoPoljeSlova, totalYears, mostExpPilot };
