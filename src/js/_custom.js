// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  // Display legal text 
  $('a.legal-more').click(function(event){
      event.preventDefault();
      event.stopPropagation();  
      $('#legal').toggle('slow');  
  });
  
  // Bind to the click of all links with a #hash in the href
  $('a[href^="#"]').click(function(event) {
    // Prevent the jump and the #hash from appearing on the address bar
    event.preventDefault();
    event.stopPropagation(); 
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
  });

  // Gets the video src from the data-src on each button
  var $videoSrc = 'https://www.youtube.com/embed/N2uZ_1Kgrx4';  
  $('a.video').click(function(event) {
      event.preventDefault();
      // event.stopPropagation(); 
      $videoSrc = $(this).data( "src" );
  });
        
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  });
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  }); 

  // Ecoproyectores animation
  var switchBg = function (object, id, duration) {
      $(object).css("background-image","url('../images/projectors/casio-" + id + ".png')");
      $(object).fadeIn(duration);
      $(object).attr("data-videoid", id);
  }

  var nextBg = function (object, duration, top) {
      var id = $(object).attr("data-videoid");
      id = parseInt(id) + 1;
      if (id > top) id = 1;
      $(object).css("background-image","url('../images/projectors/casio-" + id + ".png')");
      $(object).attr("data-videoid", id);
      $(object).fadeIn(duration);
  }

  setInterval(function() {
    // method to be executed;
    $(".ecoproyeccion-bg").fadeOut(1000,
      function() {
       // switchBg(this, 2, 1500);
       nextBg(this, 1000, 5);
      }  
    );
  }, 5000);

})();

// Start wow
new WOW().init();

