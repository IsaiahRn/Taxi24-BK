
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
    const { amount } = req.body;
    if ((amount % 1) !== 0) {
      return res.status(400).json({ status: 400, message: 'You must enter valid amount!' });
    }
    return next();
  }

  static validateString(req, res, next) {
    const { location } = req.params;
    const regexString = /(.*[a-zA-Z].*)/;
    if (!regexString.test(location)) {
      return res.status(400).json({ status: 400, message: 'Location must be a string' });
    }
    return next();
  }

  static validateCreateTrip(req, res, next) {
    const {
      startLocation, endLocation, driverId, riderId,
    } = req.body;
    const errors = [];
    const regexId = /(^[0-9]*$)/;
    if (startLocation === null || endLocation === null || driverId === null || riderId === null) {
      errors.push('startLocation, endLocation, driverId or riderId shouldn\'t be empty');
    } else if (startLocation === undefined
      || endLocation === undefined
      || driverId === undefined
      || riderId === undefined
    ) {
      errors.push('startLocation, endLocation, driverId or riderId should be valid');
    } else if (startLocation.length <= 3 || endLocation.length <= 3) {
      errors.push('title length should be not less than 5 and body length shouldn\'t be less than 20');
    } else if (regexId.test(driverId) === false || regexId.test(riderId) === false) {
      errors.push('driverId and riderId should not contain special character');
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    return next();
  }
}
export default ValidationMiddleware;
