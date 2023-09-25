import React from 'react'
import { Link } from 'react-router-dom'
const payment = () => {
  return (
    <div className='body5'>
    <>
    <title>Donating Hands - General Gifts</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
      crossOrigin="anonymous"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        .jumbotron {height: 10vh; background-color: #9e2e22;}\n        .header-text {color: white; font-size: 2.25em; font-weight: bold;}\n        .btn {white-space: normal;}\n        \n        #full-donation-form {padding: 0 0 5% 0;}\n        #submit-button {padding-bottom: 2%; padding-top: 1%;}\n        #gift-type {padding-bottom: 2%;}\n        #annual {padding-top: 1%;}\n        #donation-info {padding-bottom: 2%;}\n        #donor-info {padding-bottom: 2%;}\n        #payment-info {padding-bottom: 2%;}\n        #payment-type {padding-bottom: 5%; padding-top: 3%;}\n        #payment-options {padding-bottom: 2%; padding-top: 1%;}\n\n    "
      }}
    />
    <header className="jumbotron" id="logo-header">
      <span className="header-text">JOY OF GIVING..!</span>
    </header>
    <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Giving Is The Greatest Act Of Grace</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            <i>Always Give Without Remembering And Receive Without Forgetting.The Value Of Life Is Not In Its Duration,But In Its Donation You Are Not Important Because Of How Long You Live But You are Important Because Of How Effective You Live!</i>
          </p>
        </div>
      </div>
    </section>
    <div className="container">
      <section className="container" id="full-donation-form">
        <section id="menu">
          <div className="row">
            <div className="col-sm-12">
              <p>
                <strong>
                  Select The Type Of Donation You'd Like To Make Today.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section id="gift-type" className="container">
          <div className="row">
            <Link to ="/payment"
              className="btn btn-danger col-md-2 col-xs-12"
              href="splc-paypal.html"
              role="button"
            >
              General Gift
            </Link>
            <Link to="/payment1"
              className="btn btn-outline-danger col-md-2 col-xs-12"
              role="button"
            >
              Monthly Giving
            </Link>
            <Link to="/payment2"
              className="btn btn-outline-danger col-md-2 col-xs-12"
              href="splc-tribute-card.html"
              role="button"
            >
              Tribute Cards
            </Link>
          </div>
        </section>
        <section id="gift-type-description">
          <div className="row">
            <div className="col-sm-12">
              <p className="lead">
                You are about to make a donation{" "}
                <strong>
                  
                </strong>
                
              </p>
            </div>
          </div>
        </section>
        <section id="donation-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>DONATION AMOUNT</h3>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                
                    <button type="button" className="btn btn-secondary">
                      250
                    </button>
                    <button type="button" className="btn btn-secondary">
                      500
                    </button>
                    <button type="button" className="btn btn-secondary">
                      900
                    </button>
                    <button type="button" className="btn btn-secondary">
                      1000
                    </button>
                    <button type="button" className="btn btn-secondary">
                      5000
                    </button>
                  
              </div>
              <div className="row container">
                <div className="col-sm-4">
                  <div className="input-group">
                    <span className="input-group-addon" id="btnGroupAddon">
                      Other
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rs."
                      aria-describedby="btnGroupAddon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="donor-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>DONOR INFORMATION</h3>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="Your name"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="Initial"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-email-input"
                    className="col-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="email"
                      defaultValue="emails@splcenter.org"
                      id="example-email-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-email-input"
                    className="col-2 col-form-label"
                  >
                    Confirm Email
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="email"
                      defaultValue="emails@splcenter.org"
                      id="example-email-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Country
                  </label>
                  <div className="col-10">
                    <select className="form-control" id="exampleSelect1">
                      <option>India</option>
                      <option>United States</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Street Address
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="123 Street Name"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    City
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="City"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    State
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="State"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Phone Number
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="tel"
                      defaultValue="555-555-5555"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="payment-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>PAYMENT INFORMATION</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Card Number
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555-555-5555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Expiration Date
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="month"
                    defaultValue="2011-08"
                    id="example-month-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Security Code
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555 or 555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="summary">
          <div className="row">
            <div className="col-sm-12">
              <h3>SUMMARY CONFIRMATION</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                You are making a <strong>one-time</strong>fund donation{" "}
                <strong>Rs.5000</strong> to the landSlide disaster in Nilgiris through{" "}
                <strong>PayPal</strong>. After you review your information, please
                click "Donate Now" to process your funding. You will not be able to
                make changes to your donation on the next screen.
              </p>
            </div>
          </div>
          <div className="row" id="submit-button">
            <div className="col-md-6 col-sm-12 col-xs-12 mx-auto">
              <button type="submit" className="btn btn-danger col-sm-12 btn-lg">
                <h><b><span style={{color: 'white', backgroundColor: 'red'}}>Donate Now</span>{' '}</b></h>
              </button>
            </div>
          </div>
        </section>
        <footer>
  
        </footer>
      </section>
    </div>
  </>
  
    </div>
  )
}

export default payment