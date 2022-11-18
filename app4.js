// Задание 1
let n = 2;

function mathThis(number, degree = 1) {
  console.log(`${Math.pow(number, degree)}`);
}

mathThis(n, 3);
mathThis(n);

//  Задание 2

const vowel = ["у", "е", "ы", "а", "о"];
const consonant = ["ц", "к", "н", "г", "ш"];
let letter = "ы";

const ru = (lett) => {
  if (vowel.includes(lett)) {
    console.log("Глассная");
  } else {
    console.log("Согласная");
  }
};
ru(letter);

// Задание 3 нашел в инете, понравилась краткость и идея такой "пересборки" слова.
// если поставить к проверяемому tword сплит то можно обойтись без джоин, не уменьшит код но будет понятнее
// оставлю пока так, потом вернусь если придумаю свой вариант

let pal = "12321";

const checkPal = (tword) => {
  if (tword == tword.split("").reverse().join("")) {
    console.log("Это палиндром");
  } else {
    console.log("Это не палиндром");
  }
};
checkPal(pal);

// Задание 4-14
let a = 3;
let b = 2;
let c = 2;
function func1(x) {
  x = Math.pow(x, 2);
  console.log(x);
}
func1(a);

function func2(x, y) {
  let f = x + y;
  console.log(f);
}
func2(a, b);

function func3(x, y, z) {
  let f = (x - y) / z;
  console.log(f);
}

func3(a, b, c);

function func4(x) {
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  if (x < 1 && x > 7) {
    console.log("Введите корректное число");
  }
  x = x - 1;
  console.log(days[x]);
}

func4(a);

function func5(x, y) {
  if (x == y) {
    return true;
  } else {
    return false;
  }
}

console.log(func5(a, b));

function func6(x, y) {
  if (x + y > 10) {
    return true;
  } else {
    return false;
  }
}

console.log(func6(a, b));

function isNumberInRange(x) {
  if (x > 0 && x < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(a));

let arrNumber = [1, 34, 8, 132];

function arr(x) {
  // Как то корявенько через 2 цикла но вроде получилось) Не знаю как записывать в массив, записал в строку и сделал массивом
  let f = "0";
  let i = 0;
  while (i < x.length) {
    if (isNumberInRange(x[i]) == true) {
      f = `${x[i]}`;
    }
    i++;
    break;
  }
  while (i < x.length) {
    if (isNumberInRange(x[i]) == true) {
      f = f + `${x[i]}`;
    }
    i++;
  }
  console.log(f.split(""));
}
arr(arrNumber);

let r = 54;
function getDigitsSum(x) {
  let s = 0;
  x = x.toString().split("");
  for (let i = 0; i < x.length; i++) {
    s = s + Number(x[i]);
  }
  console.log(s);
}
getDigitsSum(r);
