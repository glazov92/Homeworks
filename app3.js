// Задание 1
let line1 = 62;
let line2 = 63;
let line3 = -100;

if (line1 < line2 && line2 > line3) {
  console.log(line2);
} else if (line1 > line3) {
  console.log(line1);
} else if (line3 > line1) {
  console.log(line3);
} else {
  console.log("Они равны");
}

// Задание 2
let temp = -20;

if (temp < -30) {
  console.log("Оставайтесь дома!");
} else if (temp <= -10) {
  console.log("Сегодня холодно");
} else if (temp <= 5) {
  console.log("Не холодно");
} else if (temp <= 15) {
  console.log("Тепло");
} else if (temp <= 25) {
  console.log("Очень тепло");
} else if (temp <= 35) {
  console.log("Очень тепло");
} else {
  console.log("Пекло");
}

// Задание 3
let userStatus = "admin"; // admin, user, guest
let infoAdmin = {
  Роль: "Администратор",
  ДР: "05.08.1990",
};
let infoUser = {
  Роль: "Пользователь",
  Браузер: "Google Chrome",
};
let infoGuest = {
  Роль: "Гость",
  Браузер: "FireFox",
};

switch (userStatus) {
  case "admin":
    console.log(infoAdmin);

    break;
  case "user":
    console.log(infoUser);

    break;
  case "guest":
    console.log(infoGuest);

    break;
}
// Задание 4

// Задание 5

let n = 2;
let counter = 1;
let data = "Я ничего не понимаю в дизайне";

while (counter <= n) {
  console.log(""); // Иначе консоль просто ставит циферку перед строкой
  console.log(data);
  counter++;
}

// Задание 6

let amount = 300; // Количество автомобилей
let balance = 15; // Остаток автомобилей на N-й день
let days = 1;

while (balance < amount) {
  amount = amount / 2;
  days = days + 1;
}

console.log(days);

// Задание 7
const year1 = 1800;
const year2 = 2020;
const searchYear = 1961;

if (searchYear < year1 || searchYear > year2) {
  // Тут бы какоето прерывание кода потом придумать
  console.log("Некорректный год");
}

let counterY = 0;
let y = (year1 + year2) / 2; // Помещаем в середину
y = Math.round(y); // Округляем
let yOld = 1; // Выделяем место

if (y > searchYear) {
  while (y > searchYear) {
    yOld = y; // Записываем старое Y пока не поменялось в последний раз
    y = (year1 + y) / 2;
    // console.log(y);
    y = Math.round(y); // Округляем внутри цикла
    counterY++;
  }
} else {
  while (y < searchYear) {
    yOld = y;
    y = (year2 + y) / 2;
    // console.log(y);
    y = Math.round(y); // Округляем внутри цикла
    counterY++;
  }
}

let yOld2 = yOld; // Вводим переменную куда будем записывать значения полученные после каждой итерации цикла

while (searchYear - y !== 1 && searchYear - y !== -1) {
  if (y > searchYear) {
    while (y > searchYear) {
      yOld = y; // Записываем старое Y пока не поменялось в последний раз
      y = (yOld2 + y) / 2;
      // console.log(yOld2);
      y = Math.round(y); // Округляем внутри цикла
      counterY++;
    }
  } else if (y < searchYear) {
    while (y < searchYear) {
      yOld = y;
      y = (yOld2 + y) / 2;
      // console.log(yOld2);
      y = Math.round(y); // Округляем внутри цикла
      counterY++;
    }
  } else {
    console.log(y);
    break;
  } // Вот тут надо бы прерывать но  чет идет вниз
  yOld2 = yOld;
  counterY++;
}

if (y > searchYear) {
  y = y - 1;
} else {
  y = y + 1;
}

console.log(y + " - год первого полета человека в космос");
console.log(counterY + " Итераций");

let Years = year1;
let counterV = 0;
let vYears = 1; // Если начинаем с високосного
while (Years <= year2) {
  Years++;
  counterV++;
  if (counterV % 4 === 0) {
    vYears++;
  }
}

console.log(vYears + " високосных лет");
console.log(counterV + " итераций");
