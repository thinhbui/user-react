import './login.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreators } from '../../reducer/reducer';

import bg from '../../images/bg5.png';
import logo from '../../images/logoapp_User@2x.png';
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';

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
            <div className="container"  >
                <img src={bg} style={{ width: 500, position: 'absolute' }} />
                <div style={{ flex: 2 }}>
                 
                </div>
                <div style={{ flex: 1 }}>
                    <img src={logo} style={{  position: 'relative' }} />
                </div>
                <div style={{ display:'flex',flex: 1 , position: 'relative', justifyContent:'center', alignItems:'center' }}>
                    <div style={{color:'white',  fontWeight:'bold'}}>Nền tảng Giáo Dục theo yêu cầu</div>
                </div>
                < div style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    {/*<img src={facebook} style={{position: 'relative'}}/>*/}
                    <FacebookLogin
                        appId="287502975038002"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookLogin}
                        cssClass="button-facebook"
                    />
                </div>

                <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', }}>

                    <GoogleLogin
                        style={{
                            display: 'inline-block',
                            background: '#d14836',
                            color: '#fff',
                            width: 400,
                            position: 'relative',
                            height:40,
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 20,
                            border: '1px solid transparent',
                            fontSize: 16,
                            fontWeight: 'bold',
                            fontFamily: 'Roboto',
                        }}
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        onSuccess={this.googleLogin}
                        onFailure={this.googleLogin}
                    />
                </div>
                <div style={{ flex: 5 }}></div>
            </div >
        )
    }
}
export default connect(mapStateToProps)(Login)