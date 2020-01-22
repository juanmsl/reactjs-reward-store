import React from "react";
import {connect} from 'react-redux';

import {actions as UsersActions} from 'store/reducers/users';

const UsersHOC = (Component) => {
    class UsersContainer extends React.Component {
        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    const mapStateToProps = (state) => ({
        users: state.users
    });

    return connect(
        mapStateToProps,
        {...UsersActions}
    )(UsersContainer);
};

export default UsersHOC;