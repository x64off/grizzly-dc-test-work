<?php
// Обработка AJAX-запроса от клиента
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['phoneNumber'])) {
    $phoneNumber = $_POST['phoneNumber'];
    $country = getCountryByPhoneNumber($phoneNumber);
    echo $country;
    exit; // Завершаем выполнение PHP скрипта после отправки ответа
}

// Функция для определения страны по номеру телефона
function getCountryByPhoneNumber($phoneNumber)
{
    // Загрузим данные с кодами стран из JSON-файла
    $phoneCodesJson = file_get_contents('https://cdn.jsdelivr.net/gh/andr-04/inputmask-multi@master/data/phone-codes.json');
    $phoneCodes = json_decode($phoneCodesJson, true);

    $phoneNumber = preg_replace('/\D/', '', $phoneNumber); // Убираем все нецифровые символы из номера

    foreach ($phoneCodes as $countryData) {
        $pattern = str_replace('#', '\d', $countryData['mask']); // Заменяем # на \d (обозначение цифр)
        $pattern = str_replace(['-', '+'], '', $pattern); // Удаляем все символы "-" и "+"
        if (preg_match('/^' . $pattern . '$/', $phoneNumber)) {
            return $countryData['name_ru'];
        }
    }

    return 'Неизвестная страна'; // Если код страны не найден, вернем "Неизвестная страна"
}

include_once 'templates/index.html';
?>
