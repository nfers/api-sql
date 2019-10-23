const Address = require('../models/Address');

module.exports = {
    async store(req, res) {
        const { 
            zipcode, 
            street, 
            number 
        } = req.body;

        const local = await Address.create({
            zipcode, 
            street, 
            number  
        });

        return res.json(local)
    }
};


