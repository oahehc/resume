import React from 'react'
import PrintInfo from '../Components/PrintInfo/PrintInfo'
import PrintExp from '../Components/PrintExp/PrintExp'
import PrintEduction from '../Components/PrintEduction/PrintEduction'
import PrintPortfolio from '../Components/PrintPortfolio/PrintPortfolio'

const Print: React.SFC = () => {
  return (
    <React.Fragment>
      <PrintInfo />
      <PrintExp />
      <PrintEduction />
      <PrintPortfolio />
    </React.Fragment>
  )
}

export default Print
