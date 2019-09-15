import React, { Component, Fragment } from "react";
import { FaTasks, FaComments, FaUserClock, FaFile } from "react-icons/fa";
import { Grid, Row, Col } from "react-flexbox-grid";

import Files from "./assets/images/files-2x.png";
import Dashboard from "./assets/images/dashboard-2x.png";
import Team from "./assets/images/team-2x.png";
import Map from "./assets/images/map-2x.png";
import List from "./assets/images/list-2x.png";

import Members from "./assets/images/members-2x.png";
import Group from "./assets/images/group.png";

import Search from "./assets/images/search.png";
import CreateTeam from "./assets/images/create-team.png";
import AddMembers from "./assets/images/add-member.png";

import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

//import Teams from "../components/Teams";


class Landing extends Component {

  render() {
    return (
      <Fragment>
        <Nav />

        <section className="hero">

          <Grid>
            <Row>
              <Col className="hero__left" xs={12} md={5}>
                <div className="hero__inner">
                  <h1 className="hero__header">Build it better together</h1>
                  <p className="hero__description">
                    Create, recruit, and grow a team of unique makers from a variety of fields capable of tackling any project together.
                  </p>
                  <Link to="./SignUp">
                    <button className="hero__cta btn btn--lg  btn--primary">
                      Find your team
                    </button>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div className="hero__img-wrapper">
                  <img className="responsive--img" src={Map} />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="list">
          <Grid className="list__inner">
            <Row>

              <Col md={6} className="list__image-wrapper"><img className="list__image responsive--img" src={List} />
              </Col>
              <Col md={6} className="list__features-wrapper">
                <div className="list__feature">
                  <img className="list__feature-img img-responsive" src={Search} />
                  <div className="list__feature-inner">
                    <p className="list__feature-header">Find a team</p>
                    <p class="list__feature-body">Browse teams that are accepting invitations and join them.</p>
                    {false && <p class="list__feature-body">Browse MakerTeams listings to find all teams accepting invitations for you to join. Use advanced search features to narrow it down to the team that will be the best fit for you.</p>}
                  </div>
                </div>
                <div className="list__feature">
                  <img className="list__feature-img img-responsive" src={CreateTeam} />

                  <div className="list__feature-inner">
                    <p className="list__feature-header">Create a team</p>
                    <p className="list__feature-body">Can't find the right team for you? Create your own. </p>

                  </div>
                </div>
                <div className="list__feature">
                  <img className="list__feature-img img-responsive" src={AddMembers} />

                  <div className="list__feature-inner">

                    <p className="list__feature-header">Grow your team</p>
                    <p class="list__feature-body">Recruit talent or accept invite requests to fill out your team.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="teams">
          <Grid>
            <Row>
              <Col>
                <h2 className="teams__header">Assemble the perfect team</h2>
                <p className="teams__description">
                  Are you a front-end developer that has trouble implementing
                  server-side logic? Or a database admin with no eye for design?
                  Find your development dream team and take on projects you
                  couldn't do alone.
      </p>
              </Col>
            </Row>
          </Grid>
          <div className="teams__middle">
            <Grid>
              <Row>
                <p className="teams__typing-sentence">My team needs a <span className="teams__typing"><TypistLoop interval={3000}>
                  {[
                    'Digital Marketer',
                    'Front End Developer',
                    'Graphic Designer',
                    'Database Administrator',
                    'UX Designer',
                    'Product Manager'

                  ].map(text => <Typist className="teams__typing-text" key={text} cursor={{ blink: true }} startDelay={1000}>{text}</Typist>)}
                </TypistLoop></span>
                </p>
              </Row>
            </Grid>

          </div>
          <div className="teams__bottom">
            <Grid>
              <Row>
                <Col>
                  <img className="teams__image responsive--img" src={Team} />
                </Col>
              </Row>
            </Grid>
          </div>

        </section>

        <section className="members">
          <Grid>
            <Row>
              <Col>
                <h2 className="members__header">Manage your members</h2>
                <p className="members__description">
                  Send and recieve invitations to your team, create ranks and
                  promote members, and manage permissions for each role.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="members__img-wrapper">
                  <img className="responsive--img" src={Members} />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="dashboard">

          <div className="dashboard__top">
            <Grid>
              <Row>
                <Col>
                  <img className="dashboard__image responsive--img" src={Dashboard} />
                </Col>
              </Row>
            </Grid>
          </div>
          <Grid>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="dashboard__feature">
                  <h3 className="dashboard__feature-title">Create projects</h3>
                  <p>View all of your team's projects for quick and easy collaboration and organization.</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="dashboard__feature">
                  <h3 className="dashboard__feature-title">Assign tasks</h3>
                  <p>Itemize and prioritize tasks to be completed to make sure you meet all of your deadlines. </p>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="dashboard__feature">
                  <h3 className="dashboard__feature-title">Organize teams</h3>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="dashboard__feature">
                  <h3 className="dashboard__feature-title">Manage schedules</h3>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>

        <section className="assets">
          <Grid>
            <Row>
              <Col className="assets__left" xs={12} md={7}>
                <div className="assets__inner">
                  <h2 className="assets__header">Share your assets</h2>
                  <p className="assets__description">
                    Using our integrated suite of collaboration tools you can
                    chat, share code, plan tasks, and log hours to keep your
                    projects and team members organized and on-task.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="assets__img-wrapper">
                  <img className="responsive--img" src={Files} />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="group">
          <Grid>
            <Row>
              <Col className="group__header-wrapper">
                <h2 className="group__header">Start your <span className="group__header-name">MakerTeam</span> today</h2>
              </Col>
            </Row>
            <Row>
              <Col className="group__logo-wrapper">

                <img className="responsive--img group__logo" src={Group} />
              </Col>
            </Row>
            <Row>
              <Col className="group__cta-wrapper">
                <Link to="./SignUp">
                  <button className="group__cta btn btn--lg  btn--secondary">
                    Register your account
                    </button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="footer">

        </section>
      </Fragment>
    );
  }
}

export default Landing;
