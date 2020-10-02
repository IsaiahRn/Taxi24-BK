import models from '../models';

const { Trip, Invoice } = models;

/**
 * @author Isaie Runoro
 * @exports TripController
 * @class TripController
 * @description Handles all related trip functianalities
 * */
class TripController {
  static async createTrip(req, res) {
    try {
      const {
        startLocation, endLocation, driverId, riderId,
      } = req.body;
      const tripDetails = await Trip.create({
        startLocation,
        endLocation,
        driverId,
        riderId,
      });
      return res.status(200).json({
        message: 'Trip created successfully',
        tripDetails,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to create a trip',
        error,
      });
    }
  }

  // complete a trip

  static async completeTrip(req, res) {
    try {
      const { amount, id } = req.params;
      const trip = await Trip.findAll({ where: { id } });

      if (trip.length === 0) {
        return res.status(400).send({ message: 'Entered trip not found' });
      }

      if (trip[0].completed) {
        return res.status(422).send({ message: 'Trip already completed!' });
      }
      const completedTrip = await Trip.update(
        { completed: true },
        { returning: true, where: { id: req.params.id } },
      );

      const invoice = await Invoice.create({
        amount,
        tripId: id,
      });

      return res.status(200).send({ completedTrip, amount, invoice });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to complete a trip',
        error,
      });
    }
  }

  // Get a list of active trip

  static async fetchAllActiveTrip(req, res) {
    try {
      const activeTrip = await Trip.findAll({ where: { completed: true } });
      return res.status(200).json({
        message: 'successfully returned active trips',
        activeTrip,
      });
    } catch (error) {
      return res.status(500).json({
        errorMsg: 'failed to fetch all active trip',
        error,
      });
    }
  }
}
export default TripController;
