
var speed = 1000;

var startup  = $("#startup").offset();
var startup2  = $("#startup2").offset();


function scrollTo(id){
	if (id == 'startup')
	{
	$("html, body").animate({ scrollTop: startup.top} , speed) ;	
	};
};