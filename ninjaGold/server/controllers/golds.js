var mongoose = require('mongoose');
var Golds = mongoose.model('Golds');

module.exports = {
    index: (req,res) => {
    Golds.find().exec((err,foundAll) =>{
        if(err){
            console.log("2");
            res.json(err);

        }else{
            console.log("1");
            console.log(foundAll);
            res.json(foundAll);
        }
    })
    },
    create: (req,res) => {
        console.log("-----",req.body);
        var newGolds = new Golds({
            play_name : req.body.play_name,
            total_earn: req.body.total_earn,
            logs: req.body.logs


        });
        console.log(newGolds);
        // newGolds.play_name = req.body.play_name;
        // newGolds.total_earn = req.body.total_earn;
        newGolds.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json(newGolds);
            }
        })
    },
    updateOne:(req,res) =>{
        Golds.findOne({_id:req.body.id}).exec((err,foundOne) => {
            if(err) res.json(err);
            console.log(foundOne);
            foundOne.totalEarn = req.body.totalEarn;
            foundOne.logs = req.body.logs;
            foundOne.save((err)=>{
                if(err) res.json(err);
                res.json(foundOne);
            })

        })
    }
}

