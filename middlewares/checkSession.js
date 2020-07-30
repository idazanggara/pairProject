function checkSession(req, res, next) {
  if(req.session.userId) {
    next()
  } else {
    res.redirect(`/?msg=Silahkan Login terlebih dahulu&type=danger`)
  }
}

module.exports = checkSession