import React from 'react'

const InfoHome = ({info}) => {
  return (
    <>
     <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-muted">{info}</p>
        {  <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>  }
      </div>
    </div>
  </section>
    </>
  )
}

export default InfoHome