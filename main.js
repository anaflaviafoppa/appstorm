/****************NAV*******/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "-19px";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
}