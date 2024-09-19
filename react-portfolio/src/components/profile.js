import React from 'react'

const Profile = () => {
  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3">
      <div className="container">
          <img src={"/fishmael.png"} alt="fishamael" className="rounded-circle shadow-lg p-img mr-3 mt-3 mb-3"></img>
          <h1 className="jumbotron-heading display-4">Welcome to my portfolio</h1>
          <p className="lead pb-3">Hello I make things. </p>
      </div>
    </section>
  )
}

export default Profile