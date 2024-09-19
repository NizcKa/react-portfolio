import React from 'react'

const Profile = () => {
  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center vh-100">
      <div className="container">
          <img src={"/fishmael.png"} alt="fishamael" className="rounded-circle shadow-lg p-img mr-3 mt-3 mb-3"></img>
          <h1 className="jumbotron-heading display-4 pb-3">Welcome to my portfolio</h1>
          <p className="lead">Professional Procrastinator.</p>
          <p className="lead">Terminally Sleep Deprived.</p>
          <p className="lead">Last-minute Warlord.</p>
          <p className="lead">Yup, that's me. Do not click that contact me button.</p>

      </div>
    </section>
  )
}

export default Profile