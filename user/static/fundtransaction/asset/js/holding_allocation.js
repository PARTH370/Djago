function holding_allocation_fun(fund_symbol, is_quarantine, reporting_date, element_type, utl_type){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  document.getElementById(element_type).className = "active";
  start_loading();
  var url = utl_type;  
  var search_dict = {};
  if(typeof reporting_date ==='undefined'){
	search_dict['reporting_date'] = $("#reporting_date").val();
  }
  else{ 
	search_dict['reporting_date'] = reporting_date;
  }
  search_dict['fund_symbol'] = fund_symbol;	
  search_dict['quarantine'] = is_quarantine	
  $.ajax({                       
	url: url,
	method: 'GET',
	data: search_dict,
	success: function (data) {  
	  stop_loading();
	  $("#tableinput").html(data);  
	},
	error: function (jqXHR, status, err) {
	  stop_loading();
	  make_alert("danger","Sorry, Something went wrong.");
	},
  });
};

//code for quarantine to review in tempallocations table
function btn_review_allocation_fun(url, type1, token){  
	test_list={}
	count=0
	nav = []
	id = []
	note = []
	$("#example1x_con input[type=checkbox]:checked").each(function () {
		// if(count <= 800){
		var row = $(this).closest("tr")[0];
		
		// var nav_text = row.cells[7].innerText
		table=$('#example1x_con').DataTable();
		var row = $(this).closest("tr")[0];
		var nav_text = row.cells[3].innerText
		
		
		nav_text = nav_text.replace("%", "")
		nav_text = nav_text.replace(",", "")

		// count=count+1
		nav.push(nav_text);
		id.push($(this).val());
		note.push(row.cells[9].innerText);
		// }
	});
	test_list['nav']=nav
	test_list['id']=id
	test_list['note']=note
	
	start_loading();
	$.ajax({    
		type: 'POST',                   
		// url: $("#movetoreviewform").attr("data-projects-url"),
		url: url,
		traditional: true,
		cache: false,
		// // JSON.stringify(test_list)
		
		data: {'test' : JSON.stringify(test_list), 'type' : type1, 'csrfmiddlewaretoken' : token},
		// JSON.stringify(test_list)
		// data: {'test':JSON.stringify(test_list),'type':'country'},
		success: function (data) {   
			if (data.is_updated){
				location.reload()
				
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Review!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Review!");
			}
			
		},
		error: function (jqXHR, status, err) {
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	
}
//code for review to reviewed in tempallocations table
function btn_submit_allocation_fun(url, type, token){
	test_list={}
	count = 0
	nav = []
	pre_nav = []
	id = []
	note = []
	$("#example1x_con input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		table=$('#example1x_con').DataTable();
		var data = table.row( $(this).parents('tr') ).data();
		
		// var nav_text = parseFloat(row.cells[8].innerText).toFixed(8)
		var row = $(this).closest("tr")[0];
		var nav_text = row.cells[4].innerText
		
		// var pre_nav_text = parseFloat(row.cells[9].innerText).toFixed(8)
		var row = $(this).closest("tr")[0];
		var pre_nav_text = row.cells[5].innerText
		
		nav_text = nav_text.replace("%", "")
		nav_text = nav_text.replace(",", "")
		pre_nav_text = pre_nav_text.replace("%", "")
		pre_nav_text = pre_nav_text.replace(",", "")
		
		// alert(nav_text)
		count=count + 1
		nav.push(nav_text);
		pre_nav.push(pre_nav_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		note.push(row.cells[10].innerText);
		// }
		// }
	});
	test_list['nav'] = nav
	test_list['pre_nav'] = pre_nav
	test_list['id'] = id
	test_list['note'] = note
	
	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		// // JSON.stringify(test_list)
		
		data: {'test' : JSON.stringify(test_list), 'type' : type, 'csrfmiddlewaretoken' : token},
		success: function (data) {   
			if (data.is_updated){
				// location.reload()
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Review to Reviewed!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Review to Reviewed!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	
}
//code for publish into main allocations table
function btn_publish_allocation_fun(url, type, token){
	test_list={}
	count = 0
	nav = []
	pre_nav = []
	id = []
	note = []
	$("#example1x_con input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		table=$('#example1x_con').DataTable();
		var data = table.row( $(this).parents('tr') ).data();
		
		// var nav_text = parseFloat(row.cells[8].innerText).toFixed(8)
		var row = $(this).closest("tr")[0];
		var nav_text = row.cells[4].innerText
		
		// var pre_nav_text = parseFloat(row.cells[9].innerText).toFixed(8)
		// var row = $(this).closest("tr")[0];
		// var pre_nav_text = row.cells[5].innerText
		
		nav_text = nav_text.replace("%", "")
		nav_text = nav_text.replace(",", "")
		// pre_nav_text = pre_nav_text.replace("%", "")
		// pre_nav_text = pre_nav_text.replace(",", "")
		
		// alert(nav_text)
		count=count + 1
		nav.push(nav_text);
		// pre_nav.push(pre_nav_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		note.push(row.cells[10].innerText);
		// }
		// }
	});
	test_list['nav'] = nav
	test_list['id'] = id
	test_list['note'] = note
	
	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		// // JSON.stringify(test_list)
		
		data: {'test' : JSON.stringify(test_list), 'type' : type, 'csrfmiddlewaretoken' : token},
		success: function (data) {   
			if (data.is_updated){
				// location.reload()
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	location.reload()
}

//code for quarantine to review in tempholding table
 function btn_review_holding_fun(url, token){  
	test_list={}
	count=0
	sw_list = []
	sv_list = []
	id = []
	note = []
	$("#example1x_hol input[type=checkbox]:checked").each(function () {
		// if(count <= 800){
			
		var row = $(this).closest("tr")[0];
		var sv_text = row.cells[4].innerText
	   
		// if (row.cells[4].innerText===""){
		//     sw_text = row.cells[4].children[0].value
		// }
		var sw_text = row.cells[7].innerText
		
		// if (row.cells[7].innerText===""){
		//     sv_text = row.cells[7].children[0].value
		// }
		sw_text = sw_text.replace("%", "")
		sw_text = sw_text.replace(",", "")
		sv_text = sv_text.replace(",", "")
		count=count+1
		sw_list.push(sw_text);
	   
		sv_list.push(sv_text);
		id.push($(this).val());
		// if(row.cells[12].innerText=="NA")
		// {note.push("");}
		// else{
		note.push(row.cells[11].innerText);
		// }
		// }
	});
	
	test_list['sw']=sw_list
	test_list['sv']=sv_list
	test_list['id']=id
	test_list['note']=note
	//test_list['csrfmiddlewaretoken']= "{{ csrf_token }}"
	//alert(test_list['sw'])
	//alert(test_list['sv'])
	//alert(test_list['id'])
	//alert(test_list['note'])
	start_loading();
	$.ajax({    
		type : 'POST',                   
		url : url,
		traditional: true,
		cache: false,
		data: {'test':JSON.stringify(test_list),'csrfmiddlewaretoken': token},
		success: function (data) {   
		   
			if (data.is_updated){
				showrecord();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Review!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Review!");
			}
			
		},
		error: function (jqXHR, status, err) {
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	location.reload()
}
//code for review to reviewed in tempholding table
function btn_submit_holding_fun(url, token){
	test_list={}
	count = 0
	sw_list = []
	sv_list = []
	pre_sw_list = []
	pre_sv_list = []
	id = []
	note = []
	$("#example1x_hol input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		var sw_text = row.cells[6].innerText
		// if (row.cells[5].innerText===""){
		//     sw_text = row.cells[5].children[0].value
		// }
		var pre_sw_text = row.cells[5].innerText
		// if (row.cells[4].innerText===""){
		//     pre_sw_text = row.cells[4].children[0].value
		// }
		var sv_text = row.cells[10].innerText
		// if (row.cells[9].innerText===""){
		//     sv_text = row.cells[9].children[0].value
		// }
		var pre_sv_text = row.cells[9].innerText
		// if (row.cells[8].innerText===""){
		//     prev_sv_text = row.cells[8].children[0].value
		// }
		// alert(nav_text)
		sv_text = sv_text.replace("%", "")
		pre_sv_text = pre_sv_text.replace("%", "")
		sv_text = sv_text.replace(",", "")
		pre_sv_text = pre_sv_text.replace(",", "")
		sw_text = sw_text.replace(",", "")
		pre_sw_text = pre_sw_text.replace(",", "")
		
		
		count=count + 1
		sw_list.push(sw_text);
		sv_list.push(sv_text);
		pre_sw_list.push(pre_sw_text);
		pre_sv_list.push(pre_sv_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		note.push(row.cells[13].innerText);
		// }
		// }
	});
	test_list['sw'] = sw_list
	test_list['pre_sw'] = pre_sw_list
	test_list['sv'] = sv_list
	test_list['pre_sv'] = pre_sv_list
	test_list['id'] = id
	test_list['note'] = note
	// alert(test_list['sw'])
	if(test_list){
	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		// // JSON.stringify(test_list)
		data: {'test':JSON.stringify(test_list), 'csrfmiddlewaretoken': token},
		success: function (data) {   
			if (data.is_updated){
				showrecord();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Review to Reviewed!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Review to Reviewed!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	location.reload()
	}
	else{
		make_alert("danger","Select rows to move.");
	}
}
//code for publish into main holding table
function btn_publish_holding_fun(url, token){
	test_list={}
	count = 0
	sw_list = []
	sv_list = []
	pre_sw_list = []
	pre_sv_list = []
	id = []
	note = []
	$("#example1x_hol input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		var sv_text = row.cells[5].innerText
		// if (row.cells[5].innerText===""){
		//     sw_text = row.cells[5].children[0].value
		// }
		// var pre_sw_text = row.cells[5].innerText
		// if (row.cells[4].innerText===""){
		//     pre_sw_text = row.cells[4].children[0].value
		// }
		var sw_text = row.cells[9].innerText
		// if (row.cells[9].innerText===""){
		//     sv_text = row.cells[9].children[0].value
		// }
		// var pre_sv_text = row.cells[9].innerText
		// if (row.cells[8].innerText===""){
		//     prev_sv_text = row.cells[8].children[0].value
		// }
		// alert(nav_text)
		sw_text = sw_text.replace("%", "")
		// pre_sv_text = pre_sv_text.replace("%", "")
		sw_text = sw_text.replace(",", "")
		// pre_sv_text = pre_sv_text.replace(",", "")
		sv_text = sv_text.replace(",", "")
		// pre_sw_text = pre_sw_text.replace(",", "")
		
		
		count=count + 1
		sw_list.push(sw_text);
		sv_list.push(sv_text);
		// pre_sw_list.push(pre_sw_text);
		// pre_sv_list.push(pre_sv_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		note.push(row.cells[13].innerText);
		// }
		// }
	});
	test_list['sw'] = sw_list
	test_list['sv'] = sv_list
	test_list['id'] = id
	test_list['note'] = note

	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		data: {'test':JSON.stringify(test_list),'type':'holding', 'csrfmiddlewaretoken': token},
		success: function (data) {   
			if (data.is_updated){
				showrecord();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
	location.reload()
}
//reset function on reset button click
function reset_fun(){
	$('#id_asset_class').val("");
	$('#update_date').val("");
	$('#id_asset_class').select2().trigger('change');
	$('#id_published_flag').val("");
	$('#id_published_flag').select2().trigger('change');
	$('#id_fund_symbol').val("");
	$('#id_fund_long_name').val("");
	$('#id_domicile').val("");
	$('#id_domicile').select2().trigger('change');
	$('#id_publish_delay').val("");
	$('#id_publish_delay').select2().trigger('change');
	$('#id_share_class_client').val("");
	$('#id_share_class_client').select2().trigger('change');
	$('#id_std_delay').val("");
	$('#id_std_delay').select2().trigger('change');
	$('#id_country').val("");
	$('#id_country').select2().trigger('change');
	$('#id_country_name').val("");
	$('#id_country_name').select2().trigger('change');
	$('#id_currency_name').val("");
	$('#id_currency_name').select2().trigger('change');
	$('#id_asset_class_name').val("");
	$('#id_asset_class_name').select2().trigger('change');
	$('#id_fund_family_name').val("");
	$('#id_fund_family_name').select2().trigger('change');
	$('#id_instrument_type_name').val("");
	$('#id_instrument_type_name').select2().trigger('change');
	$('#id_reviewer').val("");
	$('#id_reviewer').select2().trigger('change');
	$('#id_quarantine').val("");
	$('#id_quarantine').select2().trigger('change');
	$('#id_lot_no').val("");
	$('#id_custom').val("");
	$('#id_fund_family').val("");
	$('#id_symbol').val("");
	$('#id_range').val("");
	$('#id_range').select2().trigger('change');
	$('#id_security_flag').val("");
	$('#id_security_flag').select2().trigger('change');
	$('#id_share_class_name').val("");
	$('#id_frequency').val("");
	$('#id_frequency').select2().trigger('change');
	$('#id_percent_change').val("");
	$('#id_percent_change').select2().trigger('change');
	$('#id_flag').val("");
	$('#id_flag').select2().trigger('change');
	$('#id_fund_type').val("");
	$('#id_fund_type').select2().trigger('change');
	$('#id_instrument_type').val("");
	$('#id_instrument_type').select2().trigger('change');
	$('#id_status').val("");
	$('#id_status').select2().trigger('change');
	$('#id_region').val("");
	$('#id_region').select2().trigger('change');
	$('#id_fund_family').val("");
	$('#id_fund_family').select2().trigger('change');
	$('#id_tna_coverage').val("");
	$('#id_tna_coverage').select2().trigger('change');
	$('#id_username').val("");
	$('#id_username').select2().trigger('change');
	$('#id_code_name').val("");
	$('#id_environment').val("");
	$('#id_environment').select2().trigger('change');
	$('#id_code_path').val("");
}
//Making div for popup Note..
function popup_note(title, id, note) {
  var div_note = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + title + ' - update note </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
	  '<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + id + ')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

  $('#popup_note').prepend(div_note);
  $('#modal-default').modal('show');
}

//popup for client selction
function popup_client(asset, family) {
	var div_client = '<div class="modal fade" id="modal-default">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title">Client Selection</h4>' +
		'</div>' +
		'<div class="modal-body">' +
		'<div class="form-group">' +
		'<label for="comment" style="width:100%;">Client Name: ' +
		'<select class="form-control select2" style="width: 100%;" id="id_client" data-placeholder="id_client">' +
		'<option value="1"  selected="selected">QuoteMedia(QM)</option>' +
		'<option value="2">EDI-HFRU(EDH)</option>' +
		'<option value="3">EDI-Moneymate(EDM)</option>' +
		'<option value="4">EDI-GIL(EDG)</option>' +
		'<option value="5">Indian MF(IMF)</option>' +
		'</select>' +
	  	'</div> ' +
		'<div class="modal-footer">' +
		// '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
		'<button type="button" class="btn btn-info" onclick="save_changes_client('+ asset +','+ family +')">Save changes</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
  
	$('#popup_note').prepend(div_client);
	$('#modal-default').modal('show');
  }


//popup for adding or updating Fund Manager
function add_or_update_fund_manager(id = "", r_name = "", r_bio = "", start_date= "", type="Add")//fund manager
 {
	var div_note = '<div class="modal fade" id="modal-default">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title">' + type + '</h4>' +
		'</div>' +
		'<div class="modal-body">' +
		'<div class="form-group">' +
		
		'<label for="comment" style="width:100%;">Fund Manager: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>'
		
		if(id){
			div_note = div_note + '<textarea class="form-control" rows="6" id="new_fund_manager">' + r_name+ '{' + r_bio + '}' + '</textarea>'	
		}
		else{
			div_note = div_note + '<textarea class="form-control" rows="6" id="new_fund_manager" placeholder = "representative_name{representative_bio}"></textarea>'	
		
		}
		if(id){
			div_note = div_note + '<div class="form-group"><label for="name">Start Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date" value = '+start_date+'></input></div>' 
		}
		else{
			div_note = div_note + '<div class="form-group"><label for="name">Start Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date" ></input></div>' 	
		
		}
		div_note = div_note +
		'</div> ' +
		'</div>' +
		'<div class="modal-footer">' +
		// '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
		'<button type="button" class="btn btn-info" onclick="save_changes('+ id +')">Save changes</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
  
		$('#popup_note').prepend(div_note);
		$('#modal-default').modal('show');
		$('#modal-default').on('shown.bs.modal', function () {
			  $('#field_val').focus();
			  $('#datepicker7').datepicker({
				autoclose: true,
				format: "yyyy-mm-dd"
			});
		}); 
}


function popup_cms(field_val, field_type, fund_id, name = "", id = "", date = "") {
	var div_note = '<div class="modal fade" id="modal-default">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title">Change Management System</h4>' +
		'</div>' +
		'<div class="modal-body">' + '<input name="nav" type="hidden" class="form-control" id="field_type" value="' + field_type + '">'
		
		if(field_type == "fund_objective"){
			div_note = div_note + '<div class="form-group"><label for="name">Fund Objective Name</label>'+
		  	'<input name="nav" type="name" class="form-control" id="obj_name" autofocus value = "'+ name +'"></div>' + '<div class="form-group"><label for="name">Fund Objective Description</label>'+
		  	'<textarea class="form-control" rows="6" cols="30" id="obj_desc">'+field_val+'</textarea>'+ '<div class="form-group"><label for="name">Fund Objective Identifier</label>'+
			  '<input name="nav" type="name" class="form-control" id="obj_id" value = "'+ id +'"></div>'
			div_note = div_note + '<div class="form-group"><label for="name">Start Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date" value = '+ date +'></input></div>' + '</div><div class="modal-footer">' 
		}
		else if(field_type == "fund_strategy"){
			div_note = div_note + '<div class="form-group"><label for="name">Fund Strategy Name</label>'+
			  '<input name="nav" type="name" class="form-control" id="str_name" autofocus value = "'+ name +'"></div>' + '<div class="form-group"><label for="name">Fund Strategy Description</label>'+
			  '<textarea class="form-control" rows="6" cols="30" id="str_desc">'+field_val+'</textarea></div>'+ '<div class="form-group"><label for="name">Fund Strategy Identifier</label>'+
			  '<input name="nav" type="name" class="form-control" id="str_id" value = "'+ id +'"></div>'
			div_note = div_note + '<div class="form-group"><label for="name">Start Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date" value = '+ date +'></input></div>' + '</div><div class="modal-footer">' 
		}
		else{
			div_note = div_note + '<div class="form-group"><label for="name">' + field_type + ': </label>'+
			  '<input name="nav" type="name" class="form-control" id="field_val" value="' + field_val + '" autofocus></div>' +
			  
			  '<div class="form-group"><label for="name">URL: </label><input name="nav" type="name" class="form-control" id="field_url"></div>' + 
			  '<div class="form-group"><label for="name">Upload File: </label><form method="post" enctype="multipart/form-data" id="fileForm"><input type="file" name="field_file" id="field_file" /></form></div>'
			  div_note = div_note + '<div class="form-group"><label for="name">Start Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date" ></input></div>' + '</div><div class="modal-footer">' 
		}
		
		// '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
		div_note = div_note + '<button type="button" class="btn btn-info" onclick = "update_cms(' + fund_id + ')">Save changes</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
  
	$('#popup_note').prepend(div_note);
	$('#modal-default').modal('show');
	$('#modal-default').on('shown.bs.modal', function () {
	  	$('#field_val').focus();
	  	$('#datepicker7').datepicker({
			autoclose: true,
			format: "yyyy-mm-dd"
		});
	}); 
}

function popup_turnover(turnover_val)
{
	var div_note = '<div class="modal fade" id="modal-default">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title">Add Turnover:</h4>' +
		'</div>' +
		'<div class="modal-body">' +
		
		'<div class="form-group"><label for="name">Turnover: </label>'+
		// '<input name="nav" type="hidden" class="form-control" id="field_type" value="' + field_type + '">'+
		'<input name="nav" type="name" class="form-control" id="id_turnover" value="' + turnover_val + '" autofocus></div>'+
		
		'<div class="form-group"><label for="name">Snapshot Date: </label><input type="text" class="form-control" id="datepicker7" placeholder="Start Date"></input></div>' +
		
		// '<div class="form-group"><label for="name">URL: </label><input name="nav" type="name" class="form-control" id="field_url"></div>'+
		
		// '<div class="form-group"><label for="name">Upload File: </label><form method="post" enctype="multipart/form-data" id="fileForm"><input type="file" name="field_file" id="field_file" /></form></div>' +
		'</div>' +

		'<div class="modal-footer">' +
		
		// '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
		'<button type="button" class="btn btn-info" onclick = "save_changes()">Save changes</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
  
	$('#popup_note').prepend(div_note);
	$('#modal-default').modal('show');
	$('#modal-default').on('shown.bs.modal', function () {
	  	$('#field_val').focus();
	  	$('#datepicker7').datepicker({
			autoclose: true,
			format: "yyyy-mm-dd"
		});
	}); 	
}

function popup_note1(type, title, nav, note, index) {
  var div_note1 = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + title + ' - update note </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type + ': </label>'+
	  '<input name="nav" type="name" class="form-control" id="nav" value="' + nav + '" autofocus></div>'+

	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
	  '<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + index + ')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

  $('#popup_note').prepend(div_note1);
  $('#modal-default').modal('show');
  $('#modal-default').on('shown.bs.modal', function () {
	$('#nav').focus();
  })  
}

function popup_note_holding(type, type1 ,title, nav, nav_per, note, index) {
  var div_note1 = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + title + ' - update note </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type + ': </label>'+
	  '<input name="nav" type="name" class="form-control" id="nav" value="' + nav + '" autofocus></div>'+
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type1 + ': </label>'+
	  '<input name="nav" type="name" class="form-control" id="nav_per" value="' + nav_per + '" autofocus></div>'+
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
	  '<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + index + ')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

  $('#popup_note').prepend(div_note1);
  $('#modal-default').modal('show');
  $('#modal-default').on('shown.bs.modal', function () {
	$('#nav').focus();
  })  
}

function popup_allocation(type, title, nav, note, index) {
  var div_note1 = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + title + ' - update note </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type + ': </label>'+
	  '<input name="nav" type="name" class="form-control" id="nav" value="' + nav + '" autofocus></div>'+

	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
	  '<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + index + ')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

  $('#popup_note').prepend(div_note1);
  $('#modal-default').modal('show');
  $('#modal-default').on('shown.bs.modal', function () {
	$('#nav').focus();
  })  
}

function popup_note_sc(p_date, a_date, status, end_date, sc_symbol, status_list, sc_id, id, ex_name) {
  var div_note = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + sc_symbol + ' - update </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Termination Date: ' +
	  '<input type="text" class="form-control" id="datepicker27" placeholder="Termination Date" value = "' + end_date + '">' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Prospectus Date: ' +
	  '<input type="text" class="form-control" id="datepicker28" placeholder="Prospectus Date" value = "' + p_date + '">' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Annual Report Date: ' +
	  '<input type="text" class="form-control" id="datepicker29" placeholder="Annual Report Date" value = "' + a_date + '">' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">SC Symbol: ' +
	  '<input type="text" class="form-control" id="id_sc_symbol" placeholder="Share Class Symbol" value = "' + sc_symbol + '">' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Status: ' +
	  '<select class="form-control select2" style="width: 100%;" id="id_status" data-placeholder="Status">'
	  
	  for (i = 0; i < status_list.length; i++) {
		  if(status === status_list[i]){
			div_note = div_note + '<option value="'+status_list[i] + '"  selected="selected">'+ status_list[i] +'</option>'
		  }
		  else{
			div_note = div_note + '<option value="'+status_list[i] + '">'+ status_list[i] +'</option>'  
		  }
	  }             
       div_note = div_note + '</select>' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Exchange Name*: ' +
	  '<input type="text" class="form-control" id="id_ex_name" placeholder="Exchange Long Name" value = "' + ex_name + '">' +
	  '</div> ' +
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Start Date: ' +
	  '<input type="text" class="form-control" id="datepicker30" placeholder="Exchange Start Date">' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + id + ','+ sc_id +')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

  $('#popup_note').prepend(div_note);
  $('#modal-default').modal('show');
  $('#modal-default').on('shown.bs.modal', function () {
	
	$('#datepicker27').datepicker({
      autoclose: true,
      format: "yyyy-mm-dd"
      })
  
  $('#datepicker28').datepicker({
	autoclose: true,
	format: "yyyy-mm-dd"
	})

$('#datepicker29').datepicker({
	autoclose: true,
	format: "yyyy-mm-dd"
	})

$('#datepicker30').datepicker({
	autoclose: true,
	format: "yyyy-mm-dd"
	})
});
}


//code for publish into main holding table
function btn_publish_holding_fun_for_fund(url, token,date){
	test_list={}
	count = 0
	
	sw_list = []
	sv_list = []
	pre_sw_list = []
	pre_sv_list = []
	id = []
	note = []
	$("#example1x input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		// var sv_text = row.cells[4].innerText
		// if (row.cells[5].innerText===""){
		//     sw_text = row.cells[5].children[0].value
		// }
		// var pre_sw_text = row.cells[5].innerText
		// if (row.cells[4].innerText===""){
		//     pre_sw_text = row.cells[4].children[0].value
		// }
		// var sw_text = row.cells[7].innerText
		// if (row.cells[9].innerText===""){
		//     sv_text = row.cells[9].children[0].value
		// }
		// var pre_sv_text = row.cells[9].innerText
		// if (row.cells[8].innerText===""){
		//     prev_sv_text = row.cells[8].children[0].value
		// }
		// alert(nav_text)
		// sw_text = sw_text.replace("%", "")
		// pre_sv_text = pre_sv_text.replace("%", "")
		// sw_text = sw_text.replace(",", "")
		// pre_sv_text = pre_sv_text.replace(",", "")
		// sv_text = sv_text.replace(",", "")
		// pre_sw_text = pre_sw_text.replace(",", "")
		
		
		count=count + 1
		// sw_list.push(sw_text);
		// sv_list.push(sv_text);
		// pre_sw_list.push(pre_sw_text);
		// pre_sv_list.push(pre_sv_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		// note.push(row.cells[11].innerText);
		// }
		// }
	});
	// test_list['sw'] = sw_list
	// test_list['sv'] = sv_list
	
	test_list['id'] = id
	test_list['date'] = date
	// test_list['note'] = note

	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		data: {'test':JSON.stringify(test_list),'type':'holding', 'csrfmiddlewaretoken': token},
		success: function (data) {   
			if (data.is_updated){
				showrecord();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
}
//code for publish into main allocations table
function btn_publish_allocation_fun_for_fund(url, type, token,date){
	test_list={}
	count = 0
	// nav = []
	// pre_nav = []
	id = []
	// note = []
	//alert(date)
	$("#example1x input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		// table=$('#example1x_con').DataTable();
		// var data = table.row( $(this).parents('tr') ).data();
		
		// var nav_text = parseFloat(row.cells[8].innerText).toFixed(8)
		// var row = $(this).closest("tr")[0];
		// var nav_text = row.cells[3].innerText
		
		// var pre_nav_text = parseFloat(row.cells[9].innerText).toFixed(8)
		// var row = $(this).closest("tr")[0];
		// var pre_nav_text = row.cells[5].innerText
		
		// nav_text = nav_text.replace("%", "")
		// nav_text = nav_text.replace(",", "")
		// pre_nav_text = pre_nav_text.replace("%", "")
		// pre_nav_text = pre_nav_text.replace(",", "")
		
		// alert(nav_text)
		count=count + 1
		// nav.push(nav_text);
		// pre_nav.push(pre_nav_text);
		id.push($(this).val());
		// alert($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		// note.push(row.cells[9].innerText);
		// }
		// }
		
	});
	// test_list['nav'] = nav
	
	test_list['id'] = id
	test_list['date'] = date
	
	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		// // JSON.stringify(test_list)
		
		data: {'test' : JSON.stringify(test_list), 'type' : type, 'csrfmiddlewaretoken' : token},
		success: function (data) {   
			if (data.is_updated){
				// location.reload()
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from Reviewed to Publish!");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
}

//code for publish into main holding table
function btn_review_holding_fun_for_fund(url, token,date){
	test_list={}
	count = 0
	
	sw_list = []
	sv_list = []
	pre_sw_list = []
	pre_sv_list = []
	id = []
	note = []
	$("#example1x input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		// var sv_text = row.cells[4].innerText
		// if (row.cells[5].innerText===""){
		//     sw_text = row.cells[5].children[0].value
		// }
		// var pre_sw_text = row.cells[5].innerText
		// if (row.cells[4].innerText===""){
		//     pre_sw_text = row.cells[4].children[0].value
		// }
		// var sw_text = row.cells[7].innerText
		// if (row.cells[9].innerText===""){
		//     sv_text = row.cells[9].children[0].value
		// }
		// var pre_sv_text = row.cells[9].innerText
		// if (row.cells[8].innerText===""){
		//     prev_sv_text = row.cells[8].children[0].value
		// }
		// alert(nav_text)
		// sw_text = sw_text.replace("%", "")
		// pre_sv_text = pre_sv_text.replace("%", "")
		// sw_text = sw_text.replace(",", "")
		// pre_sv_text = pre_sv_text.replace(",", "")
		// sv_text = sv_text.replace(",", "")
		// pre_sw_text = pre_sw_text.replace(",", "")
		
		
		count=count + 1
		// sw_list.push(sw_text);
		// sv_list.push(sv_text);
		// pre_sw_list.push(pre_sw_text);
		// pre_sv_list.push(pre_sv_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		// note.push(row.cells[11].innerText);
		// }
		// }
	});
	// test_list['sw'] = sw_list
	// test_list['sv'] = sv_list
	
	test_list['id'] = id
	test_list['date'] = date
	// test_list['note'] = note

	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		data: {'test':JSON.stringify(test_list),'type':'holding', 'csrfmiddlewaretoken': token},
		success: function (data) {   
			if (data.is_updated){
				showrecord();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Reviewed !"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Reviewed !");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
}

//code for publish into main holding table
function btn_review_allocation_fun_for_fund(url,type, token,date){
	test_list={}
	count = 0
	
	sw_list = []
	sv_list = []
	pre_sw_list = []
	pre_sv_list = []
	id = []
	note = []
	$("#example1x input[type=checkbox]:checked").each(function () {
		// if(count<=800){
		var row = $(this).closest("tr")[0];
		// var sv_text = row.cells[4].innerText
		// if (row.cells[5].innerText===""){
		//     sw_text = row.cells[5].children[0].value
		// }
		// var pre_sw_text = row.cells[5].innerText
		// if (row.cells[4].innerText===""){
		//     pre_sw_text = row.cells[4].children[0].value
		// }
		// var sw_text = row.cells[7].innerText
		// if (row.cells[9].innerText===""){
		//     sv_text = row.cells[9].children[0].value
		// }
		// var pre_sv_text = row.cells[9].innerText
		// if (row.cells[8].innerText===""){
		//     prev_sv_text = row.cells[8].children[0].value
		// }
		// alert(nav_text)
		// sw_text = sw_text.replace("%", "")
		// pre_sv_text = pre_sv_text.replace("%", "")
		// sw_text = sw_text.replace(",", "")
		// pre_sv_text = pre_sv_text.replace(",", "")
		// sv_text = sv_text.replace(",", "")
		// pre_sw_text = pre_sw_text.replace(",", "")
		
		
		count=count + 1
		// sw_list.push(sw_text);
		// sv_list.push(sv_text);
		// pre_sw_list.push(pre_sw_text);
		// pre_sv_list.push(pre_sv_text);
		id.push($(this).val());
		// if(row.cells[13].innerText=="NA")
		// {note.push("");}
		// else{
		// note.push(row.cells[11].innerText);
		// }
		// }
	});
	// test_list['sw'] = sw_list
	// test_list['sv'] = sv_list
	
	test_list['id'] = id
	test_list['date'] = date
	// test_list['note'] = note

	start_loading();
	$.ajax({                       
		url: url,
		type: 'POST',
		traditional: true,
		cache: false,
		data: {'test':JSON.stringify(test_list),'type':type, 'csrfmiddlewaretoken': token},
		success: function (data) {   
			if (data.is_updated){
				btnsearchaction();
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Reviewed !"); 
			}
			else {
				stop_loading();
				make_alert("success",data.count+" No. of Records submitted from QC to Reviewed !");
			}
		},
		error: function (jqXHR, status, err) {
			
			stop_loading();
			make_alert("danger","Sorry, Something went wrong.");
		}
	});
}


function change_table_flag(){
	var div_note = '<div class="modal fade" id="popup_change_table">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title"> Change Table Flag</h4>' +
		'</div>' +
		'<div class="modal-body">' +
		'<div class="form-group">' +
		'<label for="cars">Choose Table Flag : </label><select name="table_flag" id="table_flag" class = "form-control select2"><option value="equity">Equity</option><option value="fixedincome">Fixed Income</option><option value="future">Future</option><option value="option">Option</option><option value="mutualfund">Mutual Fund</option><option value="other">Other</option></select>'
		
		div_note = div_note +
		'</div> ' +
		'</div>' +
		'<div class="modal-footer">' 
		
			div_note = div_note + '<button type="button" class="btn btn-info" onclick=save_change_flag()>Save changes</button>' 
		
		div_note = div_note + '</div>' +
		'</div>' +
		'</div>' +
		'</div>';

	$('#popup_note').prepend(div_note);
	$('#popup_change_table').modal('show');
	$('#popup_change_table').on('shown.bs.modal', function () {
		$('#table_flag').focus();
	}); 
}

function popup_note_dividend(type, title, nav, note, index) {
	var div_note1 = '<div class="modal fade" id="modal-default">' +
		'<div class="modal-dialog">' +
		'<div class="modal-content">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
		'<span aria-hidden="true">&times;</span></button>' +
		'<h4 class="modal-title">' + title + ' - update note </h4>' +
		'</div>' +
		'<div class="modal-body">' +
		'<div class="form-group"><label for="name">' + type + ': </label>'+
		'<input name="nav" type="name" class="form-control" id="nav" value="' + nav + '" autofocus></div>'+
  
		'<div class="form-group">' +
		'<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
		'<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
		'</div> ' +
		'</div>' +
		'<div class="modal-footer">' +
		// '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
		'<button type="button" class="btn btn-info" onclick="save_changes(' + index + ')">Save changes</button>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
  
	$('#popup_note').prepend(div_note1);
	$('#modal-default').modal('show');
	$('#modal-default').on('shown.bs.modal', function () {
	  $('#nav').focus();
	})  
  }
  
  function popup_note_capital_gain(type, type1, type2, title, nav_short, nav_long, nav_total, note, index) {
	var div_note1 = '<div class="modal fade" id="modal-default">' +
	  '<div class="modal-dialog">' +
	  '<div class="modal-content">' +
	  '<div class="modal-header">' +
	  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
	  '<span aria-hidden="true">&times;</span></button>' +
	  '<h4 class="modal-title">' + title + ' - update note </h4>' +
	  '</div>' +
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type + ': </label>'+
	  '<input name="nav_short" type="name" class="form-control" id="nav_short" value="' + nav_short + '" autofocus></div>'+
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type1 + ': </label>'+
	  '<input name="nav_long" type="name" class="form-control" id="nav_long" value="' + nav_long + '" autofocus></div>'+
	  '<div class="modal-body">' +
	  '<div class="form-group"><label for="name">' + type2 + ': </label>'+
	  '<input name="nav_total" type="name" class="form-control" id="nav_total" value="' + nav_total + '" autofocus></div>'+
	  '<div class="form-group">' +
	  '<label for="comment" style="width:100%;">Add Note: <a href="#" class="btn btn-success btn-sm" style="float: right; color:#ffffff;"><i class="fa fa-pencil-square" aria-hidden="true"></i></a> </label>' +
	  '<textarea class="form-control" rows="5" id="comment">' + note + '</textarea>' +
	  '</div> ' +
	  '</div>' +
	  '<div class="modal-footer">' +
	  // '<button type="button" class="btn btn-info" data-dismiss="modal">Save changes</button>' +
	  '<button type="button" class="btn btn-info" onclick="save_changes(' + index + ')">Save changes</button>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>' +
	  '</div>';

	$('#popup_note').prepend(div_note1);
	$('#modal-default').modal('show');
	$('#modal-default').on('shown.bs.modal', function () {
	  $('#nav').focus();
	})  
  }