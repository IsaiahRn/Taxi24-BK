import Util from '../utils/util';
import models from '../models';

const { Driver, Location } = models;

/**
 * @author Isaie Runoro
 * @exports DriverController
 * @class DriverController
 * @description Handles all related drivers functioanlities
 * */
class DriverController {
  // List of all drivers
  static async fetchAllDrivers(req, res) {
    try {
      const drivers = await Driver.findAll();
      return res.status(200).json({
        message: 'successfully returned all drivers',
        drivers,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch all drivers',
      });
    }
  }

  // Get a list of all available drivers
  static async fetchAvailableDrivers(req, res) {
    try {
      const availableDrivers = await Driver.findAll({
        where: { available: true },
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });
      return res.status(200).json({
        message: 'successfully returned available drivers',
        availableDrivers,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch available drivers',
      });
    }
  }

  // Get a list of all available drivers within 3 km for a specific location

  static async fetchAvailableDriversWithin3Km(req, res) {
    try {
      const { latitude, longitude } = req.query;
      if (!latitude || !longitude) {
        return res.status(400)
          .json({ message: 'location details are invalid' });
      }
      const available = await Driver.findAll({
        where: { available: true },
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });
      const availableNear3KmLocation = available.filter((driver) => {
        const {
          latitude: latitudeToCompare, longitude: longitudeToCompare,
        } = driver.dataValues.Location.dataValues;
        if (Util.getWithIn3Km(latitude, longitude, latitudeToCompare, longitudeToCompare) <= 3) {
          return driver;
        }
        return 0;
      });
      if (availableNear3KmLocation.length === 0) {
        return res.status(404)
          .json({ message: 'No drivers available within 3 Km' });
      }
      return res.status(200).json({
        message: 'successfully returned nearest drivers',
        availableNear3KmLocation,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch nearest drivers',
      });
    }
  }

  static async fetchDriverById(req, res) {
    try {
      const specificDriver = await Driver.findOne({
        where: { id: req.params.id },
      });
      if (!specificDriver) {
        return res.status(404)
          .json({ message: 'No drivers with that ID found' });
      }
      return res.status(200).json({
        message: 'successfully returned a driver',
        specificDriver,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch driver',
      });
    }
  }
}
export default DriverController;
