$(document).ready(function(){				

    $('#todo').keypress(function(e) {
		code = e.keyCode ? e.keyCode : e.which;
        if(code.toString() == 13) {
			if($("#todo").val() !== ""){
				var val =  $('#todo').val();
				$(this).val("");
				$("#mydiv").append("<div class='arp'><label> <input type='checkbox' name='option' > "+val+" </label>" +"</div>")
			}
			else {
				alert("You must enter something to add");
			}
		};	
	});
	
	var a = "input[name='option']";
			
	$("div").on("click", "#all", function(){
		$(a).prop("checked", this.checked);
	
		if($(a).is(":checked")){
			$(a).closest(".arp").addClass("red"); 
		}
		else{
			$(a).closest(".arp").removeClass("red");   
		}
			
	});	
		
	$("#mydiv").on("click", a, function(){
		if ($(a).length == $("input[name='option']:checked").length) {
			$("#all").prop("checked", "checked");
		}
		else {
			$("#all").removeProp("checked");
		}
		$(this).closest(".arp").toggleClass("red"); 
	});
	
	/* $("#mydiv").on("click", a, function(){
		if($(this).is(":checked")){
			$(this).closest(".arp").addClass("red"); 
		}
		else{
			$(this).closest(".arp").removeClass("red"); 
		};
	}); */	
	   
	  
	$("#pending").on("click", function() {
		//$(".arp").not(".red"); 
		$(".arp").show().filter($(".red").hide()); 
	});
	
	$("#a").on("click", function() {
		$(".arp").show();
	});

	$("#completed").on("click", function() {
		$(".arp").hide().filter($(".red").show()); 
	});  
});
	

       
 
	   
	   
	
				
			