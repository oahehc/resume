import React, { useContext } from 'react'
import { I18nContext } from '../../Context/Context'
import { grey5 } from '../../styles/vars'
import Link from '../PrintLink/PrintLink'
import {
  SegmentWrapper,
  Title,
  ExpDiv,
  ExpTitle,
  ExpSkill,
  Item,
  LayoutSpace,
} from '../../Elements/Print'
import IconLink from '../../Elements/IconLink'
import Label from '../../Elements/Label'

const projectList = [
  'Shorten',
  'MusicBook',
  'SpeakTrainer',
  'Onboard',
  'CalendarLineBot',
  'RestaurantLineBot',
  'Lottery',
  'Serverless',
  'DL',
  'Resume',
]

const PrintPortfolio: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  return (
    <SegmentWrapper>
      <Title>{getContent('anchorPortfolio')}</Title>
      {projectList.map(project => (
        <ExpDiv key={project}>
          <ExpTitle>
            <span>{getContent(`portfolio${project}`)}</span>
          </ExpTitle>
          <ExpSkill>
            {getContent(`portfolio${project}Stack`).map(
              (str: string, index: number) => (
                <Label key={index} bgColor={grey5}>
                  {str}
                </Label>
              ),
            )}
          </ExpSkill>
          {getContent(`portfolio${project}Link`).map(({ type, link }: any) => (
            <Item key={type}>
              <IconLink type={type} link={link} />
              <span>
                <Link src={link} />
              </span>
            </Item>
          ))}
          <div>▶ {getContent(`portfolio${project}Content`)}</div>
          <LayoutSpace height="12px" />
        </ExpDiv>
      ))}
    </SegmentWrapper>
  )
}

export default PrintPortfolio
