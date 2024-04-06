
const content = document.querySelector(".popup-content");
const tab = document.querySelector(".popup");

$(document).on("click", function (event) {
    if (tab == event.target) { 
        $('.popup-box').addClass('isShown');
    }

    //если клик не по тригеру и не по контенту, то закрываем
    if ( content !== event.target && tab !== event.target && $(event.target).closest(content).length == 0) { 
        $('.popup-box').removeClass('isShown');
    }
});

