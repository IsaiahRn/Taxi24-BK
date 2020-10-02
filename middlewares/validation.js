
/**
 * @exports ValidationMiddleware
 * @class ValidationMiddleware
 * @description a class to validate paramaters
 * */
class ValidationMiddleware {
  static validateId(req, res, next) {
    const { id } = req.params;
    if ((id % 1) !== 0) {
      return res.status(400).json({ status: 400, message: 'ID must be number!' });
    }
    return next();
  }
}
export default ValidationMiddleware;
