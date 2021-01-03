const TaskList = require('../models/Chore');

module.exports.home = function(req,res){
    res.render('home',{'title':"TODO App"});
}

module.exports.addTask = function(req,res){
    // console.log(req.body.description);
    TaskList.create(req.body,function(err,newTask){
        if(err){
            console.log('Error in adding document');
            return;
        }

        console.log("Chore added:",newTask);
        return res.redirect('back');
    })
}

// module.exports.deleteTask = function(req,res){
    
// }