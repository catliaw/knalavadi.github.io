
// todays date 
    // var currentDate = new Date()
    // var day = currentDate.getDate()
    // var month = currentDate.getMonth() + 1
    // var year = currentDate.getFullYear()
    // document.write("<b>" + month + "/" + day + "/" + year + "</b>")
    // currentDate.appendChild('footer');



// social hover over magnify 
	function bigIMG(x){
		x.style.height = "35px";
		x.style.width ="35px";
}
	function normalIMG(x){
		x.style.height = "25px";
		x.style.width = "25px";
	}	


// header scroll down disappear 
$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up"); 
        $(".navbarnavbar-default").show();
    } else {
        $(".sidebar em").text("Down");
        $(".navbarnavbar-default").hide();
    }
    this.previousTop = currentTop;
});


// slow video speed 
var vid = document.getElementById("Video");
vid.playbackRate = .5;

$(document).ready(main);
