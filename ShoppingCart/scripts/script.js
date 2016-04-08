$( document ).ready(function() {
  var $paymentMethod = $("select#payment_method");
  $paymentMethod.css("background-image",'url(images/'+$paymentMethod.val()+'.png)');
  $paymentMethod.change(function(){
    $(this).css("background-image",'url(images/'+$(this).val()+'.png)');
  });
});