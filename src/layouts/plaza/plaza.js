import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { IconButton } from 'material-ui';
import { StarBorder } from 'material-ui';

import img1 from '../../images/bg1.png';
import img2 from '../../images/bg2.png';
import img3 from '../../images/bg3.png';
import img4 from '../../images/bg4.png';
import img5 from '../../images/bg5.png';
import tab from '../../images/tab.png';
import banner from '../../images/quangcao.png';

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

class ObjectItem extends Component {
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
                    <div style={{ height: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 5 }}>
                        <text style={{ alignSelf: 'flex-end', color: 'gray' }}>Xem thêm</text>
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
                                    <button style={{
                                        width: '50%', border: '1px solid rgb(0, 178, 185)',
                                        color: 'rgb(0, 178, 185)', backgroundColor: 'white', borderRadius: 5
                                    }}>Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </GridList>
            </div>
        )
    }
}
export default OneAskPlaza;