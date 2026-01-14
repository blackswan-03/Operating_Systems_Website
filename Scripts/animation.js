 $(document).ready(function() {
    $("#animate1").click(function() {
        $("#animation").css("background-image","url('SiteStyle/penguin.png')");
        $("#animation").animate({
            top: '240px',
            left: '195px',
            width: '165px',
            height: '214px',
            opacity: '1.0'
        },0);
        $("#animation").animate({left:'505px'},1000);
        $("#animation").animate({top:'510px'},2000);
        $("#animation").animate({left:'195px'},1000);
        $("#animation").animate({top:'240px'},2000);
        $("#animation").animate({
            height:'400px',
            width:'400px',
            opacity:'0.0'
        },4000);
    });  

    $("#animate2").click(function() {

        $("#animation").css("background-image","url('SiteStyle/apple.png')");
        /* $("#animation").css("border","2px solid blue"); */
        
        $("#animation").animate({
            top: '240px',
            left: '195px',
            width: '165px',
            height: '164px',
            opacity: '1.0'
        },0);
        $("#animation").animate({
            top: '240px',
            left: '505px',
            width: '+=30px',
            height: '+=30px',
            /* borderWidth: '5px' */
        },2000);
        $("#animation").animate({
            top: '510px',
            left: '195px',
            width: '+=30px',
            height: '+=30px',
            /* borderWidth: '15px' */
        },2000);
        $("#animation").animate({
            top: '510px',
            left: '505px',
            width: '-=30px',
            height: '-=30px',
            /* borderWidth: '30px' */
        },2000);
        $("#animation").animate ({
            top: '240px',
            left: '195px',
            width: '-=30px',
            height: '-=30px',
            /* borderWidth: '45px' */
        },2000);
        $("#animation").animate({
            height:'0px',
            width:'0px',
            opacity:'0.0'
        },4000);
    });  
 });
