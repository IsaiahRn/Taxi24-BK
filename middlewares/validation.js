
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

  static validateAmount(req, res, next) {
    const { amount } = req.params;
    if ((amount % 1) !== 0) {
      return res.status(400).json({ status: 400, message: 'You must enter valid amount!' });
    }
    return next();
  }
}
export default ValidationMiddleware;
