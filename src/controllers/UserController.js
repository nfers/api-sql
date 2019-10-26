const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },
    async store(req, res) {
        const { name, email, birth } = req.body;

        const userC = await User.create({ 
            name, 
            email, 
            birth 
        })
        .then(newUser => {
            console.log(`Usuário ${newUser.name}, Email ${newUser.email} com ID ${newUser.id} foi criado com sucesso.`);
          });
        
        return res.json(userC);        
    }
};