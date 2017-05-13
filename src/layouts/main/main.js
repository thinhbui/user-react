import React, { Component } from 'react';
import './main.css';

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui';
import { Link, NavLink } from 'react-router-dom';
import OneAskPlaza from './plaza'

import icon_pathway from '../../images/icon_pathway.png';
import icon_person from '../../images/icon_person.png';
import icon_question from '../../images/icon_question.png';
import icon_pathway1 from '../../images/icon_pathway1.png';
import icon_person1 from '../../images/icon_person1.png';
import icon_question1 from '../../images/icon_question1.png';
import logo_app from '../../images/logoapp_User.png';
import study from '../../images/study.png';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_document from '../../images/ic_document.png';


class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
    };
  }
  render() {
    <div className="title">
      <img src={logo_app} />
      {!this.state.isSearch ?
        <div>
          <div className="main-title"></div>
          <div className="left-icon"></div>
        </div>
        :
        <div className="search">

        </div>
      }
    </div>
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      tabSelect: 0,
      hasPathway: false
    };
  }

  select = (index) => this.setState({ selectedIndex: index });
  renderNavigationTop() {
    return (
      <div className="navigation top">
      </div>
    )
  }
  selectTab = (index) => { this.setState({ tabSelect: index }) }
  renderNavigationButtom() {
    return (
      <div className="navigation buttom">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem className="BottomNavigationItem"
              label="Hỏi đáp"
              icon={
                <FontIcon className="material-icons">
                  {this.state.selectedIndex !== 0 ? <img src={icon_pathway} /> : <img src={icon_pathway1} />}
                </FontIcon>
              }
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Học tập"
              icon={
                <FontIcon className="material-icons">
                  {this.state.selectedIndex !== 1 ? <img src={icon_question} /> : <img src={icon_question1} />}
                </FontIcon>
              }
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Cá nhân"
              icon={
                <FontIcon className="material-icons">
                  {this.state.selectedIndex !== 2 ? <img src={icon_person} /> : <img src={icon_person1} />}
                </FontIcon>
              }
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
  renderTabButton(tab1, tab2) {
    return (
      <div style={{ display: 'flex', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: '40%', height: 36, cursor: 'pointer',
          color: this.state.tabSelect == 0 ? 'white' : 'rgb(0, 178, 185)', backgroundColor: this.state.tabSelect == 0 ? 'rgb(0, 178, 185)' : 'white',
          borderWidth: 1, borderTopLeftRadius: 18, borderBottomLeftRadius: 18, borderColor: 'rgb(0, 178, 185)', borderStyle: 'solid'
        }} onClick={() => this.selectTab(0)}>
          {tab1}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: '40%', height: 36, cursor: 'pointer',
          color: this.state.tabSelect == 1 ? 'white' : 'rgb(0, 178, 185)', backgroundColor: this.state.tabSelect == 1 ? 'rgb(0, 178, 185)' : 'white',
          borderWidth: 1, borderTopRightRadius: 18, borderBottomRightRadius: 18, borderColor: 'rgb(0, 178, 185)', borderStyle: 'solid'
        }} onClick={() => this.selectTab(1)}>
          {tab2}
        </div>
      </div >

    )
  }
  renderTab() {
    if (this.state.tabSelect == 0)
      return (
        this.state.hasPathway ?
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={study} />
                <div style={{}}>Find Pathway you are interested in and enroll</div>
              </div>
              <button style={{ marginBottom: 30 }} className="midle-button" >Go to 1ASK Plaza</button>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>

            </div>
          </div >
          :
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <div style={{
                display: 'flex', height: 300, flexDirection: 'row',
                border: '1px solid rgb(172, 172, 172)', borderBottomWidth: 3
              }}>
                <div style={{
                  flex: 1,
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <CircularProgress
                    mode="determinate"
                    value={50}
                    size={120}
                    thickness={10}> 84</CircularProgress>
                </div>
                <div style={{
                  display: 'flex', flex: 2, alignItems: 'center', flexDirection: 'column'
                }}>
                  <div style={{
                    display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'
                  }}>
                    <span style={{
                      display: 'flex', justifyContent: 'center',
                      alignItems: 'flex-start', fontWeight: 580, fontSize: 18
                    }}>3 Tuần để thành cao thủ tích phân</span>
                    <span style={{
                      display: 'flex', justifyContent: 'center',
                      alignItems: 'flex-start', color: 'gray', fontSize: 14, margin: 2
                    }}>Giảng viên: Nguyễn Ngọc Đức</span>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12 }}>
                      <div style={{ margin: 5 }}>
                        <img src={ic_video} /> 20 videos
                      </div>
                      <div style={{ margin: 5 }}>
                        <img src={ic_voice} /> 10 voices
                      </div>
                      <div style={{ margin: 5 }}>
                        <img src={ic_document} /> 80 documents
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex', flex: 2, alignItems: 'flex-start', flexDirection: 'column'
                  }}>
                    <button style={{ fontWeight: 'normal', width: 250 }} className="midle-button">Learning now</button>
                  </div>
                </div>
              </div>
              <div style={{ height: 20 }}> </div>
              <div style={{
                display: 'flex', height: 300, flexDirection: 'row',
                border: '1px solid rgb(172, 172, 172)', borderBottomWidth: 3
              }}>
                <div style={{
                  flex: 1,
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <CircularProgress
                    mode="determinate"
                    value={50}
                    size={120}
                    thickness={10}> 84</CircularProgress>
                </div>
                <div style={{
                  display: 'flex', flex: 2, alignItems: 'center', flexDirection: 'column'
                }}>
                  <div style={{
                    display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'
                  }}>
                    <span style={{
                      display: 'flex', justifyContent: 'center',
                      alignItems: 'flex-start', fontWeight: 580, fontSize: 18
                    }}>3 Tuần để thành cao thủ tích phân</span>
                    <span style={{
                      display: 'flex', justifyContent: 'center',
                      alignItems: 'flex-start', color: 'gray', fontSize: 14, margin: 2
                    }}>Giảng viên: Nguyễn Ngọc Đức</span>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12 }}>
                      <div style={{ margin: 5 }}>
                        <img src={ic_video} /> 20 videos
                      </div>
                      <div style={{ margin: 5 }}>
                        <img src={ic_voice} /> 10 voices
                      </div>
                      <div style={{ margin: 5 }}>
                        <img src={ic_document} /> 80 documents
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex', flex: 2, alignItems: 'flex-start', flexDirection: 'column'
                  }}>
                    <button style={{ fontWeight: 'normal', width: 250 }} className="midle-button">Learning now</button>
                  </div>
                </div>
              </div>

            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={study} />
                <div style={{}}>Find Pathway you are interested in and enroll</div>
              </div>
              <button className="midle-button" >Go to 1ASK Plaza</button>
            </div>
            <div style={{ display: 'flex', flex: .1 }}>

            </div>
          </div >
      )
    else
      if (this.state.tabSelect == 1)
        return (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <OneAskPlaza />
          </div>
        )
  }
  render() {
    return (
      <div className="App">
        {this.renderNavigationTop()}
        {this.renderTabButton('Lộ trình của tôi', '1ASK Plaza')}
        {this.renderTab()}

        {this.renderNavigationButtom()}
      </div>
    );
  }
}

export default Main;

