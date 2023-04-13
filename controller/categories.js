const category = require("../models/category");


exports.getCategories = (req, res, next) =>{
       res.status(200).json({
            success: true,
            data:"All category",
            user:req.userId,

        });
    };

exports.getCategory = (req , res, next) =>{
    res.status(200).json ({
        success:true ,
        data:`${req.params.id} ID tei category medeelliig uguh`,
    })
};

exports.createCategory = async (req , res, next) =>{
    console.log("data:", req.body);
    try{
        const Category = await category.create(req.body);
    res.status(200).json ({
        success:true ,
        data: Category,
    });
    }catch(err){
        const Category = await category.create(req.body);
        res.status(400).json ({
            success:false,
            error: err,
        });
    };


};


exports.updateCategory = (req , res, next) =>{
    res.status(200).json ({
        success:true ,
        data:`${req.params.id} ID tei category medeelliig uurchilluh`,
    })
};


exports.deleteCategory = (req , res, next) =>{
    res.status(200).json ({
        success:true ,
        data:`${req.params.id} ID tei category  ustgah`,
    })
}