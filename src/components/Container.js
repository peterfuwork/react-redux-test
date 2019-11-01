import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import UserList from './UserList';

class Container extends Component {
  render() {
    
    const { users } = this.props;
    console.log(this.props)
    return (
        <Fragment>
            {
                users.length === 0 ? (<div>Loading...</div>) : (
                users.map((e, i) => {
                        return <UserList user={e} key={i} routerProps={this.props} />;
                    })
                )
            }
        </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { 
      users: state.users
  };
}

export default connect(mapStateToProps, actions)(Container);
