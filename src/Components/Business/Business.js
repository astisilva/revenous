import React from 'react'
import './Business.css'

class Business extends React.Component {
  render () {
    const { business } = this.props // const business = this.props.business;
    const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = business

    return (
      <div className='Business'>
        <div className='image-container'>
          <img src={imageSrc} alt='' />
        </div>
        <h2>{name}</h2>
        <div className='Business-information'>
          <div className='Business-address'>
            <p>{address}</p>
            <p>{city}</p>
            <p>
              {state} {zipCode}
            </p>
          </div>
          <div className='Business-reviews'>
            <h3>{category.toUpperCase()}</h3>
            <h3 className='rating'>{`${rating} stars`}</h3>
            <p>{`${reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business
