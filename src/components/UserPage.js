import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class UserPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    const { users, match } = this.props;
    const [ user ] = users.filter(user => user.id === Number(match.params.id));
    if(users.length === 0) {
        return (
            <div>
                loading...
            </div>
        );
    }
    return (
        <Fragment>
            <Link to="/">&lt;&nbsp;Back</Link>
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
        users: state.users
    };
}

export default connect(mapStateToProps, null)(UserPage);
