import React from "react";
import {connect} from 'react-redux';

import {actions as FiltersActions} from 'store/reducers/filters';

const FiltersHOC = (Component) => {
    class FiltersContainer extends React.Component {
        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    const mapStateToProps = (state) => ({
        filters: state.filters
    });

    return connect(
        mapStateToProps,
        {...FiltersActions}
    )(FiltersContainer);
};

export default FiltersHOC;