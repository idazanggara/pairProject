const { User, Item, Cart } = require('../models/index.js')
const formatMoney = require('../helpers/formatMoney.js')
const nodemailer = require('nodemailer')

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
                //console.log(totalCart)
                CartController.sendEmail(data.email, data.username)
                const msg = `Belanja berhasil. Silahkan ditunggu untuk dikirimkan dan Silahkan Cek Email Anda`
                res.redirect(`/store?msg=${msg}&type=success`)
              })
              .catch((err)=>{
                res.send(err)
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
  static sendEmail(email, name){
    //step 1
    //call transporter and authenticator
    let transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
          user: '',
          pass: ''
          //silahkan diisi, ini bisa diisi langung, bisa juga diisi dengan dotenv:
          //kalo gamau langsung coba liat dokumentasi dotenv
          //call with process.env.
          //.env di ignore
          //di dalem .env isi :
          //PASSWORD:
          //EMAIL:
          //referensi: https://www.youtube.com/watch?v=Va9UKGs1bwI&t
      }
  })
    //step 2 define delivery path
    let mailOptions = {
      from: '',
      //jangan lupa diisi from-nya
      to: `${email}`,
      subject: 'Terima Kasih!',
      text: `Halo ToSeMol's family! Terimakasih ya ${name} telah berbelanja di website kami. Pesanan anda akan kami proses dan kirim segera!`
    }
      //IMPORTANT!
    //Before sending, check you email provider regarding the authority for nodemailer use
    //for an example, you must turn on this feature if you use gmail: https://myaccount.google.com/lesssecureapps

    //Step 3 (Time to send it!)

    transporter.sendMail(mailOptions, (err, data)=>{
      if (err){
          console.log(err)
      } else {
          console.log('hooray! email is sent!')
      }
    })
  }
}

module.exports = CartController