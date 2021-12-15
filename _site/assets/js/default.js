window.onload = function(){
    // 현재 스크롤 값
    let currentScrollValue = document.documentElement.scrollTop;

    if(currentScrollValue > 200){
        top_menu.style.position         = 'fixed';
        top_menu.style.top              = '0px';
        top_menu.style.backgroundColor  = '#fcfcfc';
        top_menu.style.boxShadow        = '0px 0px 5px #e3e3e3 ';
    }

    top_menu.addEventListener('mouseover', function(event){
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;

        top_menu_mouseover(top_menu_table.getBoundingClientRect().height);
    });

    top_menu.addEventListener('mouseout', function(event){
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;

        top_menu_mouseout(currentScrollValue);
    });

    document.addEventListener('scroll', function(event) {
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;
        currentScrollValue = document.documentElement.scrollTop;

        top_menu_fixed(currentScrollValue);
    });
}

function top_menu_mouseover(height){
    top_menu.style.height               = height+'px';
    top_menu.style.backgroundColor      = '#fcfcfc';
    top_menu.style.boxShadow            = '0px 0px 5px #e3e3e3 ';
}

function top_menu_mouseout(scrollVal){
    if(scrollVal <= 200){
        top_menu.style.backgroundColor  = '#fff';
        top_menu.style.boxShadow        = 'none';
    }
    top_menu.style.height               = '50px';
    
}

function top_menu_fixed(scrollVal){
    if(scrollVal > 200){
        top_menu.style.position         = 'fixed';
        top_menu.style.top              = '0px';
        top_menu.style.backgroundColor  = '#fcfcfc';
        top_menu.style.boxShadow        = '0px 0px 5px #e3e3e3 ';
    } else {
        top_menu.style.position         = 'relative';
        top_menu.style.backgroundColor  = '#fff';
        top_menu.style.boxShadow        = 'none';
    }
}

