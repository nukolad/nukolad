// Проверяем, что приложение запущено в Telegram
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user; // Данные пользователя
console.log("ID пользователя:", user?.id);
console.log("Имя:", user?.first_name);
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Разворачиваем на весь экран
    tg.expand();

    // Получаем данные пользователя
    const user = tg.initDataUnsafe.user;
    console.log("Пользователь:", user);

    // Кнопка для отправки данных в бота
    document.getElementById("sendDataBtn").addEventListener("click", () => {
        tg.sendData("Данные от Mini App!"); // Отправляем данные в бота
        tg.close(); // Закрываем приложение
    });
} else {
    console.log("Это не Telegram!");
    // Для теста в браузере
    document.getElementById("sendDataBtn").addEventListener("click", () => {
        alert("В Telegram эта кнопка отправит данные боту!");
    });
}
