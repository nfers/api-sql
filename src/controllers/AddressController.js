const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const userF = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        return res.json(userF);
    },
    async store(req, res) {
        const { user_id } = req.params;

        const {
            zipcode,
            street,
            number
        } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: "Ooops, o usuário infomado não existe:  " + user_id });
        }

        const local = await Address.create({
            zipcode,
            street,
            number,
            user_id
        });

        return res.json(local)
    }
};


