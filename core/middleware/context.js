module.exports = (req, res, next) => {
  req.ctx = {};

  req.on('finish', () => {
    
  })

  next();
}