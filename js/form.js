$('#form__btn').on('click', function (e) {
	e.preventDefault();
	$.ajax({
		url: '/assets/php/email.php', //url страницы (action_ajax_form.php)
		type: "POST", //метод отправки
		dataType: "JSON", //формат данных
		data: $(e.target).parents('.phone_ajax').serialize(),  // Сеарилизуем объект
		success: function (response) { //Данные отправлены успешно
			// console.log(response);
			if (response.status == 'Success') {
				$(e.target).parents('.request').find('.result').addClass('active')

				$('#partners-notify__box').html('<div id="partners-notify"> <svg class="partners-notify-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg><span>заявка успешно отправлена</span></div>');
				document.querySelector('#form-partners').reset();
				setTimeout(() => {
					$('#partners-notify').remove();
				}, 3000);

			}
			if (response.status == 'Error' && response.el == 'captcha') {
				$('.invalid-feedback').text(response.from);
			}
		},
		error: function (response) { // Данные не отправлены
			$(e.target).parents('.request').find('.danger').css('visibility', 'visible');
			$('#partners-notify').html('<div id="partners-notify"> <svg class="partners-notify-error" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#CC0000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg><span>Ошибка заполнения формы</span></div>');
			setTimeout(() => {
				$('#partners-notify').remove();
			}, 3000);
		}
	});
})




function phoneMask() {
	let inp = document.querySelectorAll('.input-callback');

	inp.forEach(element => {
		const maskOptions = {
			mask: '+7 (000) 000-00-00',
			lazy: false
		}
		let mask = new IMask(element, maskOptions);
	});

}
phoneMask();