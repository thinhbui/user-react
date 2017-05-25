import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo_app from '../../images/logoapp_User.png';
import icon_pathway from '../../images/icon_pathway0.png';
import icon_person from '../../images/icon_person0.png';
import icon_question from '../../images/icon_question.png';
import icon_pathway1 from '../../images/icon_pathway1.png';
import icon_person1 from '../../images/icon_person1.png';
import icon_question1 from '../../images/icon_question1.png';
import icon_profile from '../../images/profile.png';
import icon_store from '../../images/store.png';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        }
    }
    render() {
        return (
            <div style={{ width: '100%', margin: 0, height: 77, backgroundColor: '#edeff2', border: '1px solid rgba(0,0,0,.0975)' }}>
                <div className='container'>
                    <ul className="nav">
                        <li style={{ flex: 1 }}>
                            <NavLink exact to='/' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <img style={{ height: 40, backgroundColor: 'rgb(85,96,128)', borderRadius: 5 }} src={logo_app} onClick={() => this.setState({ page: 'home' })} />
                                <div style={{ color: 'rgb(85,96,128)', fontWeight: 200, alignSelf: 'flex-start', fontSize: 14 }}>Nền tảng giáo dục theo yêu cầu</div>
                            </NavLink>
                        </li>
                        <li style={{ flex: 1 }}>
                            <input type="text" placeholder="Tìm kiếm" />
                        </li>
                        <div style={{ flex: .5, display: 'flex' }}>

                            <li style={{ flex: 1 }}>
                                <NavLink activeClassName='active' to='/pathway'>
                                    {this.state.page == 'pathway' ?
                                        <img src={icon_pathway1} onClick={() => this.setState({ page: 'pathway' })} />
                                        :
                                        <img src={icon_pathway} onClick={() => this.setState({ page: 'pathway' })} />
                                    }
                                </NavLink>
                            </li>
                            <li style={{ flex: 1 }}>
                                <NavLink activeClassName='active' to='/plaza'>
                                    <img src={icon_store} onClick={() => this.setState({ page: 'plaza' })} />
                                </NavLink>
                            </li>
                            <li style={{ flex: 1 }}>
                                <NavLink activeClassName='active' to='/person'>
                                    <img src={icon_profile} onClick={() => this.setState({ page: 'person' })} />
                                </NavLink>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Nav;