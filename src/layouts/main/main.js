import React, { Component } from 'react';
import './main.css';

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import { IconButton } from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { CircularProgress } from 'material-ui';
import { Link, NavLink } from 'react-router-dom';
import OneAskPlaza from './plaza';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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
import ic_notification from '../../images/ic_notification1.png';
import ic_search from '../../images/ic_search0.png';
import avatar from '../../images/avatar.png';
import decor from '../../images/decor.png';
import ic_phone from '../../images/icon_phone.png';
import ic_next from '../../images/ic_next1.png';

class CardView extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Đỗ Thị Ngọc Mai"
          subtitle="Toán"
          avatar='http://i3.kym-cdn.com/photos/images/facebook/000/101/771/1879f18e_e542_e1c6.jpg'
          style={{}}
        />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={avatar} />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />

      </Card>
    )
  }
}

class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
    };
  }
  render() {
    return (
      <div className="navigation top" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {!this.state.isSearch ?
          <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <img src={logo_app} style={{ marginLeft: 10 }} />
            <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ color: 'white', fontWeight: 600, }}> {this.props.title} </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={ic_notification} style={{ width: 30, height: 30, marginRight: 10, cursor: 'pointer' }} />
              <img src={ic_search} style={{ width: 30, height: 30, marginRight: 10, cursor: 'pointer' }} onClick={() => { this.setState({ isSearch: !this.state.isSearch }) }} />
            </div>
          </div>
          :
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <img src={logo_app} style={{ marginLeft: 10, marginRight: 10 }} />
            <div style={{
              backgroundColor: 'rgb(0,141,147)',
              height: 40, borderStyle: 'none', borderRadius: 15,
              width: '90%', display: 'flex',
            }}>
              <input type="text" placeholder="  Search"
                style={{
                  backgroundColor: 'rgb(0,141,147)',
                  height: 38, borderStyle: 'none', borderRadius: 15,
                  width: '90%', alignSelf: 'center', color: 'white', fontSize: 16
                }} />
              <img src={ic_search} style={{ marginTop: 5, width: 30, height: 30, marginRight: 10, cursor: 'pointer' }} onClick={() => { this.setState({ isSearch: !this.state.isSearch }) }} />
            </div>
          </div>
        }
      </div>
    )
  }
}

class SettingItem extends Component {
  render() {
    return (
      <div onClick={this.props.handleUpdate}
        style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 50, alignItems: 'center', borderBottom: this.props.borderBottom && '1px solid gray', borderTop: this.props.borderTop && '1px solid gray', }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <img src={ic_phone} alt="" /> </div>
        <div style={{ display: 'flex', flex: 6, borderBottom: '1px solid gray', height: '100%', alignItems: 'center', flexDirection: 'row' }}>
          <text style={{ flex: 2 }}>{this.props.name}</text>
          <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100%', flex: 1, alignItems: 'center' }}>
            <text style={{ color: 'gray', marginRight: 5 }}>/{this.props.rightText}</text>
            {this.props.iconRight && <img src={ic_next} style={{ marginRight: 5 }} />}
          </div>

        </div>
      </div>
    )
  }
}
class Update extends Component {
  render() {
    return (
      <Title title={this.props.title} />
    )
  }
}
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2,
      tabSelect: 0,
      hasPathway: false,
      title: '1ASK plaza',
    }
  }
  select = (index) => {
    this.setState({ selectedIndex: index });
    if (index == 2) {
      this.setState({
        title: 'Cá nhân'
      })
    }
    else (
      this.setState({
        title: '1ASK plaza'
      })
    )
    console.log(`selectedIndex ${this.state.selectedIndex}`, `selectedIndex ${this.state.title}`)
  };
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
  renderTabButton() {
    let tab1 = this.state.selectedIndex == 0 ? 'Hỏi đáp' : 'Lộ trình của tôi'
    let tab2 = this.state.selectedIndex == 0 ? 'Câu hỏi của tôi' : '1ASK Plaza'

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
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <CardView />
        </div >
      )
    else
      if (this.state.tabSelect == 1)
        return (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

          </div>
        )
  }
  renderTab1() {
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
                    thickness={5}> 84</CircularProgress>
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
                    thickness={5}> 84</CircularProgress>
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
  renderTab2() {
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        </div>
        <div className="profile">
          <img src={avatar} style={{ zIndex: 0, width: 90, height: 90, position: 'absolute', borderRadius: 50 }} />
          <img src={decor} style={{ zIndex: 1 }} />
        </div>
        <div style={{ display: 'flex', height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <text style={{ color: 'rgb(0,76,79)', fontWeight: 600 }}>Hậu Nguyễn</text>
        </div>
        <div style={{ display: 'flex', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid gray', width: '100%' }}>
          <text style={{ fontWeight: 600 }}>Your Session: </text>
          <text style={{ color: 'rgb(249,163,70', fontWeight: 600, marginLeft: 10 }}> 20 Session</text>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}>
          <SettingItem name="Họ tên" rightText="/Haunsjkhafks" iconRight={true} />
          <SettingItem name="Điện thoại" rightText="23412544" iconRight={true} />
          <SettingItem name="Email" rightText="Haunsjkhafks@gmail.com" iconRight={true} borderBottom={true} />

          <div style={{ height: 20 }}></div>
          <SettingItem name="Chia sẻ với bạn bè" iconRight={false} borderBottom={true} borderTop={true} />
          <div style={{ height: 20 }}></div>
          <SettingItem name="Cài đặt" iconRight={true} borderBottom={true} borderTop={true} />
          <div style={{ height: 20 }}></div>
          <SettingItem name="Giới thiệu 1ASK" iconRight={true} borderTop={true} />
          <SettingItem name="Điều khoản & chính sách sử dụng" iconRight={true} />
          <SettingItem name="Gửi phản hồi" iconRight={true} borderBottom={true} />
          <div style={{ height: 20 }}></div>
          <SettingItem name="Đăng xuất" iconRight={false} borderBottom={true} borderTop={true} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <Title title={this.state.title} />
        {this.state.selectedIndex !== 2 && this.renderTabButton()}
        {this.state.selectedIndex == 0 && this.renderTab()}
        {this.state.selectedIndex == 1 && this.renderTab1()}
        {this.state.selectedIndex == 2 && this.renderTab2()}
        {this.renderNavigationButtom()}
      </div>
    );
  }
}

export default Main;