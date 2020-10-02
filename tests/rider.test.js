import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('RIDER API', () => {
  describe('/GET riders', () => {
    it('should get All riders', (done) => {
      chai.request(app)
        .get('/api/v1/riders')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('riders');
          expect(body.message).to.equals('successfully returned riders');
          done();
        });
    });
  });

  describe('/GET riders', () => {
    it('should get a single rider', (done) => {
      chai.request(app)
        .get('/api/v1/riders/2')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('specifRider');
          done();
        });
    });
  });

  describe('/GET riders', () => {
    it('should get closest riders', (done) => {
      chai.request(app)
        .get('/api/v1/riders/near/Peter')
        .end((err, res) => {
          const { status, body } = res;
          expect(status).to.equal(200);
          expect(body).to.have.property('message');
          expect(body).to.have.property('closest');
          expect(body.closest[0]).to.have.property('names');
          expect(body.closest[0]).to.have.property('Location');
          expect(body.message).to.equals('successfully returned 3 closest drivers');
          done();
        });
    });
  });
});
