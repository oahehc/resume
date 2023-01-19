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
  'JpBlog',
  'IgGenerator',
  'ReactVueComparison',
  'Shorten',
  'MusicBook',
  'CalendarLineBot',
  'Lottery',
  'Serverless',
  'DL',
  'Resume',
]

const PrintPortfolio: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  return (
    <SegmentWrapper shouldPageBreak>
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
          <div>{getContent(`portfolio${project}Content`)}</div>
          {getContent(`portfolio${project}Link`).map(({ type, link }: any) => (
            <Item key={type}>
              <IconLink type={type} link={link} />
              <span>
                <Link src={link} />
              </span>
            </Item>
          ))}
          <LayoutSpace height="12px" />
        </ExpDiv>
      ))}
    </SegmentWrapper>
  )
}

export default PrintPortfolio
