import React, { Component } from 'react';
import { CardView } from '../main/main.js';
import Document from '../document/document';
import { connect } from 'react-redux';
import { actionCreators } from '../../reducer/reducer';
import './person.css';
import { Redirect, Link } from 'react-router-dom';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import icon_profile from '../../images/profile.png';
import icon_setting from '../../images/settingicon.png';

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document: false,
            setting: false,
            logout: false
        }
    }
    handleClick = () => this.setState({ showModal: true })
    handleClose = () => this.setState({ showModal: false })
    logout = () => {
        this.setState({ logout: true })
        const { dispatch } = this.props;
        dispatch(actionCreators.logout());
    }
    render() {
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column' }}>
                {this.state.document && <Redirect to="/document" />}
                {this.state.setting && <Redirect to="/setting" />}
                {this.state.logout && <Redirect to="/login" />}
                {/*{this.state.showModal &&
                    <ModalContainer style={{ height: 50, width: 500, borderRadius: 0 }} onClose={this.handleClose}>
                        <ModalDialog onClose={this.handleClose}>
                            <Link to="/login" onClick={this.logout}>Logout</Link>
                        </ModalDialog>
                    </ModalContainer>}*/}
                <div className="profile">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 2, height: '100%' }}>
                        <img src={icon_profile} style={{ width: 150, height: 150 }} />
                    </div>
                    <div style={{ display: 'flex', flex: 4, justifyContent: 'flex-start', height: '100%', flexDirection: 'column', marginTop: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                            <h1 style={{ fontWeight: 200, fontSize: 32, marginRight: 20 }}>Mai Do</h1>
                            <button
                                onClick={() => this.setState({ setting: true })}
                                style={{ cursor: 'pointer', fontWeight: 600, borderRadius: 3, border: '1px solid #dbdbdb', fontSize: 14, height: 26, background: '0 0', color: '#262626' }}>
                                Chỉnh sửa thông tin cá nhân</button>
                            <img src={icon_setting} style={{ width: 26, marginLeft: 10, cursor: 'pointer' }} onClick={this.logout} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ cursor: 'pointer' }} >
                                <span>0</span> <span> câu hỏi</span>
                            </div>
                            <div style={{ marginLeft: 30, cursor: 'pointer' }} onClick={() => { this.setState({ document: true }) }}><span>2</span><span> tài liệu</span></div>
                            <div style={{ marginLeft: 30, cursor: 'pointer' }}><span>200.000</span><span> vnđ</span></div>
                        </div>
                    </div>
                </div>
                <CardView />
                <CardView />

            </div >
        )
    }
}

export default connect(mapStateToProps)(Person)