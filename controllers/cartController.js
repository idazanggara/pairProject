const { User, Item, Cart } = require('../models/index.js')
const formatMoney = require('../helpers/formatMoney.js')

class CartController {

  static page(req, res) {
    const alert = req.query
    User.findOne({
      include: [{ model: Item }],
      where: {
        id: req.session.userId
      }
    })
      .then(data => {
        console.log(JSON.stringify(data,null,2),'>>>');
        res.render('cart', { data, alert, formatMoney })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static checkOut(req, res) {
    User.findOne({
      include: [{ model: Item }],
      where: {
        id: req.session.userId
      }
    })
      .then(data => {
        if (data.Items.length === 0) {
          const msg = `Keranjang belanjaan anda kosong`
          res.redirect(`/cart?msg=${msg}`)
        } else {
          const excItem = []
          for (let i = 0; i < data.Items.length; i++) {
            if (data.Items[i].stock < data.Items[i].Cart.amount) {
              excItem.push(data.Items[i].name)
            }
          }
          if (excItem.length === 0) {
            let dataObj = []
            let totalCart = 0
            for (let i = 0; i < data.Items.length; i++) {
              dataObj.push({
                id: data.Items[i].id,
                name: data.Items[i].name,
                stock: data.Items[i].stock - data.Items[i].Cart.amount,
                price: data.Items[i].price,
                amount: data.Items[i].Cart.amount
              })
              totalCart += data.Items[i].Cart.amount * data.Items[i].price
            }
            Item.bulkCreate(dataObj, { updateOnDuplicate: ["stock"] })
              .then(() => {
                return Cart.destroy({
                  where: {
                    UserId: req.session.userId
                  }
                })
              })
              .then(() => {
                return User.findByPk(req.session.userId)
              })
              .then(data => {
                // CartController.sendEmail(data.email, dataObj, totalCart)
                const msg = `Belanja berhasil. Silahkan ditunggu untuk dikirimkan dan Silahkan Cek Email Anda`
                res.redirect(`/store?msg=${msg}&type=success`)
              })
          } else {
            const msg = `${excItem.join(', ')} melebihi stock yang ada`
            res.redirect(`/cart?msg=${msg}`)
          }
        }
      })
      .catch(err => {
        res.send(err)
      })
  }


  static delete(req, res) {
    Cart.destroy({
      where: { ItemId: Number(req.params.id) }
    })
      .then(() => {
        const msg = 'Barang berhasil dihapus'
        res.redirect(`/cart?msg=${msg}`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = CartController