import React from 'react'

const Profile = () => {
  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center vh-100">
      <div className="container">
          <img src={"/fishmael.png"} alt="fishamael" className="rounded-circle shadow-lg p-img mr-3 mt-3 mb-3"></img>
          <h1 className="jumbotron-heading display-4 pb-3">Welcome to my portfolio</h1>
          <h2 className="lead fs-2 pb-3">My name is Nicholas Landicho.</h2>
          <p className="lead fst-italic">Professional Procrastinator.</p>
          <p className="lead fst-italic">Terminally Sleep Deprived.</p>
          <p className="lead fst-italic">Last-minute Warlord.</p>
          <h2 className="lead fs-4">Yup, that's me. Do not click that contact me button.</h2>

      </div>
    </section>
  )
}

export default Profile