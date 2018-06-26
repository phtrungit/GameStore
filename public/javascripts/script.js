
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
    $(".addComment").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        //console.log(temp);
        var name=$(this).find('input[name="name"]').val();
        var content=$(this).find('textarea[name="content"]').val();
        var id_product=$(this).find('input[name="id_product"]').val();
        $.ajax({
            type: "post",
            url: '/comment/'+name+'/'+content+'/'+id_product
        });
        ajaxGet(id_product);
    });
    function ajaxGet(id_product){
        $.ajax({
            type : "GET",
            url : "/fetchProduct/"+id_product,
            success: function(result){
                console.log(result);
                $('#oldComment ul').empty();

                $.each(result, function(i, comment){
                    var date_string=new Date(comment.date).toUTCString();
                    $('#oldComment .list-comment').append("<li class=\"col-sm-12\"><div class=\"col-sm-1\"><img src=\"/images/avartar.png\" class=\"img-fluid\" alt=\"Responsive image\"></div><div><b>"+comment.name+"</b><small>"+date_string+"<a href=\"#\"></a></small></div><b>"+comment.content+"</b></li>")
                });
                console.log("Success: ", result);
            },
            error : function(e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
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
	});

    /* Pagination */
    var pages = Number($('#temp-pages').text());
    var current = Number($('#temp-current').text());
    $('#paging').remove('#temp-pages','#temp-current');
    if (pages > 0){
        $('#paging').append('<ul class="pagination justify-content-end">');
        if (current === 1){
            $('#paging').find('.pagination').append('<li class="disabled"><a>First</a></li>');
        }else{
            $('#paging').find('.pagination').append('<li><a href="/page/1">First</a></li>');
        }
        var i = current > 2 ? current - 1 : 1;
        if (i !== 1){
            $('#paging').find('.pagination').append('<li><a>...</a></li>');
        }
        for (; i <= current + 1 && i <= pages; i++) {
            if (i === current){
                $('#paging').find('.pagination').append('<li class="active"><a>'+ i +'</a></li>');
            }else{
                $('#paging').find('.pagination').append('<li><a href="/page/'+ i +'">'+ i +'</a></li>');
            }
            if (i === current + 1 && i < pages){
                $('#paging').find('.pagination').append('<li><a>...</a></li>');
            }
        }
        if (current === pages) {
            $('#paging').find('.pagination').append('<li><a>Last</a></li>');
        }else{
            $('#paging').find('.pagination').append('<li><a href="/page/'+ pages +'">Last</a></li>');
        }
        $('#paging').append('</ul>');
    }
/*    var value = $('#search-input').val();
    if(value == "" || value.length <= 0){
        $('#search-result').fadeOut();
        return;
    }else{
        $('#search-result').fadeIn();
    }
*/
    /*$('.form-inline').submit(function(event){
        event.preventDefault();
        $('#search-result').empty();
        var value = $(this).find('input[type="search"]').val();
        
        if(value === "" || value.length <= 0){
            return;
        }else{
            $.ajax({
                type : 'get',
                url : '/search-result?q=' + value
            }).fail(function(err){
                console.log(err);
            });
        }
    });
    */
    $('#search-input').keyup(function(){
        $('#search-result').empty();
        var value = $(this).val();
        
        if(value === "" || value.length <= 0){
            $('#search-result').fadeOut();
            return;
        }else{
            $('#search-result').fadeIn();
        }
        $.ajax({
            type : 'get',
            url : '/search?q=' + value
        })
        .done(function(data){
            if(data.length <= 0){
                $('#search-result').append('<p class="lead text-center mt-2>No result</p>"');
            }else{
                data.forEach(x => {
                    $('#search-result').append('<a href="/product/' + x._id + '" style="text-decoration:none;"><p class="m-2 lead" style="color:red;"><img style="width:60px;" src="' + x.imagePath + '"> &#32;&#32;&#32;'+ x.title +'</p></a>')
                })
            }
        }).fail(function(err){
            console.log(err);
        })
    });

/*    function debounce(func, wait, imediate){
        var timeout;
        return function () {
            var context=this, args=arguments;
            var later=function(){
                timeout=null;
                if(!imediate)
                    func.apply(context,args);
            };
            var callNow=imediate && !timeout;
            clearTimeout(timeout);
            timeout=setTimeout(later, wait);
            if(callNow)
                func.apply(context, args);
        };
    };*/
});