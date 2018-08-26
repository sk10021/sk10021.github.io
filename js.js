function getPos(){
    return $(window).scrollTop();
}

function setPos(offset){
    $(window).scrollTop(offset);
}

function checkTop(pos){
    if (getPos() <= 0){
        setPos(1);
    }
}

var windowHeight = $(window).height();
var scrollerHeight = $('#scroller').height();   
$('#scroller').height(scrollerHeight + windowHeight);

var intervalHeight = 150;


function scrollUpdate(){
    scrollPos = getPos();
    checkTop(scrollPos);
     //console.log("scroll position = " + scrollPos);
     //console.log("window height = " + $(window).height());

    //if @ bottom scroll to top -1px
    if(scrollPos  >= scrollerHeight){        
        setPos(1);
    }
    //if @ top scroll to bottom..
    else if(scrollPos <= 0){
        setPos(scrollerHeight-1);
    }
}
document.addEventListener('DOMContentLoaded',
function() {
    console.log('loaded!');
    
    var imageArray = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg","img/image6.jpg","img/image7.jpg","img/image8.jpg"];

    $(window).on('scroll', function() {
        
        scrollPosition = getPos();

        if (scrollPosition < intervalHeight) {        
            $(".spinner img").attr("src", "img/image1.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight && scrollPosition < intervalHeight*2) {
            $(".spinner img").attr("src", "img/image2.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*2 && scrollPosition < intervalHeight*3) {
            $(".spinner img").attr("src","img/image3.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*3 && scrollPosition < intervalHeight*4) {
            $(".spinner img").attr("src","img/image4.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*4 && scrollPosition < intervalHeight*5) {
            $(".spinner img").attr("src","img/image5.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*5 && scrollPosition < intervalHeight*6) {
            $(".spinner img").attr("src","img/image6.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*6 && scrollPosition < intervalHeight*7) {
            $(".spinner img").attr("src","img/image7.jpg");
            console.log(scrollPosition);
        }
        else if (scrollPosition >= intervalHeight*7 && scrollPosition < intervalHeight*8) {
            $(".spinner img").attr("src","img/image8.jpg");
            console.log(scrollPosition);
        }

        scrollUpdate();
    });

    $('#email').keypress(function(evt){        
        if(evt.keyCode == 13){
            alert("Thank You!");
            evt.preventDefault();
        }
     });
    
})