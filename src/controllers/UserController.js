const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, birth } = req.body;

        const user = await User.create({ name, email, birth });

        return res.json(user);
    }
};