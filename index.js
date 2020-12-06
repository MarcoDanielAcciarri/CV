$(document).ready(function(){

    // Efecto Rebote
    $("nav a").on('click', function(){
        var target = $(this).attr('href');
        $(target).animate({paddingTop: '8rem'},1000);
    });
    // Fin Efecto Rebote

    $('.toggle-menu').on('click', function(){
        //$('#small-menu').toggleClass('mostrar');
        myFunction();
    })

    function myFunction() {
        var x = document.getElementById("small-menu");
        if (x.style.display == "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    $("#congresos li").on('click', function(){
      var mensaje =  $(this).attr('title');
      alert(mensaje);
    })
   
})

