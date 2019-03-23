import React from 'react'
import PrintInfo from '../Components/PrintInfo/PrintInfo'
import PrintExp from '../Components/PrintExp/PrintExp'
import PrintEduction from '../Components/PrintEduction/PrintEduction'
import PrintPortfolio from '../Components/PrintPortfolio/PrintPortfolio'
import { Page } from '../Elements/Print'

const Print: React.SFC = () => {
  return (
    <Page>
      <PrintInfo />
      <PrintExp />
      <PrintEduction />
      <PrintPortfolio />
    </Page>
  )
}

export default Print
