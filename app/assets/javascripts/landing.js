$(function() {
	$("#return_user > a.button").click(function() {
		$(this).fadeOut(300);
		$("#new_user a").fadeOut(300);
		$("#return_user form").delay(300).fadeIn(300);
		return false;
	});
	$("#new_user > a.button").click(function() {
		$(this).fadeOut(300);
		$("#return_user a").fadeOut(300);
		$("#new_user form").delay(300).fadeIn(300);
		return false;
	});
	$("form a.back_button").click(function() {
		$("form").fadeOut(300);
		$("#return_user a, #new_user a").delay(600).fadeIn(300);
		return false;
	});
	$("#submit_new").click(function(){ 
		var nameVal = $("#name_new").val();
		if(nameVal == ''){
			$("#name_new").animate({
				borderColor:"#ff0000"
			}, 150);
			return false;
		}
		else{
			$("#name_new").css( "border-color", "#ccc" );
		}

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailaddressVal = $("#email_new").val();
		if(emailaddressVal == ''){
			$("#email_new").animate({
				borderColor:"#ff0000"
			}, 150);
			return false;
		}
		else if(!emailReg.test(emailaddressVal)){
			$("#email_new").animate({
				borderColor:"#ff0000"
			}, 150);
			return false;
		}
		else{
			$("#name_new").css( "border-color", "#ccc" );
		}
		return true;
	});
	$("#submit_return").click(function(){ 
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailaddressVal = $("#email_return").val();
		if(emailaddressVal == ''){
			$("#email_return").animate({
				borderColor:"#ff0000"
			}, 150);
			return false;
		}
		else if(!emailReg.test(emailaddressVal)){
			$("#email_return").animate({
				borderColor:"#ff0000"
			}, 150);
			return false;
		}
		else{
			$("#name_new").css( "border-color", "#ccc" );
		}
		return true;
	});
});