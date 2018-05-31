$(document).ready(function(){

    $(".addCartFrm").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();


        var temp=$(this).find('input[type="hidden"]').val();
        //console.log(temp);

        $.ajax({
            type: "post",
            url: '/add-to-cart/'+temp
        });
    });
    $(".addCartFrmQty").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();


        var productID=$(this).find('input[name="productIDToAdd"]').val();
        var qty=$(this).find('input[id="input-quantity"]').val();
        //console.log(temp);

        $.ajax({
            type: "post",
            url: '/add-to-cart/'+productID+'/'+qty
        });
    });
	/* ---- Animations ---- */

    $('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);

	/* Input Form Animation */
	$('.input-box').focus(function(){
		$(this).closest('.input-field').addClass('focus');
	});
	
	$('.input-box').blur(function(){
		if ($(this).val() === ''){
			$(this).closest('.input-field').removeClass('focus');
		}
	});
	 
	$('#link-change-info').click(function(){
		$(this).closest('.input-form').find('.info-box').removeAttr('disabled');
		$(this).closest('.input-form').find('.btn-submit').css({'display':'block'});
		$(this).css({'display':'none'});
	})

});