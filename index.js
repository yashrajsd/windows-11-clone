$("#click-page").on("click",function(){
    $('#click-page').css("animation","blur 3s normal forwards");
    var a = 0;
    if(a == 0){
        $('#signin-page').css('display','block');
        $('.ii').css('display','none');
        $('.profile-pic').css('animation','blur 0.5s reverse forwards');
        a++;
    }
})
$('#sign-in-button').on('click',function(){
    $('#lala').slideUp();
})

$('#shadow-taskbar').on('mouseover',function(){
    $('#taskbar').slideToggle();
})

$('#this-pc').on('click',function(){
    $('#my-pc').toggle();
})
$('#my-pc-close-button').on('click',function(){
    $('#my-pc').toggle();
    $('#file-explorer-bar').hide();
})
$('#my-pc-minimize-button').on('click',function(){
    $('#my-pc').toggle();
    $('#file-explorer-bar').show();
})

$('#file-explorer-bar').on('click',function(){
    $('#my-pc').toggle();
})

$('#cmd-btn').on('click',function(){
    $('#command-prompt').slideToggle();
})

/* cmd js */

$('#cmd-input').on('keypress',function(event){
    if(event.key == 'Enter'){
        if($('#cmd-input').value == 'commands'){
            alert('worked');
        }
    }
})