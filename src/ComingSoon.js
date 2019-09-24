import { withRouter } from "react-router";
import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Logo from "./assets/images/logo.svg";
const ComingSoon = () => {


  return (
    <Fragment>
      <section className="comingsoon">
        <Link  className="comingsoon__logo-wrapper" to="/">
          <img className="comingsoon__logo img--responsive" src={Logo} />
        </Link>
        <h2 className="comingsoon__header">Coming Soon</h2>
        <div className="comingsoon__card">
            <Grid>
              <Row>
                <Col xs={12} md={6}>
            coming soon
                </Col>
</Row>
            </Grid>

        </div>

      </section>
    </Fragment>
  );
};

export default withRouter(ComingSoon);
