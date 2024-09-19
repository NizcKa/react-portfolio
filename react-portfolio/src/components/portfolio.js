import React from 'react'
import PortfolioCards from './portfoliocards.js'


const Portfolio = () => {
  return (
    <section className="jumbotron jumbotron-fluid portfolio" id="Portfolio">
        <h1 className="lead text-center pt-4 display-6 portfolio-head">My Projects</h1>
        <div className="container d-flex align-items-center justify-content-center pb-4">
            <div className="row pb-3 gx-4">
            <PortfolioCards 
              img={"/goghie.png"} 
              title="Goghie" 
              description="An attempt at a more complete piece">
            </PortfolioCards>

            <PortfolioCards 
              img={"/glupo.png"} 
              title="Glupo" 
              description="One of my personal favourites.">
            </PortfolioCards>

            <PortfolioCards 
              img={"/saber.png"} 
              title="Saber" 
              description="A practice project from reference.">  
            </PortfolioCards>

            </div>
        </div>
    </section>
  )
}

export default Portfolio