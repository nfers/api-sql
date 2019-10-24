const Excercises = require('../models/Exercises');

module.exports = {
    async index(req, res) {
        const exerc = await Excercises.findAll();

        return res.json(exerc);
    }, 
    async store(req, res) {
        const { description, limbs } = req.body;

        const exercise = await Excercises.create({ 
            description, limbs
        });
        return res.json(exercise);
    },
    async findOne(req, res) {
        const exercise = { description, limbs } = req.params.id;
        console.log(req.params);

        return res.json(exercise);
    },    
    async update(req, res) {
       var id = parseInt(req.params.id);
       var updatedExercise = req.body; 
       if(Excercises["exercicio" + id] != null){
         // update data
         Excercises["exercicio" + id] = updatedExercise;

         res.end("Update Successfully! \n" + JSON.stringify(updatedExercise, null, 4));
       }else{
         res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedExercise, null, 4));
       }
     },
     



}