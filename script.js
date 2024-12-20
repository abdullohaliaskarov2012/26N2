let userName = prompt("Введите своё имя:");

let letter = prompt("Введите букву, которую хотите найти:");

if (userName.includes(letter)) {
    alert(`В вашем имени "${userName}" есть буква ${letter}.`);
} else {
    alert(`В вашем имени "${userName}" нет буквы ${letter}.`);
}
