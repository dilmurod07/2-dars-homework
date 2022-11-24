let ticketIn$ = 350;
let livingIn$ = 680;
let tourInEuro = 230;

let $InSom = 11250;
let euroInSom = 12864;

let ticketInSom = ticketIn$ * $InSom;
let livingInSom$ = livingIn$ * $InSom;
let tourInSom = tourInEuro * euroInSom;

let totalInSom = ticketInSom + livingInSom$ + tourInSom;

//console.log(totalInSom);

let money = +prompt("mablagingizni kiriting");

if (money >= totalInSom) {
  console.log("yaxw dam olb kelin");
} else if (money < totalInSom) {
  let day = Math.floor(Math.random() * (30 - 3 + 1)) + 3;

  console.log(
    ` mablagingiz yetarli emas iltimos ${day} kundan keyin keling hayr salomat boling `
  );
} else {
  console.log("iltimos, son kirting !harflar mumkin emas!");
}
//console.log(totalInSom);
//min=> 3 max =>30
