$( document ).ready(function() {
	$("select#payment_method").css("background-image",'url(images/'+$("select#payment_method").val()+'.png)');
	$("select#payment_method").change(function(){
		$("select#payment_method").css("background-image",'url(images/'+$("select#payment_method").val()+'.png)');
	});


	$("select#lang_choice").css("background-image",'url(images/'+$("select#lang_choice").val()+'.png)');
	$("select#lang_choice").change(function(){
		$("select#lang_choice").css("background-image",'url(images/'+$("select#lang_choice").val()+'.png)');
	});
});