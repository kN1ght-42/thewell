$(function() {
    let button = $(".button-footer");

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 100
        });
    });

    $(button).on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        });
    });
});