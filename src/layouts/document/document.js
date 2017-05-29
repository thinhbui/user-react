import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';


import { CircularProgress } from 'material-ui';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_document from '../../images/ic_document.png';
import study from '../../images/study.png';


export default class Document extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            learning: false
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%', alignItems: 'center', marginTop: 20 }}>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', height: 220, flexDirection: 'row', border: '1px solid rgb(172, 172, 172)', borderBottomWidth: 3, width: 600 }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress
                                mode="determinate"
                                value={50}
                                size={120}
                                thickness={5}> 84</CircularProgress>
                        </div>
                        <div style={{ display: 'flex', flex: 2, alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                            <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: '100%' }}>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', fontWeight: 580, fontSize: 18 }}>3 Tuần để thành cao thủ tích phân</span>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', color: 'gray', fontSize: 14, margin: 5 }}>Giảng viên: Nguyễn Ngọc Đức</span>
                                <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12, width: '80%' }}>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1 }}>
                                        <img src={ic_video} style={{ marginRight: 10 }} /> 20 videos
                                    </div>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1 }}>
                                        <img src={ic_voice} style={{ marginRight: 10 }} /> 10 voices
                                    </div>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1.2 }}>
                                        <img src={ic_document} style={{ marginRight: 10 }} /> 80 documents
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex', flex: 2, alignItems: 'flex-start', flexDirection: 'column', width: '100%'
                            }}>
                                <Link to="/lesson/1231">
                                    <button style={{ fontWeight: 'normal', width: 250, cursor: 'pointer' }} className="midle-button" >Learning now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 20 }}> </div>
                    <div style={{ display: 'flex', height: 220, flexDirection: 'row', border: '1px solid rgb(172, 172, 172)', borderBottomWidth: 3, width: 600 }}>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress
                                mode="determinate"
                                value={50}
                                size={120}
                                thickness={5}> 84</CircularProgress>
                        </div>
                        <div style={{ display: 'flex', flex: 2, alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                            <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: '100%' }}>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', fontWeight: 580, fontSize: 18 }}>3 Tuần để thành cao thủ tích phân</span>
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', color: 'gray', fontSize: 14, margin: 5 }}>Giảng viên: Nguyễn Ngọc Đức</span>
                                <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12, width: '80%' }}>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1 }}>
                                        <img src={ic_video} style={{ marginRight: 10 }} /> 20 videos
                                    </div>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1 }}>
                                        <img src={ic_voice} style={{ marginRight: 10 }} /> 10 voices
                                    </div>
                                    <div className="item-lesson" style={{ margin: 5, flex: 1.2 }}>
                                        <img src={ic_document} style={{ marginRight: 10 }} /> 80 documents
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex', flex: 2, alignItems: 'flex-start', flexDirection: 'column', width: '100%'
                            }}>
                                <Link to="/lesson/1231">
                                    <button style={{ fontWeight: 'normal', width: 250, cursor: 'pointer' }} className="midle-button" onClick={() => { this.setState({ learning: true }) }}>Learning now</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', height: 300, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img src={study} style={{ height: 120 }} />
                        <div style={{}}>Find Pathway you are interested in and enroll</div>
                    </div>
                    <Link to="/plaza">
                        <button style={{ cursor: 'pointer' }} className="midle-button" >
                            Go to 1ASK Plaza
                    </button></Link>
                </div>
                {/*{this.state.redirect && <Redirect to="/plaza" />}*/}
                {/*{this.state.learning && <Redirect to="/lesson/1231" />}*/}
            </div >
        )
    }
}