import React, { useContext } from 'react'
import { portfolioColor1 } from '../../styles/vars'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import IconLink from '../../Elements/IconLink'
import Label from '../../Elements/Label'
import Gallery from '../Gallery/Gallery'
import { I18nContext } from '../../Context/Context'
import { Card, CardInfo, CardImgs } from './SegmentPortfolio.style'
import { portfolioColor2 } from '../../styles/vars'

const projectList = [
  'AmpExample',
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

const SegmentPortfolio: React.SFC = () => {
  const { getContent } = useContext(I18nContext)

  return (
    <SegmentWrapper id="portfolio" topBorderColor={portfolioColor1}>
      <Title>{getContent('anchorPortfolio')}</Title>
      {projectList.map(project => (
        <Card key={project}>
          <CardInfo>
            {getContent(`portfolio${project}Stack`).map(
              (str: string, index: number) => (
                <Label key={index} bgColor={portfolioColor2}>
                  {str}
                </Label>
              ),
            )}
            <h4>
              {getContent(`portfolio${project}`)}
              {getContent(`portfolio${project}Link`).map(
                ({ type, link }: any) => (
                  <IconLink key={type} type={type} link={link} />
                ),
              )}
            </h4>
            <p>{getContent(`portfolio${project}Content`)}</p>
          </CardInfo>
          {getContent(`portfolio${project}Images`) && (
            <CardImgs>
              <Gallery images={getContent(`portfolio${project}Images`)} />
            </CardImgs>
          )}
        </Card>
      ))}
      <Card>
        <div>
          {getContent('portfolioTemplateStack').map(
            (str: string, index: number) => (
              <Label key={index} bgColor={portfolioColor2}>
                {str}
              </Label>
            ),
          )}
          {getContent('portfolioTemplate').map(
            (template: any, index: number) => (
              <h4 key={index}>
                {template.name}
                <IconLink type="github" link={template.link} />
              </h4>
            ),
          )}
          <p>{getContent('portfolioTemplateContent')}</p>
        </div>
      </Card>
    </SegmentWrapper>
  )
}

export default SegmentPortfolio
/*
      <dt><a href="https://s3-ap-northeast-1.amazonaws.com/oahehc/webClock/index.html">WebClock</a></dt>
      <dd><span class="skill">Meteor</span> Online clock</dd>
      <!--android APP-->
      <dt><a href="https://play.google.com/store/apps/details?id=com.ionicframework.oahehc.HoldemDashboard">Holdem</a></dt>
      <dd><span class="skill">Ionic</span> App for showing big/small blind for Texas hold'em poker.</dd>
      <dt><a href="https://play.google.com/store/apps/details?id=com.ionicframework.oahehc.mahjong">Mahjong</a></dt>
      <dd><span class="skill">Ionic</span> App for record status and score when playing Mahjong.</dd>
      <!--
      <dt><a href="http://movieranking-movieranking.rhcloud.com/">MovieRanking</a></dt>
      <dd><span class="skill">php, mysql</span> Web crawler for search multiple movie ranking data</dd>
      <dt><a href="http://blog-oahehc.rhcloud.com/vocabulary.php">Vocabulary</a></dt>
      <dd><span class="skill">jquery mobile, php, mysql</span> English learning tool</dd>
      <dt><a href="http://tool-oahehc.rhcloud.com/checklist.php">Checklist</a> *</dt>
      <dd><span class="skill">php, mysql</span> Checklist for mangememt work staff.</dd>
      <dt><a href="http://tool-oahehc.rhcloud.com/recorder.php">Recorder</a> *</dt>
      <dd><span class="skill">php, mysql, google chart api</span> Set weekly/monthly goal and analysis accomplish rate.</dd>
      <dt><a href="http://tool-oahehc.rhcloud.com/financer.php">Financer</a> *</dt>
      <dd><span class="skill">php, mysql, google chart api</span> Record and analysis income/expense, setting budget to control
        monthly expense.</dd>
      <dd><span class="label label-default small">* Test account: id=pw=test</span></dd>
      <dt><a href="http://oahehc.comoj.com/">Blog</a></dt>
      <dd>Personal blog created by wordpress with self-designed theme.</dd>
      <dt><a href="http://oahehc.comoj.com/travel_data.php">TravelData</a></dt>
      <dd>Database for travel inforamtion(restaurant,landscape,hotel, etc..).</dd>
      <dt><a href="http://oahehc.comoj.com/wordpress/854">Exercise</a></dt>
      <dd>App Timer for workout.</dd>
      <dt><a href="http://oahehc.comoj.com/wordpress/839">Decision</a></dt>
      <dd>Drawing App.</dd>
      <dt><a href="http://oahehc.comoj.com/wordpress/859">Scoreboard</a></dt>
      <dd>App for recording game score.</dd>
      <dt><a href="http://oahehc.comoj.com/wordpress/865">Blind</a></dt>
      <dd>App for showing big/small blind for Texas hold'em poker.</dd>
-->
*/
