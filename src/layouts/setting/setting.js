import React, { Component } from 'react';
import './setting.css';

import { Redirect, Link } from 'react-router-dom'

export default class Setting extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cancel: false
    //     }
    // }
    render() {
        return (
            <div className="container" style={{ height: 500, display: 'flex', flexDirection: 'column', marginTop: 50, color: 'black', width: 800 }}>
                <h2 style={{ fontWeight: 200, color: 'black' }}> Chỉnh sửa thông tin cá nhân  </h2>
                <div style={{ display: 'flex', flexDirection: 'column', height: 50 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 400, alignSelf: 'center', flex: 1, fontSize: 18 }}>Tên</div>
                        <div style={{ flex: 3, marginLeft: 20 }}>
                            <input style={{ height: 20 }} type="text" defaultValue="Mai Do" />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 50 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 400, alignSelf: 'center', flex: 1, fontSize: 18 }}>Số điện thoại</div>
                        <div style={{ flex: 3, marginLeft: 20 }}>
                            <input style={{ height: 20 }} type="text" defaultValue="0134584654" />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 50 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 400, alignSelf: 'center', flex: 1, fontSize: 18 }}>Email</div>
                        <div style={{ flex: 3, marginLeft: 20 }}>
                            <input style={{ height: 20 }} type="text" defaultValue="maido@gmail.com" />
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/person"><button style={{ cursor: 'pointer', height: 30, width: 150, marginLeft: 120 }} onClick={() => this.setState({ cancel: true })}>Save</button></Link>
                    <Link to="/person"> <button style={{ cursor: 'pointer', height: 30, width: 150, marginLeft: 10 }} onClick={() => this.setState({ cancel: true })}>Cancel</button></Link>
                </div>
                {/*{this.state.cancel && <Redirect to="/person" />}*/}
            </div >
        )
    }
}