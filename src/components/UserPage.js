import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchUser(Number(this.props.match.params.id))
    }

  render() {
    const { user } = this.props;
    console.log(this.props)
    if(user.length === 0) {
        return (
            <div>
                loading...
            </div>
        );
    }
    return (
        <Fragment>
            <Link onClick={() => this.props.removePrevUser()} to="/">&lt;&nbsp;Back</Link>
            <div>{ user.name }</div>
            <div>{ user.email }</div>
            <div>
                { user.address.street }&nbsp;
                { user.address.suite }&nbsp;
                { user.address.city }&nbsp;
                { user.address.zipcode }&nbsp;
            </div>
            <div>{ user.phone }</div>
            <div>{ user.website }</div>
        </Fragment>
    );
  }
}

function mapStateToProps(state) {
    return { 
        user: state.users.user
    };
}

export default connect(mapStateToProps, actions)(UserPage);
