import React from 'react'

export default function Carousel() {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
      <div className="carousel-inner" id='carousel'>
        <div className='carousel-caption' style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://assets.epicurious.com/photos/5580664481ac1e502367643f/16:9/w_2000,h_1125,c_limit/56389654_double-rl-ranch-burger_1x1.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/16:9/pass/biryani%20in%20hyderabad.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.gqindia.com/photos/5dea2d601d798400088dbdae/16:9/pass/best-dosas-gurgaon.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  )
}
