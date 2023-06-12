
$(function () {
    $('.order form .submit').click(function () {
        // убираем все отметки о неправильном заполнении от прошлой проверки, если они есть
        $('.is-invalid').removeClass('is-invalid');
        $('.invalid-feedback').remove();
        let form = document.forms.orderform; // сохраняем форму в переменную
        let valid = true; // поднимаем флаг валидности
        if (!form.name.value) { // если поле не заполнено
            $('form #name').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должно быть указано имя!</div>'); // пишем о неправильном заполнении
            valid = false; // сбрасываем флаг валидности
        }
        // остальные поля аналогично
        if (!form.addr.value) {
            $('form #addr').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан адрес!</div>');
            valid = false;
        }
        if (!form.phone.value.match(/^((\+7)|(8))?\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)) {
            $('form #phone').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан телефон!</div>');
            valid = false;
        }
        if (valid) {

            let data = { // собираем все данные для заказа
                name: form.name.value,
                phone: form.phone.value,
                mail: form.mail.value,
                addr: form.addr.value,
                comm: form.comm.value,
                date: form.date.value,
            };
            fetch('https://jsonplaceholder.typicode.com/posts', { // отправляем заказ
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(response => response.json()).then(json => { // получаем номер заказа в json.id
                /*  localStorage.removeItem('basket'); // очищаем корзину в localStorage*/
                getModalWindow('order'); // поднимаем модальное окно
                $('.modal').append('<p>Ваш заказ оформлен под номером ' + json.id + '.</p>'); // выводим номер заказа клиенту
                $('main.order').addClass('empty'); // очищаем корзину на странице
                form.reset(); // очищаем форму
            });
        }
    });
    function getModalWindow(idname) {
        $('body').append('<div class="screener"></div><div class="modal" id="' + idname + '"><button type="button" class="close">&times;</button></div>');
        $('.screener, .modal .close').on('click', dropModalWindow);
    }
    function dropModalWindow() {
        $('.screener, .modal').remove();
    }
});
