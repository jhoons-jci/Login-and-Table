function edit_row(no)
{

	
 var sno=document.getElementById("sno_row"+no);
 var action=document.getElementById("action_row"+no);
 var date=document.getElementById("date_row"+no);
	
 var sno_data=sno.innerHTML;
 var action_data=action.innerHTML;
 var date_data=date.innerHTML;
	
 sno.innerHTML="<input type='text' id='sno_text"+no+"' value='"+sno_data+"'>";
 action.innerHTML="<input type='text' id='action_text"+no+"' value='"+action_data+"'>";
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
}

function save_row(no)
{
 var sno_val=document.getElementById("sno_text"+no).value;
 var action_val=document.getElementById("action_text"+no).value;
 var date_val=document.getElementById("date_text"+no).value;

 document.getElementById("sno_row"+no).innerHTML=sno_val;
 document.getElementById("action_row"+no).innerHTML=action_val;
 document.getElementById("date_row"+no).innerHTML=date_val;

}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}	

function add_row()
{
 var new_sno=document.getElementById("new_sno").value;
 var new_action=document.getElementById("new_action").value;
 var new_date=document.getElementById("new_date").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='sno_row"+table_len+"'>"+new_sno+"</td><td id='action_row"+table_len+"'>"+new_action+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_sno").value="";
 document.getElementById("new_action").value="";
 document.getElementById("new_date").value="";
}
function show_alert() 
  {     
    var name = document.getElementById("inputdash").value;
    var message1="WELCOME "+ name+ "!";
    // document.getElementById("contentd").innerHTML =message1;
    var title=document.querySelector("#inputdash").textContent;
    title=name+" Welcome To Dashboard";
    document.querySelector("#title").textContent=title;
  } 
