import React from 'react'
import './Analysis.css'
const Analysis = () => {
  return (
    <div id='body'>
    <>
    <input type="checkbox" name="" id="menu-toggle" />
    <div className="overlay">
      <label htmlFor="menu-toggle"></label>
    </div>
    <div className="sidebar1">
      <div className="sidebar-container1">
      
        
        <div className="sidebar-card">
          <div className="side-card-icon">
            <span className="lab la-codiepie" />
          </div>
          <div>
            <h4>Advertisment</h4>
            <p>Add ads to your videos to earn money</p>
          </div>
          <button className="btn btn-main btn-block">Create now</button>
        </div>
      </div>
    </div>
    <div className="main-content">
      <header>
        <div className="header-wrapper">
          <label htmlFor="menu-toggle">
            <span className="las la-bars" />
          </label>
          <div className="header-title">
            <h1>ANALYTICS</h1>
            <p>
              Displaying the analysis{" "}
              <span className="las la-chart-line" />
            </p>
          </div>
        </div>
        <div className="header-action">
          <button className="btn btn-main">
            <span className="las la-video" />
            UPLOAD
          </button>
        </div>
      </header>
      <main>
        <section>
          <h3 className="section-head">OVERVIEW</h3>
          <div className="analytics">
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-eye" />
              </div>
              <div className="analytic-info">
                <h4>INDIVIDUAL</h4>
                <h1>10.3M</h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-clock" />
              </div>
              <div className="analytic-info">
                <h4>FUND RAISERS</h4>
                <h1>
                  20.9k <small className="text-danger">5%</small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-users" />
              </div>
              <div className="analytic-info">
                <h4>DONARS</h4>
                <h1>
                  1.3k <small className="text-success">12%</small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-heart" />
              </div>
              <div className="analytic-info">
                <h4>BENEFITIERS</h4>
                <h1>3.4M </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="block-grid">
            <div className="revenue-card">
              <h3 className="section-head">Total Revenue</h3>
              <div className="rev-content">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQF9R2lxnH4fOw/profile-displayphoto-shrink_800_800/0/1639841285929?e=1654128000&v=beta&t=QvocDiNfivbaAzHjsX9fnl9eFa1ZSo4SBHeH4jZANEk"
                  alt="profile"
                />
                <div className="rev-info">
                  <h3>SANCHANA</h3>
                  <h1>
                    3.5M <small>Subscribers</small>
                  </h1>
                </div>
                <div className="rev-sum">
                  <h4>Total income</h4>
                  <h2>$70.859</h2>
                </div>
              </div>
            </div>
            <div className="graph-card">
              <h3 className="section-head">Graph</h3>
              <div className="graph-content">
                <div className="graph-head">
                  <div className="icon-wrapper">
                    <div className="icon">
                      <span className="las la-eye text-main" />
                    </div>
                    <div className="icon">
                      <span className="las la-clock text-success" />
                    </div>
                  </div>
                  <div className="graph-select">
                    <select name="" id="">
                      <option value="">OCTOBER</option>
                    </select>
                  </div>
                </div>
                <div className="graph-board">
                  <canvas id="revenueChart" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
  
    </div>
  )
}

export default Analysis
