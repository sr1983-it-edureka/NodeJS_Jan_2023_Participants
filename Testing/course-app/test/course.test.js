
const chai = require("chai");

const app = require("../app");

const chaiHttp = require("chai-http");

const should = chai.should();

chai.use(chaiHttp);


describe("Courses", () => {

  describe("Courses Listing ", () => {

    it("should return the default 3 courses", (done) => {

      const path = "/courses/list";

      chai.request(app)
        .get(path)
        .end((err, res) => {

          // console.log("Res", JSON.stringify(res.body));

          res.should.have.status(200);

          res.body.should.be.a('array');

          res.body.length.should.be.eql(3);

          done();
        })
    })

  })

  describe("Courses New", () => {

    it("should create a new course", () => {
      
      const path = "/courses";

      chai.request(app)
        .post(path)
        .send({
          "name": "Data Science",
          "duration": "1 year",
          "rating" : 4.4
        })
        .end( (err, res) => {

          res.should.have.status(200);

          res.body.should.be.a('object');

          res.body.should.have.property("message");
          res.body.should.have.property("course");

          res.body.should.have.property("message").eql("INSERTED SUCCESSFULLY");


          res.body.course.should.have.property("id");
          res.body.course.should.have.property("name");
          res.body.course.should.have.property("duration");
          res.body.course.should.have.property("rating");

        })

    })
  })


  // sign-in
  // req.cookies.jwt

  // /tasks
  // .setCookie("jwt", )

})