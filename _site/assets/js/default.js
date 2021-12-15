window.onload = function(){

    top_menu.addEventListener('mouseover', function(event){
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;

        top_menu_mouseover(top_menu_table.getBoundingClientRect().height);
    });

    top_menu.addEventListener('mouseout', function(event){
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;

        top_menu_mouseout();
    });
}

function top_menu_mouseover(height){
    top_menu.style.height               = height+'px';
    top_menu.style.backgroundColor      = '#fcfcfc';
    top_menu.style.boxShadow            = '0px 0px 5px #e3e3e3 ';
}

function top_menu_mouseout(){
    top_menu.style.height               = '50px';
    top_menu.style.backgroundColor      = '#fff';
    top_menu.style.boxShadow            = 'none';
}