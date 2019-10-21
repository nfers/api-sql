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


    }
}