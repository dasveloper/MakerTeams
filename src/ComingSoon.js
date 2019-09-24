import { withRouter } from "react-router";
import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Logo from "./assets/images/logo.svg";
import { CheckCircle } from 'react-feather';

const ComingSoon = () => {


  return (
    <Fragment>
      <section className="comingsoon">
        <Link className="comingsoon__logo-wrapper" to="/">
          <img className="comingsoon__logo img--responsive" src={Logo} />

        </Link>
        <h2 className="comingsoon__header">Coming Soon</h2>

        <div className="comingsoon__card">
          <Grid>
            <Row>
              <Col xs={12}>
                <div class="comingsoon__alert"><CheckCircle className="comingsoon__icon" /><p className="comingsoon__text">Account created successfully!</p></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p class="comingsoon__body">Your account has successfully been created. Unfortunately that's all there is to do for now. You'll be the first to know when we go live and you can start your MakerTeam! Until then spread the news and start gathering potential teammates.</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="comingsoon__home" >
                <Link to="/"><button type="button" className=" btn btn--lg  btn--primary">
                  Return Home
                 </button> </Link>
              </Col>
            </Row>
          </Grid>

        </div>

      </section>
    </Fragment>
  );
};

export default withRouter(ComingSoon);
