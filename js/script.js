$(document).ready(function(){
    $('.slider').slick({
        speed:1000
    });
    setInterval(()=>{
        let item = document.querySelector('.slider__item.slick-active');
        let classlist=item.classList;
        if(classlist.contains('item_winter')){
            document.querySelector('body').style.backgroundColor="#D2D2D2";
        }
        else if(classlist.contains('item_spring')){
            document.querySelector('body').style.backgroundColor="#C9F4B9";
        }
        else if(classlist.contains('item_summer')){
            document.querySelector('body').style.backgroundColor="#C8FFEE";
        }
        else if(classlist.contains('item_autmn')){
            document.querySelector('body').style.backgroundColor="#D2BB7D";
        }
    },100);
})
