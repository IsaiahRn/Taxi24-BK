import models from '../models';
import Util from '../utils/util';


const { Rider, Driver, Location } = models;

/**
 * @author Isaie Runoro
 * @exports RiderController
 * @class RiderController
 * @description Handles all related riders functionalities
 * */
class RiderController {
  // Fetch(Get) all riders
  static async fetchAllRiders(req, res) {
    try {
      const riders = await Rider.findAll();
      return res.status(200).json({
        message: 'successfully returned riders',
        riders,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch riders',
        error,
      });
    }
  }

  // Fetch(Get) a specific rider by id
  static async fetchRiderById(req, res) {
    try {
      const specifRider = await Rider.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).json({
        message: 'successfully returned a rider',
        specifRider,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch rider',
        error,
      });
    }
  }

  // For a specific driver, fetch a list of the 3 closest drivers
  static async fetchNearRider(req, res) {
    try {
      const { name } = req.params;
      const providedRider = await Driver.findAll({
        where: { names: name },
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });

      if (providedRider.length === 0) {
        return res.status(404)
          .send({ message: 'Provided Riders not found!' });
      }

      const allRiders = await Driver.findAll({
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['names'],
      });

      const closest = allRiders.filter((rider) => {
        const {
          latitude: latitudeToCompare, longitude: longitudeToCompare,
        } = rider.dataValues.Location.dataValues;
        if ((providedRider[0].id !== rider.dataValues.id) && Util.getWithIn3Km(
          providedRider[0].Location.latitude, providedRider[0].Location.longitude,
          latitudeToCompare, longitudeToCompare,
        )) {
          return rider;
        }
        return {};
      });
      if (closest.length === 0) {
        return res.status(404)
          .send({ message: 'No closest riders' });
      }
      return res.status(200).json({
        message: 'successfully returned 3 closest drivers',
        closest,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch 3 closest drivers',
        error,
      });
    }
  }
}
export default RiderController;
