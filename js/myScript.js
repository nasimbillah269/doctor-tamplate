$(document).ready(function(){
  
    /** Sticky Header js **/
  
    var header = $('.sticky-header');
    // var topheader = $('.top-header');
    //var middle = $('.main-header');
      var win = $(window);
      win.on('scroll', function() {
          var scroll = win.scrollTop();
          if (scroll < 150){
              header.removeClass('stick');
            //   topheader.removeClass('hidesection');
              //middle.removeClass('hidesection');
          } else {
              header.addClass('stick');
            //   topheader.addClass('hidesection');
              //middle.addClass('hidesection');
          }
      });
  
      /** Sticky Header js **/




    
      


    });

    function openNav() {
      document.getElementById("myNav").style.width = "100%";
      console.log("btn click")
    }
    
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }