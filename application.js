$(document).ready(function(){
	$('#txt').keypress(function(e) {
		var value1 = '<div class="todoItem">&nbsp&nbsp&nbsp<label><input type="checkbox" name="checkme"></label> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		var value2 =$('#txt').val();
		var value3 = '<img id="delete" src="remove.jpg"/></div>';
		var value4 = '<hr style="height:2px;color:#333;background-color:#333;"/>';
			
		if(value2=="" && e.which == 13){
			alert('Please Enter a task to add!!!');
			return false;
		}else if ( e.which == 13 ) {
			$('.data').append(value1+value2+value3+value4);
			$(this).val("");
		};
	});
});
$(document).ready(function(){
	$("#checkAll").on('click',function() {
			$("input[name='checkme']").prop("checked", this.checked);
			if(this.checked){
				$("input[name='checkme']").parent().addClass("completed");
			}else{
				$("input[name='checkme']").parent().removeClass("completed");
				}
		});
 	$(".data").on('click',"input[name='checkme']",function(){	
		if($(this).is(":checked")){
			$(this).parent().addClass("completed"); 
		}else{
			$(this).parent().removeClass("completed");  
			};
	$("input[name='checkme']").on('click',function() { 
		if ($("input[name='checkme']").length == $("input[name='checkme']:checked").length) {
			$("#checkAll").prop("checked", "checked"); 
		}else { 
			$("#checkAll").removeProp("checked"); 
			}
		});
	$(".data").on('click',"img",function(){
		$("div").closest(".todoItem").remove();	
	});
	});
	
});

/* $(document).ready(function(){
$("#abc").on('click',function(){
		if($("input[name='checkme']").is (":checked")){
			$("input[name='checkme']").show();
		}else{
			$("input[name='checkme']").();
		}
	
	});
}); */
$(document).ready(function(){
		$("#tabs").tabs();
			$("a[href=#all]").click(function() {
				$("#tabs").tabs("option", "active", 0);
			});
			$("a[href=#completed]").click(function() {
				$("#tabs").tabs("option", "active", 1);
			});
			$("a[href=#pending]").click(function() {
				$("#tabs").tabs("option", "active", 2);
			});
});

