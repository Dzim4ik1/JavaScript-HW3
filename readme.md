1. Задача: изменять окончание слова в зависимости от количества: 
For example, 2 фильма, 5 фильмов, 1 фильм + 1 movie and 2 movies

getWord(2, ['фильм', "фильма", 'фильмов']) -> 2 фильма
getWord(5, ['предмет', "предмета", 'предметов']) -> 5 предметов

2. Создать ОДНУ функцию, которая принимает объект критериев (год, название и рейтинг),  a возвращать будет массив фильмов/сериалов по трем критериям:

filterByYear + filterByTitle = one function

For example, filterShows(shows, filterCriteria);

3.  Задача: через prompt юзер вводить число от 0 до 100 (включительно).
Если число в промежутке [0 - 40], отдаем строку “You failed the exam, try again”
Если число в промежутке [41 - 70], отдаем строку “You passed the exam, but you have to attend additional classes”.
Если число в промежутке [71 - 100], отдаем строку “You passed the exam, get some rest before the next one”.
Если число не входит ни в один промежуток, то отдаем “The number must be from 0 to 100”
Если это не число, то отдаем “It must be a number”

4. Создайте функцию, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково вперед и назад), в противном случае false.