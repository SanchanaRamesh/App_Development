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
            <h4>New Projects</h4>
            <p>Add Images and Videos</p>
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
              Display Analytics About The Channel{" "}
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
          <div className="analytics">
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-eye" />
              </div>
              <div className="analytic-info">
                <h4>Total Views</h4>
                <h1>10.3M</h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-clock" />
              </div>
              <div className="analytic-info">
                <h4>Watch Time(hrs)</h4>
                <h1>
                  20.9k <small className="text-danger"></small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-users" />
              </div>
              <div className="analytic-info">
                <h4>Subscribers</h4>
                <h1>
                  1.3k <small className="text-success"></small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-heart" />
              </div>
              <div className="analytic-info">
                <h4>Favourites</h4>
                <h1>3.4M </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="block-grid">
            <div className="revenue-card">
              <h3 className="section-head">TOTAL FUNDS</h3>
              <div className="rev-content">
                <img
                  src="https://img.freepik.com/free-photo/brunette-businesswoman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-smiles-widely_197531-346.jpg?w=360&t=st=1695552033~exp=1695552633~hmac=a686428f233e9c27210339bee7b7385e3b0de1d6b37644395b49e97b5a61cc0f"
                  alt="profile"
                />
                <div className="rev-info">
                  <h3>SANCHANA</h3>
                  <h1>
                    3.5M <small>Subscribers</small>
                  </h1>
                </div>
                <div className="rev-sum">
                  <h4>Total Amount</h4>
                  <h2>5,20,300</h2>
                </div>
              </div>
            </div>
            <div className="graph-card">
              <h3 className="section-head">GRAPH</h3>
              <div className="graph-content">
                <div className="graph-head">
                  <div className="icon-wrapper">
                    
                  </div>
                  <div className="graph-select">
                    
                  </div>
                </div>
                <div className="graph-board">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.fV_o5vymBV8MislYFxcfWQHaHa&pid=Api&P=0&h=180"  />
                  
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