import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard2 = () => {
  return (
    <>
    <div className="task-block">
    {/* task-card 1*/}
    <div className="task-card">
      <div className="task-header">
        <h3>Storm In Kerala</h3>
        <p className="task-type">Due Date : March 23, 2024</p>
      </div>
      <p className="task-date">
        Amount Donated : 22,000
      </p>
      <div className="task-footer">
        <figure>
          <img
            src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/rebecca_portrait.png?raw=true"
            alt="profile_picture"
            className="task-person-img"
          />
          <figcaption className="task-person-name">
           Athvi
          </figcaption>
        </figure>
        
        <p className="task-status complete">
        <Link to ="/payment">Donate</Link></p>
      </div>
    </div>
    
</div>
<div className="task-block">
{/* task-card 1*/}
<div className="task-card">
  <div className="task-header">
    <h3>Flood In Gujarat</h3>
    <p className="task-type">Due Date : December 23, 2024</p>
  </div>
  <p className="task-date">
    Amount Donated : 14,124
  </p>
  <div className="task-footer">
    <figure>
      <img
        src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/george_portrait.png?raw=true"
        alt="profile_picture"
        className="task-person-img"
      />
      <figcaption className="task-person-name">
      Karna
      </figcaption>
    </figure>
    
    <p className="task-status complete">
    <Link to ="/payment">Donate</Link></p>
  </div>
</div>

</div>
<div className="task-block">
    {/* task-card 1*/}
    <div className="task-card">
      <div className="task-header">
        <h3>Landslide In Nilgirs</h3>
        <p className="task-type">Due Date : April 3, 2024</p>
      </div>
      <p className="task-date">
        Amount Donated : 19,124
      </p>
      <div className="task-footer">
        <figure>
          <img
            src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/rebecca_portrait.png?raw=true"
            alt="profile_picture"
            className="task-person-img"
          />
          <figcaption className="task-person-name">
           Aradhana
          </figcaption>
        </figure>
        
        <p className="task-status complete">
        <Link to ="/payment">Donate</Link></p>
      </div>
    </div>
    
</div>
<div className="task-block">
    {/* task-card 1*/}
    <div className="task-card">
      <div className="task-header">
        <h3>Storm In Maharastra</h3>
        <p className="task-type">Due Date : October 01, 2024</p>
      </div>
      <p className="task-date">
        Amount Donated : 20,124
      </p>
      <div className="task-footer">
        <figure>
          <img
            src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/george_portrait.png?raw=true"
            alt="profile_picture"
            className="task-person-img"
          />
          <figcaption className="task-person-name">
           Nakul
          </figcaption>
        </figure>
        
        <p className="task-status complete">
        <Link to ="/payment">Donate</Link></p>
      </div>
    </div>
    
</div>
<div className="task-block">
    {/* task-card 1*/}
    <div className="task-card">
      <div className="task-header">
        <h3>Soilerosion In Rajasthan</h3>
        <p className="task-type">Due Date : November 12, 2024</p>
      </div>
      <p className="task-date">
        Amount Donated : 22,124
      </p>
      <div className="task-footer">
        <figure>
          <img
            src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/george_portrait.png?raw=true"
            alt="profile_picture"
            className="task-person-img"
          />
          <figcaption className="task-person-name">
         Agaran
          </figcaption>
        </figure>
        
        <p className="task-status complete">
        <Link to ="/payment">Donate</Link></p>
      </div>
    </div>
    
</div>

  
    </>

  )
}

export default Dashboard2;