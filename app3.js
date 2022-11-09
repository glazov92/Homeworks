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
let data ="Я ничего не понимаю в дизайне"

while (counter<=n) {
    console.log('');   // Иначе консоль просто ставит циферку перед строкой
    console.log(data);
    counter++
}

// Задание 6

let amount = 100;  // Количество автомобилей
let balance = 15; // Остаток автомобилей на N-й день

for (let n = 1; balance < `${amount=amount/2}`; n++) {
     
 }
 console.log(`${n+1}`); // Закостылил

// Задание 7




