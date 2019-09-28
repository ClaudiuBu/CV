

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#side-bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#side-bar ul li a').removeClass("active");
            currLink.addClass("active");
            //  $('#side-bar li')[n].addClass("active");
        }
        else{
            currLink.removeClass("active");
            //  $('#side-bar li')[n].removeClass("active");
        }
    });
}