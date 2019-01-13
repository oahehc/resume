import React from 'react'
import { workColor1 } from '../../styles/vars'
import { SegmentWrapper } from '../../Elements/Wrapper'

export default class SegmentWork extends React.Component<{}, any> {
  render() {
    return (
      <SegmentWrapper id="work" topBorderColor={workColor1}>
        SegmentWork
      </SegmentWrapper>
    )
  }
}
/*
  <div class="container-fluid page" id="work" data-role="page">
    <dl class="dl-horizontal">
      <dt class="subtitleIcon"><i class="fa fa-file-code-o" aria-hidden="true"></i></dt>
      <dd class="subtitle">Projects</dd>

      <!--git repository-->
      <dt><a href="https://github.com/oahehc/tensorflow_example">DL Model</a></dt>
      <dd><span class="skill">Python, TensorFlow</span>DNN, CNN, RNN, VAN, GAN, autoencoder</dd>
      <dt><a href="https://github.com/oahehc/vue-template">Vue-template</a></dt>
      <dd><span class="skill">Vue.js</span> Vue project template modify from official template</dd>
      <dt><a href="https://github.com/oahehc/linebot-lottery">linebot-lottery</a></dt>
      <dd><span class="skill">LineBot, AWS lambda, Heroku</span> Auto collect lottery information and push by line message</dd>
      <dt><a href="https://github.com/oahehc/AWS-serverless">AWS-serverless</a></dt>
      <dd><span class="skill">AWS cognito, api gateway, S3, lambda, dynamoDB</span> An basic signUp/signIn app example create
        by AWS serverless structure</dd>

      <!--Website application-->
      <dt><a href="https://music-sheet-20e93.firebaseapp.com/">MusicBook</a></dt>
      <dd><span class="skill">firebase, Vue.js</span> Sheet music with auto play and collect function</dd>
      <dt><a href="https://test-2a77b.firebaseapp.com/">SpeakTrainer</a></dt>
      <dd><span class="skill">recognition api, firebase, scss</span> English speak training tool</dd>
      <dt><a href="https://line-bot-oahehc.herokuapp.com/">LineBot</a></dt>
      <dd><span class="skill">LineBot, google map/drive api, Heroku, node.js</span> LineBot for search restaurant information.</dd>
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
