
$(document).ready(function () {

    console.log('ready');
    $('.about').hide();
    $('.portfolio').hide();
    $('.skills').hide();
    $('.return').hide();


    function aboutMe() {
        $('.triange').click(function () { 
            $('.about').show();
            $('.return').show();
            $('.fullpage').hide();

        });
    };

    function portfoo() {
        $('.circle').click(function () { 
            $('.portfolio').show();
            $('.return').show();
            $('.fullpage').hide();

        });
    };

    function skills() {
        $('.rectangle').click(function () { 
            $('.skills').show();
            $('.return').show();
            $('.fullpage').hide();

        });
    };

    function reset() {
        $('.ret').click(function () { 
            $('.about').hide();
            $('.portfolio').hide();
            $('.skills').hide();
            $('.return').hide();
            $('.fullpage').show();


        });
    };










    function makePage() {
        aboutMe();
        portfoo();
        skills();
        reset();
    }

    $(makePage);






})