import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import logo_app from '../../images/logoapp_User.png';
import icon_pathway from '../../images/icon_pathway0.png';
import icon_person from '../../images/icon_person0.png';
import icon_question from '../../images/icon_question.png';
import icon_pathway1 from '../../images/icon_pathway1.png';
import icon_person1 from '../../images/icon_person1.png';
import icon_question1 from '../../images/icon_question1.png';
import icon_profile from '../../images/profile.png';
import logout from '../../images/logout.png';
import icon_store from '../../images/store.png';
import ic_notification1 from '../../images/ic_notification1.png';
import ic_notification0 from '../../images/ic_notification0.png';
import ic_notification from '../../images/ic_notification01.png';
import document from '../../images/document.png';

import { connect } from 'react-redux';
import { actionCreators } from '../../reducer/reducer';

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            open: false,
            logout: false
        }
    }
    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };
    logout = () => {
        const { dispatch } = this.props;
        dispatch(actionCreators.logout());
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        return (
            this.props.isLogin ?
                <div style={{ width: '100%', margin: 0, height: 77, backgroundColor: '#edeff2', border: '1px solid rgba(0,0,0,.0975)' }}>
                    <div className='container'>
                        <ul className="nav">
                            <li style={{ flex: 1 }}>
                                <NavLink exact to='/' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <img style={{ height: 40, backgroundColor: 'rgb(85,96,128)', borderRadius: 5 }} src={logo_app} onClick={() => this.setState({ page: 'home' })} />
                                    <div style={{ color: 'rgb(85,96,128)', fontWeight: 200, alignSelf: 'flex-start', fontSize: 14 }}>Nền tảng giáo dục theo yêu cầu</div>
                                </NavLink>
                            </li>
                            <li style={{ flex: 1 }}>
                                <input type="text" placeholder="Tìm kiếm" />
                            </li>
                            <div style={{ flex: .5, display: 'flex' }}>
                                <li style={{ flex: 1 }}>
                                    <img src={ic_notification} style={{ cursor: 'pointer' }} onClick={this.handleTouchTap} />
                                    <Popover
                                        open={this.state.open}
                                        anchorEl={this.state.anchorEl}
                                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                        onRequestClose={this.handleRequestClose}
                                    >
                                        <Menu >
                                            <MenuItem primaryText="Chào mừng đền với 1ASK" leftIcon={<img style={{ width: 30, height: 30 }} src={icon_profile} />} rightIcon={<div style={{ width: 50, color: 'gray', margin: 0 }}>1 giờ</div>} />
                                            <MenuItem primaryText="Chào mừng đền với 1ASK" leftIcon={<img style={{ width: 30, height: 30 }} src={icon_profile} />} rightIcon={<div style={{ width: 50, color: 'gray', margin: 0 }}>1 giờ</div>} />
                                            <MenuItem primaryText="Chào mừng đền với 1ASK" leftIcon={<img style={{ width: 30, height: 30 }} src={icon_profile} />} rightIcon={<div style={{ width: 50, color: 'gray', margin: 0 }}>1 giờ</div>} />
                                            <MenuItem primaryText="Chào mừng đền với 1ASK" leftIcon={<img style={{ width: 30, height: 30 }} src={icon_profile} />} rightIcon={<div style={{ width: 50, color: 'gray', margin: 0 }}>1 giờ</div>} />
                                        </Menu>
                                    </Popover>
                                </li>
                                <li style={{ flex: 1 }}>
                                    <NavLink activeClassName='active' to='/pathway'>
                                        {this.state.page == 'pathway' ?
                                            <img src={document} onClick={() => this.setState({ page: 'pathway' })} />
                                            :
                                            <img src={document} onClick={() => this.setState({ page: 'pathway' })} />
                                        }
                                    </NavLink>
                                </li>
                                <li style={{ flex: 1 }}>
                                    <NavLink activeClassName='active' to='/plaza'>
                                        <img src={icon_store} onClick={() => this.setState({ page: 'plaza' })} />
                                    </NavLink>
                                </li>
                                <li style={{ flex: 1 }}>
                                    <NavLink activeClassName='active' to='/person'>
                                        <img src={icon_profile} onClick={() => this.setState({ page: 'person' })} />
                                    </NavLink>
                                </li>
                                <li style={{ flex: 1 }}>
                                    <NavLink activeClassName='active' to='/login'>
                                        <img src={logout} onClick={this.logout} />
                                    </NavLink>
                                </li>

                            </div>
                        </ul>

                    </div>
                </div>
                :
                <div />

        )
    }
}
// const modalStyle = {
//     content: {
//         // width: '100%',
//         marginLeft: -423,
//         right: 'initial',
//         top: 15,
//         left: 550,
//         width: 300,
//         flexDirection: 'column',
//         borderStyle: 'none',
//         padding: 0,
//         zIndex: 100
//     },
//     overlay: {
//         position: 'inherit',
//         backgroundColor: 'transparent',
//         minHeight: 50,
//     }
// };
export default connect(mapStateToProps)(Nav)
