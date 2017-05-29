import React, { Component } from 'react';
import './question_detail.css';
import minions from '../../images/minion.png';
import icon_profile from '../../images/profile.png';
import { Redirect } from 'react-router-dom';
import Lightbox from 'react-images';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import avatar from '../../images/avatar.png';

export default class QuestionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            showComment: false
        }
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.listComment = [
            {
                id: 1,
                avatar: { icon_profile },
                message: "Hello"

            },
            {
                id: 2,
                avatar: { icon_profile },
                message: "Ahihi. Cậu là đồ ngốc"

            },
            {
                id: 1,
                avatar: { icon_profile },
                message: "Hihi"

            },
            {
                id: 2,
                avatar: { icon_profile },
                message: "Hi cc"

            },
            {
                id: 1,
                avatar: { icon_profile },
                message: "Ừm"

            },
            {
                id: 2,
                avatar: { icon_profile },
                message: "<3"
            }
        ]
    }
    renderComment = (comment, index) => {
        return (
            <div key={index} style={{ padding: 16, display: 'flex', alignItems: 'center', border: '1px solid rgb(237, 239, 242)' }}>
                {comment.id == 1 ? <img src={icon_profile} style={{ width: 30 }} /> : <img src={avatar} style={{ width: 30, borderRadius: 15, height: 30 }} />}
                <div style={{ marginLeft: 10 }}>{comment.message}</div>
            </div>
        )
    }

    openLightbox(index, event) {
        // event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    render() {

        return (
            <div className="container" style={{ display: 'flex', flexDirection: 'column', color: 'black', width: 600, cursor: 'pointer' }}>
                <Card style={{ width: 600, marginTop: 20, border: '1px solid #edeff2', zIndex: 0 }}>
                    <CardHeader
                        title="Đỗ Thị Ngọc Mai"
                        subtitle="Toán"
                        avatar={icon_profile}
                        style={{ width: 600 }}
                        actAsExpander={true}
                    />
                    <CardMedia
                        mediaStyle={{ width: 600 }}
                        style={{ width: 600 }}
                    >
                        <Lightbox
                            images={[{ src: 'http://www.designbolts.com/wp-content/uploads/2013/07/Despicable-me-2-minion-hitman.jpg', caption: 'Đỗ Thị Ngọc Mai - Giúp e bài này với' }]}
                            isOpen={this.state.lightboxIsOpen}
                            onClose={this.closeLightbox}
                        />
                        <img src={minions} onClick={() => this.openLightbox()} />
                    </CardMedia >
                    <CardTitle title="Giúp e bài này với" subtitle="Phân tích nụ cười của Yao Ming" />
                    <div onClick={() => this.setState({ showComment: !this.state.showComment })} style={{ padding: 16, cursor: 'pointer', color: 'gray', fontSize: 14, border: '1px solid rgb(237, 239, 242)' }}>
                        {!this.state.showComment ? 'Xem bình luận' : 'Ẩn bình luận'}
                    </div>
                    {this.state.showComment && this.listComment.map(this.renderComment)}
                </Card>
                <div style={{ height: 40 }}></div>

            </div >
        )
    }
}
//http://www.designbolts.com/wp-content/uploads/2013/07/Despicable-me-2-minion-hitman.jpg
