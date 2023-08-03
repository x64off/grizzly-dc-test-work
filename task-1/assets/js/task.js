
$('.phone').each(function () {
    var phoneNumber = $(this).find('#phoneNumber').text();
    console.log(phoneNumber);
    var phone = this;
    $.ajax({
        type: "POST",
        url: "index.php", 
        data: {phoneNumber: phoneNumber},
        success: function(response) {
            $(phone).find('#country').text(response);
        }
    });
    
});

    document.getElementById("phoneNumberForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const phoneNumber = document.getElementById("phoneNumber").value;

        // Отправляем номер телефона на сервер через AJAX
        $.ajax({
            type: "POST",
            url: "index.php", // Укажите здесь путь к вашему PHP-скрипту
            data: {phoneNumber: phoneNumber},
            success: function(response) {
                // Отображаем результат на странице
                showToast('Страна: '+response); 
            }
        });
    });