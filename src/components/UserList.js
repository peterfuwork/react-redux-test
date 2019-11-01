import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        const { user } = this.props;
        return (
            <div>
                <Link className="user" to={`/users/${this.props.user.id}`}>
                    <img ref={this.imageRef} alt={ user.name } src={ faker.image.avatar() } />
                    <div>{ user.name }</div>
                    <div>{ user.email }</div>
                    <div>
                        { user.address.street }&nbsp;
                        { user.address.suite }&nbsp;
                        { user.address.city }&nbsp;
                        { user.address.zipcode }
                    </div>
                    
                    <div>{ user.phone }</div>
                    <div>{ user.website }</div>
                    <br />
                </Link>
            </div>
        )
    }
}

export default UserList;