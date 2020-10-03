import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

const tripData = {
  startLocation: 'kagugu',
  endLocation: 'Gakinjiro',
  driverId: 1,
  riderId: 1,
};

describe('TRIP API', () => {
  describe('/POST trips', () => {
    it('should create a trip', () => {
      chai.request(app)
        .post('/api/v1/trips')
        .send(tripData)
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('tripDetails');
          expect(body.message).to.equals('Trip created successfully');
        });
    });
  });

  describe('/PUT trips', () => {
    it('should complete a trip', () => {
      chai.request(app)
        .put('/api/v1/trips/complete/2/5000')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('completedTrip');
          expect(body).to.have.property('amount');
          expect(body).to.have.property('invoice');
        });
    });
  });

  describe('/GET trips', () => {
    it('should get 3 closest drivers', () => {
      chai.request(app)
        .get('/api/v1/trips/active')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('activeTrip');
          expect(body.activeTrip[0]).to.have.property('id');
          expect(body.activeTrip[0]).to.have.property('startLocation');
          expect(body.activeTrip[0]).to.have.property('endLocation');
          expect(body.activeTrip[0]).to.have.property('driverId');
          expect(body.activeTrip[0]).to.have.property('riderId');
          expect(body.activeTrip[0]).to.have.property('completed');
          expect(body.message).to.equals('successfully returned active trips');
        });
    });
  });
});
