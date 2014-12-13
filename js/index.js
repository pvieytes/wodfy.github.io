
var speed = 1000;

var startup  = $("#startup").offset();
var startup2  = $("#startup2").offset();


function scrollTo(id){
	if (id == 'startup')
	{
	$("html, body").animate({ scrollTop: startup.top} , speed) ;	
	};
};


function checkForm(){
	$('#suscribeModal').modal('show');

	if (validateEmail($('#mce-EMAIL').val();) == true){

	} else {

	};
};


function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}​