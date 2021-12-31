window.onload = function(){
    // 현재 스크롤 값
    let current_scroll_value = document.documentElement.scrollTop;
    let two_depth = document.getElementsByClassName('two_depth');
    let select = document.getElementById('select');

    if(select != null)select.parentNode.classList.remove('depth_hide');

    if(current_scroll_value > 200){
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

        top_menu_mouseout(current_scroll_value);
    });

    document.addEventListener('scroll', function(event) {
        if (event.preventDefault) event.preventDefault();
        else event.cancelBubble = true;
        current_scroll_value = document.documentElement.scrollTop;

        top_menu_fixed(current_scroll_value);
    });

    for(i=0; i < two_depth.length; i++){
        two_depth[i].addEventListener('click', function(event) {
            if (event.preventDefault) event.preventDefault();
            else event.cancelBubble = true;
            
            left_menu_click(this);
        });
    }    
}

function top_menu_mouseover(height){
    top_menu.style.height               = height+'px';
    top_menu.style.backgroundColor      = '#fcfcfc';
    top_menu.style.boxShadow            = '0px 0px 5px #e3e3e3 ';
    top_menu.style.padding              = '20px 20px';
    top_menu.style.marginLeft           = '380px';
}

function top_menu_mouseout(scrollVal){
    if(scrollVal <= 200){
        top_menu.style.backgroundColor  = '#fff';
        top_menu.style.boxShadow        = 'none';
    }
    top_menu.style.height               = '51.5px';
    top_menu.style.padding              = '0px';
    top_menu.style.marginLeft           = '400px';
    
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

function left_menu_click(depth_var){
    depth_child = depth_var.nextSibling.nextSibling.children;
    depth = depth_var.nextSibling.nextSibling;
    hide = true;


    if(depth_child.length == 0)return false;

    for(i=0; i<depth.classList.length; i++){
        if(depth.classList[i] == 'depth_hide')hide = false;
    }

    if(hide) {
        depth.classList.add('depth_hide');
    } else {
        depth.classList.remove('depth_hide');
    }
}
