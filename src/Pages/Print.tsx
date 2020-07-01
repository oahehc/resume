import React from 'react'
import PrintInfo from '../Components/PrintInfo/PrintInfo'
import PrintSummary from '../Components/PrintSummary/PrintSummary'
import PrintExp from '../Components/PrintExp/PrintExp'
import PrintEduction from '../Components/PrintEduction/PrintEduction'
import PrintPortfolio from '../Components/PrintPortfolio/PrintPortfolio'
import { Page } from '../Elements/Print'

const Print: React.SFC = () => {
  return (
    <Page>
      <PrintInfo />
      <PrintSummary />
      <PrintExp />
      <PrintEduction />
      <PrintPortfolio />
    </Page>
  )
}

export default Print
