      // При загрузке страницы проверяем, нужно ли показать попап о куки
      document.addEventListener("DOMContentLoaded", function() {
        const cookiePopup = document.getElementById("cookiePopup");
        const acceptCookies = document.getElementById("acceptCookies");
        const closePopup = document.getElementById("closePopup");

        // Проверяем, есть ли куки о показе попапа
        const popupShown = getCookie("popupShown");
        if (!popupShown) {
            cookiePopup.classList.remove("d-none");
        }

        // Обработка нажатия кнопки "Принять"
        acceptCookies.addEventListener("click", function() {
            cookiePopup.classList.add("d-none");
            // Устанавливаем куки о показе попапа на сегодня
            setCookie("popupShown", "true", 1);
        });

        // Обработка нажатия кнопки "Закрыть"
        closePopup.addEventListener("click", function() {
            cookiePopup.classList.add("d-none");
        });
    });

    // Функция для установки куки
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Функция для получения значения куки по имени
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    
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