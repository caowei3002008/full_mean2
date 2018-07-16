var mongoose = require("mongoose");
var Tasks = mongoose.model('Tasks');

module.exports = {
    create: (req,res) => {
        var newTask = new Tasks(req.body);
        newTask.save((err) =>{
            if(err){
                res.json(err);
            }else{
                res.json(newTask);
            }
        })
    },
    index: (req,res) => {
        Tasks.find().exec((err,allTasks) => {
            if(err){
                res.json(err);
            }else{
                res.json(allTasks);
            }
        })
    },
    update: (req,res) => {
        Tasks.findById({_id: req.body.id}, function(err, foundOne){
            if(err){
                res.json(err);
            }else{
                foundOne.title = req.body.title;
                foundOne.description = req.body.description;
                foundOne.save((err)=>{
                    if(err){
                        res.json(err);
                    }else{
                        res.json(foundOne);
                    }
                })
            }
        })
    },
    delete: (req,res) => {
        Tasks.remove({_id: req.body.id}, function(err){
            if(err){
                res.json(err);
            }else{
                console.log("Successfully delete");
            }
        })
    }
}