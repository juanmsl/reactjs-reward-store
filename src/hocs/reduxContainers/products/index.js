import React from "react";
import {connect} from 'react-redux';

import {actions as ProductsActions} from 'store/reducers/products';

const ProductsHOC = (Component) => {
    class ProductsContainer extends React.Component {
        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    const mapStateToProps = (state) => ({
        products: state.products
    });

    return connect(
        mapStateToProps,
        {...ProductsActions}
    )(ProductsContainer);
};

export default ProductsHOC;