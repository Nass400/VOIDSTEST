const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Forecasts", () => {
  it("it should GET all forecasts with the given location", (done) => {
    chai
      .request(server)
      .get("/forecasts/Munich")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body[0].should.have.property("date");
        res.body[0].should.have.property("location").eql("Munich");
        res.body[0].should.have.property("forecasted_sales_quantity");
        done();
      });
  });
});
describe('GET /forecasts', () => {
  it('should return all forecasts', async () => {
      const res = await request(app)
          .get('/forecasts');

      expect(res.statusCode).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body[0]).to.have.property('date');
      expect(res.body[0]).to.have.property('location');
      expect(res.body[0]).to.have.property('forecasted_sales_quantity');
  });
});