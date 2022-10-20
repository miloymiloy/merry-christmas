function popUpClick(){
    popUp.style.display="none";
    left.style.display="inline";
    right.style.display="inline";
    footer.style.display="none";
}
var vid = document.getElementById("giftVid");
vid.autoplay = true;
vid.loop=true;
vid.load();

function claim(){
    var loopVid=document.getElementById("giftVid");
    loopVid.src="open.mp4";
    vid.load();
    loopVid.loop=false;
}

document.getElementById('giftVid').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        if(!e) { e = window.event; }
            left.style.display="none";
            right.style.display="none";
            popUpMess.style.display="none";
            popUpMess1.style.display="none";
            document.getElementById("main").style.backgroundImage="url(bgEnd.webp)";
            pipi.style.display="inline";
            endMess.style.display="inline";
            footer.style.display="inline";
            footer.style.color="white";
    }