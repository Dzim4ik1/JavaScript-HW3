// 1

function getWordRu(quantity, array){
	
	if (quantity <= 1){
		return console.log(`  ${quantity} ${array[0]}`); 
	}
	if (quantity >= 2 && quantity <= 4){
		return console.log(`  ${quantity} ${array[1]}`); 
	}
	if (quantity >= 5){
		return console.log(`  ${quantity} ${array[2]}`); 
	}
}

function getWordEn(quantity, array){
	return quantity <= 1 ? console.log(`  ${quantity} ${array[0]}`) : console.log(`  ${quantity} ${array[1]}`)

}
getWordRu(1,['фильм', "фильма", 'фильмов'])
getWordRu(2,['предмет', "предмета", 'предметов'])
getWordRu(6,['предмет', "предмета", 'предметов'])

getWordEn(1, ['movie', 'movies'])
getWordEn(7, ['movie', 'movies'])
//2

//

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
