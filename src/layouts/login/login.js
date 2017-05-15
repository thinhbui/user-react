import './login.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreators } from '../../reducer/reducer';

import bg1 from '../../images/1.png';


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
                <div className="container">
                    {/*<img src={bg1} style={{ width: 500 }} />*/}
                    <FacebookLogin
                        appId="287502975038002"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="button-facebook"
                        icon="fa-facebook"
                    />

                    <GoogleLogin
                        style={{
                            display: 'inline-block',
                            background: '#d14836',
                            color: '#fff',
                            width: '80%',
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
        )
    }
}
export default connect(mapStateToProps)(Login)