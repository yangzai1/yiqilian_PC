
window.onload=function(){
 
    $('.Masking').bind('click', function(){
        var id = $(this).attr('data-mp4');

        location.href = '/video/index.shtml?id=' + id;
    });


};