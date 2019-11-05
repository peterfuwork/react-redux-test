import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import UserList from './UserList';

class Users extends Component {
  render() {
    console.log(this.props)
    const { all_users } = this.props;
    return (
        <Fragment>
            {
                all_users.length === 0 ? (<div>Loading...</div>) : (
                  all_users.map((e, i) => {
                        return <UserList single_user={e} key={i} routerProps={this.props} />;
                    })
                )
            }
        </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { 
      all_users: state.users.all_users,
      user: state.users.user
  };
}

export default connect(mapStateToProps, actions)(Users);
