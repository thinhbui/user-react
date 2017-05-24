import './login.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { actionCreators } from '../../reducer/reducer';
import { Redirect } from 'react-router-dom';

import bg from '../../images/bg5.png';
import logo from '../../images/logoapp_User.png';
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';
import demo from '../../images/demo.jpg';
import googleplay from '../../images/googleplay.png';
import appstore from '../../images/appstore.png';

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})
class Login extends Component {
    googleLogin = (res) => {
        const { dispatch } = this.props;
        dispatch(actionCreators.login(res));
        console.log(res);
    }
    facebookLogin = (res) => {
        const { dispatch } = this.props;
        dispatch(actionCreators.login(res));
        console.log(res);
    }
    render() {
        return (
            this.props.isLogin ?
                <Redirect to="/" />
                :
            <div className="container" style={{ display: 'flex', flexDirection: 'row', marginTop: 100, alignItems: 'center', justifyContent: 'center', color: 'black' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 50 }} >
                    <img src={demo} alt="" style={{ height: 500 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #e6e6e6', height: 350, alignItems: 'center', width: 350 }}>
                        <div style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                            <img src={logo} style={{ position: 'relative', backgroundColor: 'gray', height: 80, borderRadius: 10 }} />
                        </div>
                        <div style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <div style={{ fontWeight: 200, fontSize: 20, color: 'gray' }}>Nền tảng Giáo Dục theo yêu cầu</div>
                        </div>
                        < div style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20 }}>
                            <FacebookLogin
                                appId="287502975038002"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={this.facebookLogin}
                                cssClass="button-facebook"
                            />
                        </div>

                        <div style={{ height: 50, justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
                            <GoogleLogin
                                style={{
                                    display: 'inline-block',
                                    background: '#d14836',
                                    color: '#fff',
                                    width: 200,
                                    position: 'relative',
                                    height: 35,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    borderRadius: 5,
                                    border: '1px solid transparent',
                                    fontSize: 16,
                                    fontFamily: 'Roboto',
                                    textAlign: 'center'
                                }}
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                onSuccess={this.googleLogin}
                                onFailure={this.googleLogin}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
                        <div>Tải ứng dụng</div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <a href="https://play.google.com/store/apps/details?id=co.oneask">
                                <img src={googleplay} alt="" style={{ height: 40 }} />
                            </a>
                            <div style={{ width: 20 }}></div>
                            <a href="https://itunes.apple.com/us/app/1ask-h%E1%BB%8Fi-%C4%91%C3%A1p-t%E1%BB%A9c-th%E1%BB%9Di/id1184580236?mt=8">
                                <img src={appstore} alt="" style={{ height: 40 }} />
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
export default connect(mapStateToProps)(Login)