import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo_app from '../../images/logoapp_User.png';
import icon_pathway from '../../images/icon_pathway0.png';
import icon_person from '../../images/icon_person0.png';
import icon_question from '../../images/icon_question.png';
import icon_pathway1 from '../../images/icon_pathway1.png';
import icon_person1 from '../../images/icon_person1.png';
import icon_question1 from '../../images/icon_question1.png';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        }
    }
    render() {
        return (
            <div className='container'>
                <ul className="nav">
                    <li style={{ flex: 1 }}>
                        <NavLink exact activeClassName='active' to='/'>
                            <img src={logo_app} onClick={() => this.setState({ page: 'home' })} />
                        </NavLink>
                    </li>
                    <li style={{ flex: 1 }}>
                        <input type="text" placeholder="Tìm kiếm" />
                    </li>
                    <div style={{ flex: .5, display: 'flex' }}>
                        <li style={{ flex: 1 }}>
                            <NavLink activeClassName='active' to='/document'>
                                {this.state.page == 'document' ?
                                    <img src={icon_question1} onClick={() => this.setState({ page: 'document' })} />
                                    :
                                    <img src={icon_question} onClick={() => this.setState({ page: 'document' })} />
                                }
                            </NavLink>
                        </li>
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
                            <NavLink activeClassName='active' to='/person'>
                                {
                                    this.state.page == 'person' ?
                                        <img src={icon_person1} onClick={() => this.setState({ page: 'person' })} />
                                        :
                                        <img src={icon_person} onClick={() => this.setState({ page: 'person' })} />
                                }
                            </NavLink>
                        </li>
                        <li style={{ flex: 1 }}>
                            <NavLink activeClassName='active' to='/plaza'>
                                {
                                    this.state.page == 'plaza' ?
                                        <img src={icon_person1} onClick={() => this.setState({ page: 'plaza' })} />
                                        :
                                        <img src={icon_person} onClick={() => this.setState({ page: 'plaza' })} />
                                }
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}
export default Nav;