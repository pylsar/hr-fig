$(document).ready(function () {
	$('.review__items').slick({
		infinite: true,
		autoplay: true,
		speed: 1000,
		pauseOnHover: true,
		prevArrow: `<button id="prev" type="button" class="slickArrow slickArrowLeft"><svg style="display: block" viewBox="0 0 15.3 29" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
		<style type="text/css"> #rec175812586 .t-slds__arrow_wrapper polyline {
		-webkit-transition: stroke ease-in-out .2s;
		-moz-transition: stroke ease-in-out .2s;
		-o-transition: stroke ease-in-out .2s;
		transition: stroke ease-in-out .2s;
		}
		#rec175812586 .t-slds__arrow_wrapper:hover polyline {
		stroke: #282a2c !important; }
		</style> 
		<desc>Left</desc> <polyline fill="none" stroke="#ff3305" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 14.5,14.5 0.5,28.5"></polyline> </svg></button>`,
		nextArrow: `<button id="prev" type="button" class="slickArrow slickArrowRight"><svg style="display: block" viewBox="0 0 15.3 29" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
		<style type="text/css"> #rec175812586 .t-slds__arrow_wrapper polyline {
		-webkit-transition: stroke ease-in-out .2s;
		-moz-transition: stroke ease-in-out .2s;
		-o-transition: stroke ease-in-out .2s;
		transition: stroke ease-in-out .2s;
		}
		#rec175812586 .t-slds__arrow_wrapper:hover polyline {
		stroke: #282a2c !important; }
		</style> 
		<desc>Left</desc> <polyline fill="none" stroke="#ff3305" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 14.5,14.5 0.5,28.5"></polyline> </svg></button>`
	});
});


// прячем отображаем контент вопросов
let questions = document.querySelectorAll(".questions__card-head");
$(questions).each(function () {
	$(this).on("click", function () {
		$(questions).not(this).next().hide(); // прячем контент
		$(questions).not(this).find(".questions__card-img").removeClass('rotateArrow'); // переворачиваем иконки у всех кроме нажатого
		$(this).next().slideToggle(300);    // показываем контент на который нажали
		$(this).find(".questions__card-img").toggleClass('rotateArrow'); //переворачиваем иконку у нажатого
	});
});



const selection = $('.selection');
const offset = selection.offset();

$(window).scroll(function () {
	if ($(this).scrollTop() > offset.top) {
		$('.menu-fix').addClass('isFixed');
	} else {
		$('.menu-fix').removeClass('isFixed');
	}
});



// function scrollMenu(){
//     if ( $(window).width() <= 960 ){
//         $('.menu-fix').removeClass('isFixed');
//     } else {
// 		$(window).scroll(function () {
// 			if ($(this).scrollTop() > offset.top) {
// 				$('.menu-fix').addClass('isFixed');
// 			} else {
// 				$('.menu-fix').removeClass('isFixed');
// 			}
// 		});
//     }
// }

// $(window).on("load resize",function(){
//     scrollMenu()
// });

// scrollMenu()







function calc() {
	$('.calcId').on('input', function (e) {
		let num = $('.calcId').val();
		let onePerc = (+num / 100) * 12;
		let sum = onePerc * 14

		let total = Math.round(sum * 10) / 10;
		$('.totalId').text(total);
	})
}
calc();

function calcPopup() {
	calcPopup

	$('.calcPopup').on('input', function (e) {
		let num = $('.calcPopup').val();
		let onePerc = (+num / 100) * 12;
		let sum = onePerc * 14

		let total = Math.round(sum * 10) / 10;
		$('.totalPopup').text(total);
	})
}
calcPopup();




$('.burger').on('click', function () {
	$('.menu-fix').toggleClass('isOpen');
	$(this).toggleClass('isShown');
})