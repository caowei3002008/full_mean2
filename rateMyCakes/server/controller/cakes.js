
var mongoose = require("mongoose");
var Cakes = mongoose.model('Cakes');

module.exports = {
    create: (req,res) => {
        var newCake = new Cakes(req.body);
        newCake.save((err)=> {
            if (err) {
                res.json(err);
            }
            else {
                res.json(newCake);
            }
        })
    },

    listAllCakes: (req , res) => {
        Cakes.find().exec((err,allCakes) => {
            if(err){
                res.json(err);
            }else{
                res.json(allCakes);
            }
        })
    },
    update: (req,res) => {
        Cakes.findById({_id: req.body.id}, (err, foundOne) =>{
            if(err){
                res.json(err);
            }else{
                foundOne.rate_comment = req.body.rate_comment;
                // foundOne.comment = req.body.comment;
                foundOne.save((err) => {
                    if(err){
                        res.json(err);
                    }else{
                        res.json(foundOne);


                    }
                })
            }
        })
    },
    findOne: (req,res) => {
        Cakes.findById({_id: req.body.id}, (err,foundOne) =>{
            if(err){
                res.json(err);
            }else{
                res.json(foundOne);
            }
        })
    }
}