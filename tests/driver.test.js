import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();

chai.use(chaiHttp);
const { expect } = chai;

describe('Driver API', () => {
  describe('/GET drivers', () => {
    it('should get All Drivers', (done) => {
      chai.request(app)
        .get('/api/v1/drivers')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('drivers');
          expect(body.drivers[0]).to.have.property('names');
          expect(body.drivers[0]).to.have.property('available');
          expect(body.drivers[0]).to.have.property('id');
          expect(body.drivers[0]).to.have.property('createdAt');
          expect(body.drivers[0]).to.have.property('LocationId');
          expect(body.message).to.equals('successfully returned all drivers');
          done();
        });
    });
  });

  describe('/GET drivers', () => {
    it('should get All available Drivers', (done) => {
      chai.request(app)
        .get('/api/v1/drivers/available')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('availableDrivers');
          expect(body.availableDrivers[0]).to.have.property('id');
          expect(body.availableDrivers[0]).to.have.property('names');
          expect(body.availableDrivers[0]).to.have.property('Location');
          expect(body.message).to.equals('successfully returned available drivers');
          done();
        });
    });
  });

  describe('/GET drivers', () => {
    it('should get a list of all available drivers within 3 km', (done) => {
      chai.request(app)
        .get('/api/v1/drivers/availableNear?latitude=1.9062&longitude=30.1737')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('availableNear3KmLocation');
          expect(body.availableNear3KmLocation[0]).to.have.property('id');
          expect(body.availableNear3KmLocation[0]).to.have.property('names');
          expect(body.availableNear3KmLocation[0]).to.have.property('Location');
          expect(body.message).to.equals('successfully returned nearest drivers');
          done();
        });
    });
  });

  describe('/GET drivers', () => {
    it('should not get a list of all available drivers within 3 km', (done) => {
      chai.request(app)
        .get('/api/v1/drivers/availableNear')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(400);
          expect(body).to.have.property('message');
          expect(body.message).to.equals('location details are invalid');
          done();
        });
    });
  });

  describe('/GET/:id driver', () => {
    it('should not get a driver by ID', (done) => {
      chai.request(app)
        .get('/api/v1/drivers/50')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(404);
          expect(body).to.have.property('message');
          expect(body.message).to.equals('No drivers with that ID found');
          done();
        });
    });
  });

  describe('/GET/:id driver', () => {
    it('should get a driver by ID', (done) => {
      chai.request(app)
        .get('/api/v1/drivers/1')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('specificDriver');
          expect(body.message).to.equals('successfully returned a driver');
          done();
        });
    });
  });

  describe('/GET drivers', () => {
    it('shouldnt get all drivers', (done) => {
      chai.request(app).get('/api/drivers/xyz').end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });
});
