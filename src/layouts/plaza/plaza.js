import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { IconButton } from 'material-ui';
import { StarBorder } from 'material-ui';
import { LessonItem } from '../lesson/lesson';
import { Redirect } from 'react-router-dom';

import ic_lock0 from '../../images/ic_lock0.png';
import ic_lock1 from '../../images/ic_lock1.png';
import ic_lock2 from '../../images/ic_lock2.png';
import ic_topic from '../../images/ic_topic.png';
import img1 from '../../images/bg1.png';
import img2 from '../../images/bg2.png';
import img3 from '../../images/bg3.png';
import img4 from '../../images/bg4.png';
import img5 from '../../images/bg5.png';
import tab from '../../images/tab.png';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_document from '../../images/ic_document.png';
import study from '../../images/study.png';
import banner from '../../images/quangcao.png';
import avatar from '../../images/avatar.png';
import decor from '../../images/decor.png';
import ic_quotation0 from '../../images/ic_quotation0.png';
import ic_quotation1 from '../../images/ic_quotation1.png';
const tilesData = [
    {
        img: img1,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: img2,
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: img3,
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: img4,
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: img5,
        title: 'Morning',
        author: 'fancycrave1',
    },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
class OneAskPlaza extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%', justifyContent: 'center' }}>
                <div style={{ height: 100, alignSelf: 'center' }}>
                    <img src={banner} style={{ width: 600, height: 100 }} />
                </div>
                <ObjectItem name="Toán học" />
                <ObjectItem name="Hóa học" />
                <ObjectItem name="Vật lý" />
                <ObjectItem name="Sinh học" />
                <ObjectItem name="Hóa học" />
                <ObjectItem name="Hóa học" />
            </div>
        )
    }
}
export class DetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: false
        }
    }
    render() {
        return (
            <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', height: 150, flexDirection: 'row', border: '1px solid rgb(172, 172, 172)', width: 600, borderRadius: 5, marginTop: 20 }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="profile-small">
                            <img src={avatar} style={{ zIndex: 0, width: 90, height: 90, position: 'absolute', borderRadius: 50 }} />
                            <img src={decor} style={{ zIndex: 1, width: 120 }} />
                        </div>
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

                    </div>
                </div>
                <div style={{ display: 'flex', width: 600, flexDirection: 'row', marginTop: 5 }}>
                    <div>
                        <img src={ic_quotation0} style={{ width: 25, marginTop: 10 }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: 550, flexDirection: 'row', marginTop: 15 }}>
                        &thinsp; Tích phân là một khái niệm toán học,và cùng với nghịch đảo của nó vi phân
                    (differentiation) đóng vai trò là 2 phép tính cơ bản và chủ chốt trong lĩnh vực giải tích (calculus).
                    Có thể hiểu đơn giản tích phân như là diện tích hoặc diện tích tổng quát hóa. </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10 }}>
                        <img src={ic_quotation1} style={{ width: 25 }} />
                    </div>
                </div>
                <div style={{ height: 20, width: 550, borderBottom: '1px solid rgba(0,0,0,.0975)' }}></div>
                <div className="flex" style={{ width: 600, flexDirection: 'column' }}>
                    <div className="flex center" style={{ height: 70, flexDirection: 'row' }}>
                        <img src={ic_topic} style={{ height: 30 }} />
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
                    <div className="flex center" style={{ height: 70, flexDirection: 'row' }}>
                        <img src={ic_topic} style={{ height: 30 }} />
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
                    <div className="flex center" style={{ height: 70, flexDirection: 'row' }}>
                        <img src={ic_topic} style={{ height: 30 }} />
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
                <div style={{ height: 50, display: 'flex', flexDirection: 'row', color: 'white', fontSize: 18, fontWeight: 700, width: 600, backgroundColor: 'rgb(0, 178, 185)', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} onClick={() => { this.setState({ payment: true }) }} >Mua ngay: 500k</div>
                    <div style={{ backgroundColor: 'white', width: 2, height: '100%' }} />
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>Đăng kí học thử</div>
                </div>
                <div style={{ height: 20 }}></div>
                {this.state.payment && <Redirect to="/payment" />}
            </div >

        )
    }
}
class ObjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeDetail: false
        }
    }
    render() {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 600, alignSelf: 'center', border: '1px solid rgba(0,0,0,.0975)' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <div style={{ height: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <img src={tab} style={{ alignSelf: 'flex-start', height: 30 }} />
                            <text style={{ color: 'white', position: 'absolute', marginLeft: 15 }}>{this.props.name}</text>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}></div>
                    <div style={{ height: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 5 }}
                        onClick={() => this.setState({ seeDetail: true })}>
                        <text style={{ alignSelf: 'flex-end', color: 'gray', cursor: 'pointer' }}>Xem thêm</text>
                    </div>
                </div>


                <GridList style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', height: 250 }} cols={2.2}>
                    {tilesData.map((tile) => (
                        <div key={tile.img}
                            style={{ width: 200, display: 'flex', flexDirection: 'column', marginLeft: 20, border: '1px solid gray', height: 220 }} >
                            <img src={tile.img} style={{ width: 200, height: 100 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-start', paddingLeft: 5 }}>
                                <div style={{ fontWeight: 599, textAlign: 'left', flex: 1, paddingTop: 5 }}>3 Tuần để thành cao thủ tích phân</div>
                                <div style={{ color: 'gray', fontSize: 12, flex: 1, justifyContent: 'space-around', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ color: 'gray', fontSize: 12, textAlign: 'left' }}>Giảng viên: Nguyễn Ngọc Đức</div>
                                    <div style={{ color: 'gray', fontSize: 12, textAlign: 'left' }}>20 bài giảng</div>
                                </div>

                                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                                    <div style={{ textDecoration: 'line-through', color: 'gray' }}>500k</div>
                                    <div style={{ color: 'red' }}>200k</div>
                                    <button
                                        onClick={() => this.setState({ seeDetail: true })}
                                        style={{
                                            width: '50%', border: '1px solid rgb(0, 178, 185)',
                                            color: 'rgb(0, 178, 185)', backgroundColor: 'white', borderRadius: 5, cursor: 'pointer'
                                        }}>Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </GridList>
                {this.state.seeDetail && <Redirect to="detail" />}
            </div >
        )
    }
}
export default OneAskPlaza;