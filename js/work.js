
window.onload=function(){
 
/*头像*/
    ;(function(){
        // var oTouxiang=document.getElementById('touxiang');
        // var oTouxiangUl=document.getElementById('touxiangUl');
        var oLogoleft=document.getElementById('Artculodetecho');
        var oUl=oLogoleft.getElementsByTagName('ul');
        var oT = oLogoleft.offsetTop;
        // var oGuoqi=document.getElementById('guoqi');
        // var oGq=oGuoqi.getElementsByTagName('ul');
        // oTouxiang.addEventListener('click',function(){
        //     if (oTouxiangUl.style.display=='none') {
        //         oTouxiangUl.style.display='';
        //     }else{
        //         oTouxiangUl.style.display='none';
        //     }
        // },false);
        
        // oGuoqi.addEventListener('click',function(){alert(oGq);
        //     if (oGq.style.display=='none') {
        //         oGq.style.display='';
        //     }else{
        //         oGq.style.display='none';
        //     }
       
        // },false);
            
       

        window.onscroll = function(){
            var sT = document.documentElement.scrollTop||document.body.scrollTop;
            if(oT<sT){
                oLogoleft.style.position = 'fixed';

                
            }else{
                oLogoleft.style.position = '';
                
            }
        };

    })();


};