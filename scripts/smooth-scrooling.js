//Smooth scrolling for desktop
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

  // Smooth scrolling for mobile
  $( '.nav-item a' ).on( 'click', function(e){
      var href = $(this).attr( 'href' );
      $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top
      }, '600' );
      e.preventDefault();
    
    });
    $( 'a.navbar-brand-animation' ).on( 'click', function(e){
      var href = $(this).attr( 'href' );
      $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top
      }, '600' );
      e.preventDefault();
    
    });

