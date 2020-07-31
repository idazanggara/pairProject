function checkSessionBlockPath(req, res, next) {
    if(req.session.userId) {
        res.redirect(`/?msg=Anda telah login, harap logout terlebih dahulu&type=danger`)
    } else {
      next()
    }
  }
  
  module.exports = checkSessionBlockPath