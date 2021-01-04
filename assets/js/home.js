
var checkedTasks = {}

var taskStatus = function(){
    let _id = $(this).attr('id').toString();
    // checkedTasks[_id] = true;
    if($(this).is(":checked")){
        
        checkedTasks[_id] = true;
        $(this).parents('li').children('#S2').children('p').wrap("<s></s>");
    }else{
        $(this).parents('li').children('#S2').children().children().unwrap();
        delete checkedTasks[_id];
    }
    console.log(checkedTasks);
}

$('#checkbox input[type=checkbox').on('click',taskStatus);

$('#deleteTask').on('click',function(){
    console.log("Delete button clicked");
    for(let i in checkedTasks){
        
        $.ajax({
            async:false,
            url:"/delete-task",
            type:"get",
            data:{
                id:i
            },
            success:function(){
                console.log("Delete request sent");
                
            }
            

        }).done(function(){
            window.location.href = '/';
        })
    }
    return;
   
})