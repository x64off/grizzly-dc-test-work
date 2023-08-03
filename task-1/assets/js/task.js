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