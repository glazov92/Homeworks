//     Преобразовать строку в массив слов. Напишите функцию stringToArray(str), которая преобразует строку в массив слов.
const text = "Никогда не ошибается тот, кто ничего не делает";
function stringToArray(str) {
  str = str.split(" ");
  console.log(str);
  return str;
}
stringToArray(text);

//     Напишите функцию deleteCharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

let searchText = " ";
function deleteCharacters(str, length) {
  for (let i = 0; i < length; i++) {
    searchText = searchText + str[i];
  }
  return searchText;
}
deleteCharacters(text, 7);
console.log(searchText);

//     Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
function insertDash(str) {
  arr = text.split(" ").join("-").toUpperCase();
  return arr;
}
insertDash(text);
console.log(arr);
//     Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
function func1(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
console.log(func1(text));

//     Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
  str = str.split(" ");
  let NewStr = [];
  for (let i = 0; i < str.length; i++) {
    let word = str[i][0].toUpperCase() + str[i].slice(1);
    NewStr.push(word);
  }
  NewStr = NewStr.join(" ");
  console.log(NewStr);
  return NewStr;
}
capitalize(text);
//     Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {
  let NewStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      NewStr += str[i].toUpperCase();
    } else {
      NewStr += str[i].toLowerCase();
    }
  }
  return NewStr;
}
console.log(changeRegister(text));
//     Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
let s = "а б я 0 9";
s.codePointAt(0);
console.log(s.codePointAt(3));
function removeChar(str) {
  let NewStr = [];
  NewStr += str.match(/[^\w\s]|_/g);
  return NewStr;
}
console.log(removeChar('123 $% ggh &*^ зщк №№;"'));
//    Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение.
function zeros(num, len) {
  num = num * Math.pow(10, len - String(num).length);
  return num;
}
console.log(zeros(13, 5));
//     Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
  let r = str1.toLowerCase() === str2.toLowerCase();
  return r;
}
console.log(comparison("str1", "sTr1"));

//     Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

function insensitiveSearch(str1, str2) {
  let SearchStrPos = str2.toLowerCase().indexOf(str1.toLowerCase());
  return str2.substr(SearchStrPos, str1.length);
}
console.log(insensitiveSearch("Ошибается", text));

//     Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {
  str = str.split(" ");
  let NewStr = [];
  for (let i = 0; i < str.length; i++) {
    let word = str[i][0].toUpperCase() + str[i].slice(1);
    NewStr.push(word);
  }
  NewStr = NewStr.join("");
  return NewStr;
}
console.log(initCap(text));
//     Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {}
//     Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {}
//     Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
function endsWith(str, str1) {}
//     Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos) {}
//     Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb) {}
//     Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count(str, stringsearch) {}
//     Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str) {}
//     Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n) {}
//     Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str) {}
