function errorHandler (err, req, res, next) {
  if(err.name === 'UnauthorizedError') {
    // jwt auth error
    res.status(401).json( { message: 'O usuário não está autorizado'});
  }

  if (err.name === 'ValidationError') {
    // validation error
    return res.status(401).json({ message: err });
  }

  // default to 500 server error
  return res.status(500).json(err);
}

module.exports = errorHandler;