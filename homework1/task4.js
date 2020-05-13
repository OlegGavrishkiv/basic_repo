let pass = "pass123";
let n = prompt("Введіть пароль : ");
let admin = "admin";

if (pass == n){
    alert("Ви авторизовані успішно");
} if (admin == n){
    alert("Ви увійшли як адмін");
} if (n !== pass && n !== admin) {
    alert("Пароль невірний");
}