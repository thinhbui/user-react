import React, { Component } from 'react';
import './payment.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Redirect } from 'react-router-dom';
import ic_video from '../../images/ic_video.png';
import ic_voice from '../../images/ic_voice.png';
import ic_document from '../../images/ic_document.png';
import ic_cancel from '../../images/ic_cancel0.png';
import avatar from '../../images/avatar.png';
import ic_credit from '../../images/ic_credit.png';
import ic_next from '../../images/ic_next0.png';
import ic_down from '../../images/ic_down0.png';
import ic_bank from '../../images/ic_bank.png';
import ic_phonecard from '../../images/ic_phonecard.png';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoBank: false,
            infoPhone: false,
            value: 1,
            success: false
        }
    }

    handleChange = (event, index, value) => this.setState({ value });

    handleClickBank = () => {
        this.setState({ infoBank: !this.state.infoBank });
        console.log(this.state.infoBank)
    }
    handleClickPhone = () => {
        this.setState({ infoPhone: !this.state.infoPhone });
        console.log(this.state.infoPhone)
    }
    render() {
        return (

            <div className="container" style={{ color: 'gray', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                {this.state.success && <Redirect to="/document" />}
                <div style={{ display: 'flex', height: 60, flexDirection: 'row', width: 600, backgroundColor: 'rgb(0, 178, 185)' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={ic_cancel} style={{ cursor: 'pointer', width: 30, height: 30 }} onClick={() => this.setState({ back: true })} />
                    </div>
                    <div style={{ flex: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 600 }}>
                        Thanh toán đơn hàng
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  </div>
                </div >
                <div style={{ display: 'flex', flexDirection: 'column', width: 600, alignItems: 'center', }}>
                    <div style={{ display: 'flex', color: 'rgb(0, 178, 185)', height: 40, alignItems: 'center', fontWeight: 'bold' }}>CÁM ƠN BẠN ĐÃ ĐĂNG KÝ KHÓA HỌC</div>
                    <div style={{ height: 40, textAlign: 'center', color: 'gray' }}>Xin chào <span style={{ fontWeight: 'bold', color: 'black' }}>Ngọc Mai</span>, chúng tôi đã xác nhận khóa học của bạn, chắc chắn khóa học sẽ mang lại thật nhiều kiến thức bổ ích dành cho bạn</div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 130, marginTop: 15, alignItems: 'center' }}>
                        <div style={{ fontSize: 14, marginLeft: 40, position: 'absolute', backgroundColor: 'white', marginTop: -10, alignSelf: 'flex-start' }}>Thông tin đơn hàng:</div>
                        <div style={{ border: '1px solid gray', display: 'flex', flexDirection: 'row', width: '90%', flex: 1 }}>
                            <div style={{ flex: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={avatar} style={{ width: 100, height: 100, borderRadius: 10 }} />
                            </div>
                            <div style={{ display: 'flex', flex: 4, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                                <span style={{
                                    display: 'flex', justifyContent: 'center',
                                    alignItems: 'flex-start', fontWeight: 580, fontSize: 18
                                }}>3 Tuần để thành cao thủ tích phân</span>
                                <span style={{
                                    display: 'flex', justifyContent: 'center',
                                    alignItems: 'flex-start', color: 'gray', fontSize: 14, margin: 2
                                }}>Giảng viên: Nguyễn Ngọc Đức</span>
                                <div style={{ display: 'flex', flexDirection: 'row', fontSize: 12 }}>
                                    <div style={{ margin: 5, alignItems: 'center', display: 'flex' }}>
                                        <img src={ic_video} style={{ marginRight: 5, width: 20 }} /> 20 videos
                                 </div>
                                    <div style={{ margin: 5, alignItems: 'center', display: 'flex' }}>
                                        <img src={ic_voice} style={{ marginRight: 5, width: 13 }} /> 10 voices
                                </div>
                                    <div style={{ margin: 5, alignItems: 'center', display: 'flex' }}>
                                        <img src={ic_document} style={{ marginRight: 5, width: 13 }} /> 80 documents
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="text" style={{ height: 50, width: '80%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10 }} placeholder="Mã khuyến mãi" />
                    <input type="text" style={{ height: 50, width: '80%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10 }} placeholder="Số điện thoại kèm mã" />
                    <button className="button-payment" style={{ height: 50, width: '80%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10 }} >Xác minh mã khuyến mãi</button>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', marginTop: 30, flexDirection: 'column', width: '100%', fontWeight: 'bold' }}>
                        <span style={{ position: 'absolute', backgroundColor: 'white', marginTop: -16 }}>Chi tiết đơn hàng</span>
                        <div style={{ display: 'flex', borderTop: '1px solid gray', borderBottom: '1px solid gray', width: '100%', height: 100, justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', height: 25, marginLeft: 4 }}>
                                <span>Tổng giá trị sản phẩn</span>
                                <div style={{ flex: 1 }}></div>
                                <span style={{ marginRight: 5, color: 'rgb(0,178,185)', fontWeight: 'bold' }}>500.000vnđ</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', height: 25, marginLeft: 4 }}>
                                <span>Khuyến mãi</span>
                                <div style={{ flex: 1 }}></div>
                                <span style={{ marginRight: 5, color: 'rgb(0,178,185)', fontWeight: 'bold' }}>50%</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', height: 25, marginLeft: 4 }}>
                                <span>Phí vận chuyển</span>
                                <div style={{ flex: 1 }}></div>
                                <span style={{ marginRight: 5, color: 'rgb(0,178,185)', fontWeight: 'bold' }}>0 vnđ</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', height: 25, marginLeft: 4, marginTop: 10 }}>
                            <span>Tổng cộng</span>
                            <div style={{ flex: 1 }}></div>
                            <span style={{ marginRight: 5, color: 'rgb(0,178,185)', fontWeight: 'bold' }}>250.000vnđ</span>
                        </div>

                    </div>
                    <div
                        style={{
                            alignItems: 'center', display: 'flex', flexDirection: 'row', height: 50, fontSize: 18, color: 'white', width: '100%',
                            border: '1px solid rgb(0,178,185)', backgroundColor: 'rgb(0,178,185)', borderRadius: 10, marginTop: 10
                        }}>
                        <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ic_credit} style={{ width: 34 }} />
                        </div>
                        <div style={{ flex: 1, marginLeft: 10 }}>Thẻ tín dụng</div>
                        <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ic_next} style={{ width: 20 }} />
                        </div>
                    </div>
                    {this.state.infoBank ?
                        <div style={{ display: 'flex', height: 300, width: '100%', border: '1px solid rgb(0,178,185)', borderRadius: 10, marginTop: 10 }}>
                            <div onClick={this.handleClickBank}
                                style={{
                                    alignItems: 'center', display: 'flex', flexDirection: 'row', height: 50, fontSize: 18, color: 'white', width: '100%',
                                    border: '1px solid rgb(0,178,185)', backgroundColor: 'rgb(0,178,185)', borderRadius: 10, cursor: 'pointer'
                                }}>
                                <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={ic_bank} style={{ width: 34 }} />
                                </div>
                                <div style={{ flex: 1, marginLeft: 10 }}>Chuyển khoản qua tài khoản ngân hàng</div>
                                <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={ic_down} style={{ width: 30 }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}></div>
                        </div>
                        :
                        <div onClick={() => { this.setState({ infoBank: !this.state.infoBank }); console.log(this.state.infoBank) }}
                            style={{
                                alignItems: 'center', display: 'flex', flexDirection: 'row', height: 50, fontSize: 18, color: 'white', width: '100%',
                                border: '1px solid rgb(0,178,185)', backgroundColor: 'rgb(0,178,185)', borderRadius: 10, marginTop: 10, cursor: 'pointer'
                            }}>
                            <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={ic_bank} style={{ width: 34 }} />
                            </div>
                            <div style={{ flex: 1, marginLeft: 10 }}>Chuyển khoản qua tài khoản ngân hàng</div>
                            <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={ic_next} style={{ width: 20 }} />
                            </div>
                        </div>
                    }
                    {this.state.infoPhone ?
                        <div style={{
                            display: 'flex', flexDirection: 'column', height: 350, width: '100%', alignItems: 'center',
                            border: '1px solid rgb(0,178,185)', borderRadius: 10, marginTop: 10
                        }}>
                            <div onClick={this.handleClickPhone}
                                style={{
                                    alignItems: 'center', display: 'flex', flexDirection: 'row', height: 50, fontSize: 18, color: 'white', width: '100%',
                                    border: '1px solid rgb(0,178,185)', backgroundColor: 'rgb(0,178,185)', borderRadius: 10, cursor: 'pointer'
                                }}>
                                <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={ic_phonecard} style={{ width: 34 }} />
                                </div>
                                <div style={{ flex: 1, marginLeft: 10 }}>Nạp thẻ điện thoại</div>
                                <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={ic_down} style={{ width: 30 }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', height: 30, width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                                    <span> Tổng số tiền của bạn</span>
                                    <div style={{ flex: 1 }}></div>
                                    <span style={{ color: 'rgb(0,178,185)', fontWeight: 'bold' }}>20.000 vnđ</span>
                                </div>

                                <div >
                                    <SelectField
                                        style={{ height: 40, width: '100%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, textAlign: 'center' }}
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        <MenuItem style={{ textAlign: 'center' }} value={1} primaryText="Viettel" />
                                        <MenuItem style={{ textAlign: 'center' }} value={4} primaryText="Mobifone" />
                                        <MenuItem style={{ textAlign: 'center' }} value={5} primaryText="VinaPhone" />
                                    </SelectField>
                                </div>
                                <input type="text" style={{ height: 40, width: '100%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10 }} placeholder="Nhập số thẻ" />
                                <input type="text" style={{ height: 40, width: '100%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10 }} placeholder="Nhập số serial" />
                                <button
                                    onClick={() => this.setState({ success: true })}
                                    className="button-payment" style={{ height: 50, width: '100%', border: '1px solid rgb(0, 178, 185)', borderRadius: 20, marginTop: 10, marginBottom: 20, cursor: 'pointer' }} >Xác nhận thanh toán</button>
                            </div>
                        </div>
                        :
                        <div onClick={this.handleClickPhone}
                            style={{
                                alignItems: 'center', display: 'flex', flexDirection: 'row', height: 50, fontSize: 18, color: 'white', width: '100%',
                                border: '1px solid rgb(0,178,185)', backgroundColor: 'rgb(0,178,185)', borderRadius: 10, marginTop: 10, cursor: 'pointer'
                            }}>
                            <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={ic_phonecard} style={{ width: 34 }} />
                            </div>
                            <div style={{ flex: 1, marginLeft: 10 }}>Nạp thẻ điện thoại</div>
                            <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={ic_next} style={{ width: 20 }} />
                            </div>
                        </div>}

                </div>

                <div style={{ height: 20 }}></div>
            </div >
        )
    }
}