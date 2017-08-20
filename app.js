/**
 * Created by lenovo on 2017/8/20.
 */
function controlLight() {
    var isOpen=true;
    document.querySelector(".lightOff").onclick=function () {

        document.querySelector(".index-fourth-out").style.display="none";
        document.querySelector(".index-fourth-in").style.display="block";
    };
    document.querySelector(".music").onclick=function () {
        isOpen=!isOpen;
        if(isOpen===true){
           document.querySelector(".musicImg").src="cmbChina%20demo/images/musicBtnOff.png";
           document.querySelector(".audio").pause();
        }else {
            document.querySelector(".musicImg").src="cmbChina%20demo/images/musicBtn.png";
            document.querySelector(".audio").play();
        }
    }
}
controlLight();