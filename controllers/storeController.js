const { Item,Cart } = require('../models/index.js')
const formatMoney = require('../helpers/formatMoney.js')

class StoreController{

  static page(req, res) {
    const alert = req.body
    Item.findAll({
      order: [['stock','DESC'],]
    })
    .then((data) => {
      res.render('store', {
        data,
        alert,
        formatMoney
      })
    })
    .catch((err) => {
      res.send(err)
    })
  }




}

module.exports = StoreController