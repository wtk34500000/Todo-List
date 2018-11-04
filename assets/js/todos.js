//Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
})

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText +"</li)");
	}
})

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})