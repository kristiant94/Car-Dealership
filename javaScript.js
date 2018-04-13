function dropDown() {
    var x = document.getElementById("thisNav");
    if (x.className === "navigationBar") {
        x.className += " responsive";
    } else {
        x.className = "navigationBar";
    }
}

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});


$(document).ready(function () {
    $('#master-button').click(function () {
        $('.container-wrapper').toggle("slide");
    });
});

//Modal Javascript
var modalBtns = [...document.querySelectorAll(".newcar-button")];
modalBtns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
    }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.closest('.modal');
        modal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}
