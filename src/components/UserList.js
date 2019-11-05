import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import faker from 'faker';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // this.imageRef.current.addEventListener('load', this.setDiv);
    }

    // setDiv = () => {
    //     console.log(this.imageRef.current.clientHeight);
    // }

    render() {
        console.log(this.props)
        const { single_user } = this.props;
        return (
            <div>
                <Link className="user" onClick={() => this.props.fetchUser(this.props.single_user.id)} to={`/users/${this.props.single_user.id}`}>
                    <img ref={this.imageRef} alt={ single_user.name } src={ faker.image.avatar() } />
                    <div>{ single_user.name }</div>
                    <div>{ single_user.email }</div>
                    <div>
                        { single_user.address.street }&nbsp;
                        { single_user.address.suite }&nbsp;
                        { single_user.address.city }&nbsp;
                        { single_user.address.zipcode }
                    </div>
                    
                    <div>{ single_user.phone }</div>
                    <div>{ single_user.website }</div>
                    <br />
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        all_users: state.users.all_users,
    };
  }

export default connect(mapStateToProps, actions)(UserList);