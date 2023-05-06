// 1

function getWordRu(quantity, array) {
  const getWords = () => {
    let num = Math.abs(quantity);
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return array[2];
    if (num > 20) num = num % 10;
    return num === 1 ? array[0] : num > 1 && num < 5 ? array[1] : array[2];
  };
  let arr = getWords();

  return `${quantity} ${arr}`;
}

console.log(getWordRu(1, ["предмет", "предмета", "предметов"]));
console.log(getWordRu(121, ["яблоко", "яблока", "яблок"]));
console.log(getWordRu(111, ["фильм", "фильма", "фильмов"]));

function getWordEn(quantity, array) {
  return quantity == 1
    ? console.log(`  ${quantity} ${array[0]}`)
    : console.log(`  ${quantity} ${array[1]}`);
}
getWordEn(1, ["movie", "movies"]);
getWordEn(7, ["movie", "movies"]);

//2
const movies = [
  {
    id: "a01",
    title:
      "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
    year: 1996,
    actors: ["Shawn Wayans", "Marlon Wayans", " Keenen Ivory Wayans"],
    description:
      "Ashtray, Tray for short, is sent to the inner city to live with his father. Tray gets an education about life on the streets from his psychotic, gun-toting cousin Loc Dog, pot-smoking foul-mouthed Grandma, underage Pops, and gang members Preach and Crazy Legs. At a picnic, Tray falls for the infamous Dashiki, who has seven kids, much to the distaste of ex-convict Toothpick, who happens to be her ex-boyfriend. When Ashtray and Loc Dog head out to buy some snacks, Toothpick and his crew, Al Dog and Sam, confront Ashtray and hold him at gunpoint until Loc Dog threatens them with a nuclear missile mounted in the back of his truck, whereupon Toothpick and his gang flee the scene.",
    details: {
      genre: "comedy",
      reviews: [
        { username: "bigBlackC", content: "Nice movie. LoL ", score: 9 },
      ],
    },
  },
  {
    id: "a02",
    title: "Harry Potter and the Philosopher's Stone ",
    year: 2001,
    actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    description:
      "Late one night, Albus Dumbledore and Minerva McGonagall, professors at Hogwarts School of Witchcraft and Wizardry, along with groundskeeper Rubeus Hagrid, deliver an orphaned infant wizard named Harry Potter to his Muggle aunt and uncle, Petunia and Vernon Dursley, his only living relatives.",
    details: {
      genre: "Fantasy",
      reviews: [
        {
          username: "Wizard007",
          content: "Where is my invite to Hogwarts?",
          score: 10,
        },
      ],
    },
  },
  {
    id: "a03",
    title: "The Platform",
    year: 2019,
    actors: ["Iván Massagué", "Antonia San Juan", "Zorion Eguileor"],
    description:
      "Goreng wakes in a concrete cell marked with the number 48. His cellmate, Trimagasi, explains that they are in (The Pit), a tower-style facility in which food is delivered via a platform that travels from the top-down, halting for a fixed period on each floor. People on lower levels can eat only what those above leave and are subjected to fatal temperatures if they keep the food. Prisoners are randomly reassigned to a new level each month. Trimagasi reveals that when assigned to level 132, he and his former cellmate cannibalized a resident who had fallen down the shaft. One day, a bloodied woman named Miharu rides down on the platform, whom Trimagasi explains descends the pit every month searching for her child.",
    details: {
      genre: "psychological thriller",
      reviews: [
        { username: "alfa12", content: "I love Apples ", score: 8 },
        { username: "alfa12", content: "I love Apples ", score: 10 },
        { username: "alfa12", content: "I love Apples ", score: 3 },
      ],
    },
  },
];

function filterShows(movies, filterCriteria) {
  const { year, title, rating } = filterCriteria;
  return movies.filter((show) => {
    const isContainsTheYear = year ? show.year >= year : true;
    const isContainsTheTitle = title
      ? show.title.toLowerCase().includes(title.toLowerCase())
      : true;
    const isContainsTheRating = rating ? show.rating >= rating : true;
    return isContainsTheYear && isContainsTheTitle && isContainsTheRating;
  });
}

const filterCriteria = { year: 2000, title: "and", score: 7 };
console.log(filterShows(movies, filterCriteria));

//3

let numberPrompt = prompt("type number", "95");
let num = Number(numberPrompt);

if (num >= 0 && num <= 40) {
  alert("You failed the exam, try again");
} else if (num >= 41 && num <= 70) {
  alert("you passed the exam, but you have to attend additional classes");
} else if (num >= 71 && num <= 100) {
  alert("You passed the exam, get some rest before the next one");
} else if (num <= -1 || num >= 101) {
  alert("The number must be from 0 to 100”");
} else {
  alert("It must be a number");
}

//4
function isPalindrom(str){
	return str === str.split('').reverse().join('') ? console.log('Палиндром') : console.log('не палиндром')
}

isPalindrom('абба')
isPalindrom('чебурек')
