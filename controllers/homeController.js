class HomeController {

  static getHome(req, res) {
    let alert = req.query
    res.render('home', {alert})
  }


}

module.exports = HomeController