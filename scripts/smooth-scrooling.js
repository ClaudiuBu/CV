//Smooth scrooling 
$( '.page-bar a' ).on( 'click', function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '600' );
    e.preventDefault();
  
  });

$( '.icon-header-container a' ).on( 'click', function(e){
	
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '600' );
    e.preventDefault();
  
  });