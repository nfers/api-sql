const { Op } = require('sequelize');
const User = require('../models/User');
//const moment = require('moment')

var mes = '07'
var ano = '1995'

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            }
        })

        return res.json(users);
    },

    async showBirth(req, res) {
        const dateBirth = await User.findAll({
            attributes: ['name', 'birth'],
            where: {
                birth: {
                   [Op.gte]: new Date(ano, mes, 1)
            }
        }
        })
        
        return res.json(dateBirth);
    }
}