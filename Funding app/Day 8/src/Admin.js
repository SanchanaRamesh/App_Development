import React from 'react'
import './Admin.css'
const Admin = () => {
  return (
    <div className='body1'>
    <>
    <aside
      className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
      id="show-side-navigation1"
    >
      <i
        className="uil-bars close-aside d-md-none d-lg-none"
        data-close="show-side-navigation1"
      />
      <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
        <img
          className="rounded-pill img-fluid"
          src=""
          alt=""
        />
        <div className="ms-2">
          <h5 className="fs-6 mb-0">
            <a className="text-decoration-none" href="/dashboard">
              Sanchana
            </a>
          </h5>
          <p className="mt-1 mb-0">sanchanaramesh27@gmail.com</p>
        </div>
      </div>
      <div className="search position-relative text-center px-4 py-3 mt-2">
        <input
          type="text"
          className="form-control w-100 border-0 bg-transparent"
          placeholder="Search here"
        />
        <i className="fa fa-search position-absolute d-block fs-6" />
      </div>
      <ul className="categories list-unstyled">
        <li className="has-dropdown">
          <i className="uil-estate fa-fw" />
          <a href="#"> Dashboard</a>
        </li>     
        <li className="has-dropdown">
          <i className="uil-bag" />
          <a href="#"> Projects</a>
        </li>
      
        <li className="has-dropdown">
          <i className="uil-chart-pie-alt" />
          <a href="#"> Videos&Images</a>
          
        </li>
        <li className="has-dropdown">
          <i className="uil-panel-add" />
          <a href="/analysis"> Charts</a>
        </li>
        
      </ul>
    </aside>
    <section id="wrapper">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid mx-2">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggle-navbar"
              aria-controls="toggle-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="uil-bars text-white" />
            </button>
            <a className="navbar-brand" href="#">
              Disaster Relief  Crowdfunding App
             <span className="main-color"> Admin View</span>
            </a>
          </div>
    
        </div>
      </nav>
      <div className="p-4">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Welcome To Ray Of Hope!</h1>
            <p className="mb-0">
              Hey Sanchana, Let's Be The Nature Warriors!
            </p>
          </div>
        </div>
        <section className="statistics mt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                <i className="uil-envelope-shield fs-2 text-center bg-primary rounded-circle" />
                <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <h3 className="mb-0">5,20,300</h3>{" "}
                    <span className="d-block ms-2">Amount</span>
                   </div>
                    <p className="fs-normal mb-0">Donated</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                <i className="uil-file fs-2 text-center bg-danger rounded-circle" />
                <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <h3 className="mb-0">360</h3>{" "}
                    <span className="d-block ms-2">Amount</span>
                  </div>
                  <p className="fs-normal mb-0">Beneficiaries</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box d-flex rounded-2 align-items-center p-3">
                <i className="uil-users-alt fs-2 text-center bg-success rounded-circle" />
                <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <h3 className="mb-0">1000</h3>{" "}
                    <span className="d-block ms-2">Voluntary</span>
                  </div>
                  <p className="fs-normal mb-0">Views</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="admins mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                {/* <h4>Admins:</h4> */}
                <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse3.mm.bing.net/th?id=OIP.dNZSOapmrLWO7FahjoMxLgHaE7&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">Deconstruction</h3>
                    <p className="mb-0">
                    Deconstruction is simply building disassembly and material salvage.
                    </p>
                  </div>
                </div>
                <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse4.mm.bing.net/th?id=OIP.1djBDYF15PABtpyG1OXyUgHaEO&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">Forest Fire</h3>
                    <p className="mb-0">
                     Uncontrolled fire occurring in forests.Causes respiratory issues on living beings.
                    </p>
                  </div>
                </div>
                <div className="admin d-flex align-items-center rounded-2 p-3">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse4.mm.bing.net/th?id=OIP.z3daW9BzVA3oc1A1qVzypAHaEK&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">Drought</h3>
                    <p className="mb-0">
                    A drought is a period of abnormally dry weather sufficiently prolonged for the lack of water
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                {/* <h4>Moderators:</h4> */}
                <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse2.mm.bing.net/th?id=OIP.oXXPVxY_REKBH0HWSH50vAHaE0&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">Flood</h3>
                    <p className="mb-0">
                    A flood is an overflow of water that submerges land 
                    </p>
                  </div>
                </div>
                <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse4.mm.bing.net/th?id=OIP.6pGN5V9Vgf-qkSBl-3A95AHaEK&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">Earth Quake</h3>
                    <p className="mb-0">
                    An earthquake is the shaking of the surface of the Earth 
                    </p>
                  </div>
                </div>
                <div className="admin d-flex align-items-center rounded-2 p-3">
                  <div className="img">
                    <img
                      className="img-fluid rounded-pill"
                      width={75}
                      height={75}
                      src="https://tse1.mm.bing.net/th?id=OIP.2CtPbY94fKkJJBNUQmydrwHaEJ&pid=Api&P=0&h=180"
                      alt="admin"
                    />
                  </div>
                  <div className="ms-3">
                    <h3 className="fs-5 mb-1">LandSlide</h3>
                    <p className="mb-0">
                    Landslides are caused by disturbances in the natural stability of a slope.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statis mt-4 text-center">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="box bg-primary p-3">
                <i className="uil-eye" />
                <h3>5,154</h3>
                <p className="lead">Page Views</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="box bg-danger p-3">
                <i className="uil-user" />
                <h3>700</h3>
                <p className="lead">User Registered</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <div className="box bg-warning p-3">
                <i className="uil-shopping-cart" />
                <h3>900</h3>
                <p className="lead">Peoples</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-success p-3">
                <i className="uil-feedback" />
                <h3>5,20,300</h3>
                <p className="lead">Transactions</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  </>
  
    </div>
  )
}

export default Admin