
//Drop down menu ref W3Schools
function dropDown() {
    var x = document.getElementById("thisNav");
    if (x.className === "navigationBar") {
        x.className += " responsive";
    } else {
        x.className = "navigationBar";
    }
}

//Slow Scroll function
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//Button toggle for car info @ bottom
$(document).ready(function() {
    $('#master-button').click(function() {
            $('.container-wrapper').toggle("slide");
    });
});

