function processText() {
    // 1. Получаем значение из текстового поля
    const inputText = document.getElementById('inputText').value;

    // 2. Проверяем, не пустое ли оно
    if (inputText.trim() === '') {
        alert('Пожалуйста, введите текст!');
        return;
    }

    // 3. Обрабатываем текст (в данном случае - переворачиваем)
    const processedText = inputText.split('').reverse().join('');

    // 4. Находим блок для вывода и помещаем туда результат
    const outputElement = document.getElementById('output');
    outputElement.textContent = processedText;
}
