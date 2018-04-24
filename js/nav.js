
//Accordian Action
var action = 'click';
var speed = "500";


    $('li.question').on(action, function() {
        $(this).next().slideToggle(speed)
            .siblings('li.aanswer').slideUp();
    });
