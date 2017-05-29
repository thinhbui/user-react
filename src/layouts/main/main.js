import React, { Component } from 'react';
import './main.css';

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Redirect } from 'react-router-dom';
import { IconButton } from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
import OneAskPlaza from '../plaza/plaza.js';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import Lesson, { Learn } from './lesson.js';
import ReactPlayer from 'react-player';
import Lightbox from 'react-images';
import { DetailItem } from '../plaza/plaza.js';

import icon_profile from '../../images/profile.png';
import icon_pathway from '../../images/icon_pathway0.png';
import icon_person from '../../images/icon_person0.png';
import icon_question from '../../images/icon_question.png';
import icon_pathway1 from '../../images/icon_pathway1.png';
import icon_person1 from '../../images/icon_person1.png';
import icon_question1 from '../../images/icon_question1.png';
import logo_app from '../../images/logoapp_User.png';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_notification from '../../images/ic_notification1.png';
import ic_search from '../../images/ic_search0.png';
import avatar from '../../images/avatar.png';
import decor from '../../images/decor.png';
import ic_phone from '../../images/icon_phone.png';
import ic_next from '../../images/ic_next1.png';
import minions from '../../images/minion.png';
import { connect } from 'react-redux';
import { actionCreators } from '../../reducer/reducer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
  }
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin
})
export class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      // showComment: false,
      router_detail: false
    }

  }
  handleClickImage = () => {
    this.state({ lightboxIsOpen: true, })
  }

  render() {
    return (
      /*<div className="card-view">
        <div className="card-header">
          <div className="card-avatar">
            <img src={icon_profile} style={{ width: 30, height: 30 }} />
          </div>
          <div className="card-media">
   
          </div>
        </div>
      </div>*/
      <Card onClick={() => this.setState({ router_detail: true })} style={{ width: 600, marginTop: 20, border: '1px solid #edeff2', zIndex: 0, cursor: 'pointer' }}>
        <CardHeader
          title="Đỗ Thị Ngọc Mai"
          subtitle="Toán"
          avatar={icon_profile}
          style={{ width: 600 }}
          actAsExpander={true}
        />
        <CardMedia
          mediaStyle={{ width: 600 }}
          style={{ width: 600 }}
        >
          <img src={minions} />

        </CardMedia >
        <CardTitle title="Giúp e bài này với" subtitle="Phân tích nụ cười của Yao Ming" />
        {this.state.router_detail && <Redirect to="/question-detail/id" />}
        {/*<div onClick={() => this.setState({ showComment: !this.state.showComment })} style={{ padding: 16, cursor: 'pointer', color: 'gray', fontSize: 14 }}>Xem bình luận</div>*/}
      </Card>
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
            <text style={{ color: 'gray', marginRight: 5 }}>{this.props.rightText}</text>
            {this.props.iconRight && <img src={ic_next} style={{ marginRight: 5 }} />}
          </div>

        </div>
      </div>
    )
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      tabSelect: 0,
      hasPathway: false,
      title: '1ASK plaza',
      isHide: false,
      isLearning: false,
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  hideBar = () => {
    window.scrollY > this.prev ?
      !this.state.isHide && this.setState({ isHide: true })
      :
      this.state.isHide && this.setState({ isHide: false })
    this.prev = window.scrollY;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  select = (index) => {
    this.setState({ selectedIndex: index });
    if (index === 2) {
      this.setState({
        title: 'Cá nhân'
      })
    }
    else (
      this.setState({
        title: '1ASK plaza'
      })
    )
    // console.log(`selectedIndex ${this.state.selectedIndex}`, `selectedIndex ${this.state.title}`)
  };
  selectTab = (index) => { this.setState({ tabSelect: index }) }
  renderTab() {
    if (this.state.tabSelect === 0)
      return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <CardView />
          <CardView />
          <CardView />
          <CardView />
          <CardView />
          <CardView />
          <CardView />
        </div >
      )
    else
      if (this.state.tabSelect === 1)
        return (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

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
          <SettingItem name="Điện thoại" rightText="/23412544" iconRight={true} />
          <SettingItem name="Email" rightText="/Haunsjkhafks@gmail.com" iconRight={true} borderBottom={true} />

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
      <div> {this.renderTab()}
        {!this.props.isLogin && <Redirect to="/login" />}
      </div>
     

      // <DetailItem />
    );
  }
}

export default connect(mapStateToProps)(Main)
