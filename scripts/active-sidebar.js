

$(document).ready(function () {
    var deviceWidth= parseInt(window.innerWidth);
    console.log(deviceWidth);
    if(deviceWidth >=1200){
        $(document).on("scroll", onScroll);
    }
    else return;
   
    
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#side-bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#side-bar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    $('#side-bar li').each(function(){
        var currLI =$(this);
        var refElLI = $(currLI.attr("href"));
        if (refElLI.position().top <= scrollPos && refElLI.position().top + refElLI.height() > scrollPos) {
            $('#side-bar ul li').removeClass("li-active");
            currLI.addClass("li-active");
            
        }
        else{
            currLI.removeClass("li-active");
        }
    })
}