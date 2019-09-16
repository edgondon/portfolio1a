
$(document).ready(function () {

    console.log('ready');
    $('.about').hide();
    $('.portfolio').hide();
    $('.skills').hide();


    function aboutMe() {
        $('.triange').click(function () { 
            $('.about').show();

        });
    };

    function portfoo() {
        $('.circle').click(function () { 
            $('.portfolio').show();

        });
    };

    function skills() {
        $('.rectangle').click(function () { 
            $('.skills').show();

        });
    };












    function makePage() {
        aboutMe();
        portfoo();
        skills();
    }

    $(makePage);






})