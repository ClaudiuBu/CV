$(".container-fluid-image").hover(
    function() {
      $( this ).addClass( "shadow-gallery" );
    }, function() {
      $( this ).removeClass( "shadow-gallery" );
    }
  );

  $(".button-projects").hover(
    function(){
      $(this).addClass("");
    }, function(){
      $(this).removeClass("");
    }
  )
function  gotoGit(){
  location.href='https://github.com/ClaudiuBu';
}