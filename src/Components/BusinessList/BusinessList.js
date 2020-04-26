import React from 'react'
import './BusinessList.css'

import Business from '../Business/Business'

class BusinessList extends React.Component {
  render () {
    return (
      <div classNamne='BusinessList'>
        {
          this.props.businessArray.map(business => {
            return <Business business={business} key={business.name} />
          })
        }
      </div>
    )
  }
}

export default BusinessList
