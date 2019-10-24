const BodyData = require('../models/BodyData');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'bodydata' }
        });

        return res.json(user);
    },
    async store(req, res) {
        const { user_id } = req.params;

        const { 
            weight, 
            height, 
            evaluation_date 
        } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: "Ooops, o usuário infomado não existe:  " + user_id });          
        }

        const evaluation = await BodyData.create({
            weight, 
            height, 
            evaluation_date, 
            user_id  
        });

        return res.json(local)
    }
};

