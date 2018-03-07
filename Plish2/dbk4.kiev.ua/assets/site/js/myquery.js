$(document).ready(function () {	
	$(function() {
	    $(".gal").jCarouselLite({
	        btnNext: ".next",
	        btnPrev: ".prev",
			visible: 1,
			mouseWheel: true,
			easing: "linear"
	    });
	});
	$('table tr:odd').addClass('odd');
});
/* $(document).ready(function () {	
	$("#header-nav").each(function(i){$(this).find('li:last').addClass('last');});
	
	
	
	$(function() {
	    $(".gal").jCarouselLite({
	        btnNext: ".next0",
	        btnPrev: ".prev0",
			visible: 6,
			mouseWheel: true,
			easing: "linear"
	    });
	});
	
	$.featureList(
		$("#tabs li a"),
		$("#output li"), {
			start_item	:	0
		}
	);
	
	
	function resize_index()
	{
		var width_img = 1003;
		var width_img_cur = 1920;
		var body = ($("body").width());
		
		tmp=(width_img_cur-body)/2;
		width=body+tmp;
		$(".main-bl").css({ 'margin-left' : -tmp});	
		$(".main-bl").css({ 'width' : width});	
		
		tmp2=((body-width_img)/2)+10;
		$("#tabs").css({ 'right' : tmp2});	
	}
	
	function LabelsClean(){
		$('.header-right input.search-text').each(function(i){
			var	inputLabel=$(this).val();
			$(this).focus(function(){if ($(this).val() == inputLabel) {$(this).val('')}});
			$(this).blur(function(){if ($(this).val() == '') {$(this).val(inputLabel)}})
		});
	};

	resize_index();	
	LabelsClean();
	$(window).resize(function () {
		resize_index();
	}); 
	
	
	$('.OUR').each(function(i) {
        $(this).find('li').each(function(j) {
            $(this).find('div.question:first').click(function() {
                if ($(this).parent().hasClass('active')) {
                    $(this).parent().find('div.answer:first').slideUp(200, function() {
                        $(this).parent().toggleClass('active');
                        //$(this).parent().find('div.question:first').attr('title', 'Показать ответ')
                    })
                }
                else {
                    $(this).parent().find('div.answer:first').slideDown(200, function() {
                        $(this).parent().toggleClass('active');
                        //$(this).parent().find('div.question:first').attr('title', 'Скрыть ответ')
                    })
                }
            })
        })
    });
	
});


	
function classOn(f,on) 
{
	if (on) 
	{
		f.className=f.className+'-on';
		f.onmouseout=function (e) 
		{
			classOn(this,0);
		}
	}
	else f.className=f.className.substr(0,(f.className.length-3));
} */