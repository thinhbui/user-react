import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ic_lock0 from '../../images/ic_lock0.png';
import ic_lock1 from '../../images/ic_lock1.png';
import ic_lock2 from '../../images/ic_lock2.png';
import ic_topic from '../../images/ic_topic.png';
import ic_back from '../../images/ic_back0.png';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_document from '../../images/ic_document.png';
import ic_notification from '../../images/ic_notification2.png';
import ic_question from '../../images/ic_question.png';
import ic_step_back from '../../images/ic_step_back.png';
import ic_step_next from '../../images/ic_step_next.png';

class LessonItem extends Component {
    render() {
        return (
            <div className="flex" style={{ flexDirection: 'row', height: 50, alignItems: 'center', marginBottom: 10 }} onClick={this.props.onClick}>
                <div style={{ width: 50 }}></div>
                <div className="flex" style={{ flex: 9, height: '100%', flexDirection: 'column' }}>
                    <span style={{ fontSize: 16, flex: 1, marginTop: 5 }}>Mindmap Nguyên hàm tích phân</span>
                    <div className="flex" style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <div style={{ flexDirection: 'row', display: 'flex', marginRight: 10 }}>
                            <div> <img src={ic_video} alt="" /></div>
                            <span style={{ marginLeft: 5, fontSize: 14 }}>20 video</span>
                        </div>
                        <div style={{ flexDirection: 'row', display: 'flex', marginRight: 10 }}>
                            <div> <img src={ic_voice} alt="" /></div>
                            <span style={{ marginLeft: 5, fontSize: 14 }}>10 voice</span>
                        </div>
                        <div style={{ flexDirection: 'row', display: 'flex', marginRight: 10 }}>
                            <div> <img src={ic_document} alt="" /></div>
                            <span style={{ marginLeft: 5, fontSize: 14 }}>20 document</span>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <img src={this.props.iconLock} alt="" />
                </div>
            </div>
        )
    }
}
export class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0
        }
        this.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
            new Date().getHours(), (new Date().getMinutes() + 10), new Date().getSeconds()).getTime();
        this.runInterval;
    }
    componentDidMount() {
        this.run();
    }
    componentDidUpdate() {
        if (this.time - new Date().getTime() <= 0)
            clearInterval(this.runInterval);
    }
    run = () => {
        this.runInterval = setInterval(() => {
            let now = new Date().getTime();

            this.setState({
                minutes: Math.floor((this.time - now) / 60000),
                seconds: Math.floor((this.time - now) % 60000 / 1000)
            })
        }, 1000)
    }
    render() {
        return (
            <div style={{ display: 'flex', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', height: 50, flexDirection: 'row', width: '100%', backgroundColor: 'rgb(0, 178, 185)' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={ic_back} style={{ cursor: 'pointer' }} onClick={() => this.setState({ back: true })} />
                    </div>
                    <div style={{ flex: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 600 }}>
                        {this.props.name}
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <img src={ic_notification} /></div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <img src={ic_question} /></div>
                </div >
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%', }}>
                    <div style={{ display: 'flex', height: 30, backgroundColor: 'gray', flexDirection: 'row', width: '100%', }}>
                        <div style={{ display: 'flex', height: '100%', width: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ic_step_back} alt="" />
                        </div>
                        <div style={{ display: 'flex', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: 'white', marginRight: 5 }}>Duration: </span>
                            <span style={{ color: 'rgb(254,235,186)' }}>0{this.state.minutes}:{this.state.seconds >= 10 ? this.state.seconds : `0${this.state.seconds}`}</span>
                        </div>
                        <div style={{ display: 'flex', height: '100%', width: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ic_step_next} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
            learn: false
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {this.state.back && <Redirect to="/" />}
                <div style={{ display: 'flex', height: 50, flexDirection: 'row', width: '100%', backgroundColor: 'rgb(0, 178, 185)' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={ic_back} style={{ cursor: 'pointer' }} onClick={() => this.setState({ back: true })} />
                    </div>
                    <div style={{ flex: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 600 }}>
                        3 Tuần để trở thành cao thủ tích phân
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <img src={ic_notification} /></div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <img src={ic_question} /></div>
                </div >
                <div className="flex" style={{ width: '100%', flex: 1 }}>
                    <div className="flex">
                        <div className="flex center" style={{ height: 70, flexDirection: 'row' }}>
                            <img src={ic_topic} />
                            <span style={{ fontSize: 18, marginLeft: 10 }}>Tổng hợp nguyên hàm</span>
                        </div>
                        <LessonItem iconLock={ic_lock2} handleClick={() => this.setState({ learn: true })} />
                        <LessonItem iconLock={ic_lock2} handleClick={() => this.setState({ learn: true })} />
                        <LessonItem iconLock={ic_lock1} />
                        <LessonItem iconLock={ic_lock0} />
                        <LessonItem iconLock={ic_lock0} />
                        <LessonItem iconLock={ic_lock0} />
                        <button style={{ borderRadius: 20, height: 40, width: 300, borderStyle: 'none', alignSelf: 'center', backgroundColor: 'rgb(0, 178, 185)', color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                            Thi vượt rào
                        </button>
                    </div>
                    <div className="flex">
                        <div className="flex center" style={{ height: 70, flexDirection: 'row' }}>
                            <img src={ic_topic} />
                            <span style={{ fontSize: 18, marginLeft: 10 }}>Tổng hợp nguyên hàm</span>
                        </div>
                        <LessonItem iconLock={ic_lock2} />
                        <LessonItem iconLock={ic_lock2} />
                        <LessonItem iconLock={ic_lock1} />
                        <LessonItem iconLock={ic_lock0} />
                        <LessonItem iconLock={ic_lock0} />
                        <LessonItem iconLock={ic_lock0} />
                        <button style={{ borderRadius: 20, height: 40, width: 300, borderStyle: 'none', alignSelf: 'center', backgroundColor: 'rgb(0, 178, 185)', color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                            Thi vượt rào
                        </button>
                    </div>

                </div>
            </div >
        )
    }
}
