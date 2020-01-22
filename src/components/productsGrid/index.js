import React from "react";
import {Constants} from "utils";
import {ProductCard} from "components";
import './index.scss';
import {ReduxContainers} from "hocs";


class ProductsGrid extends React.Component {

    renderProducts = (products) => (
        products.map((product, i) => (
            <ProductCard key={i} {...product} redeemProduct={this.props.redeemProduct} />
        ))
    );

    getFilteredProducts = ({name, orderBy}, products) => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
        const [field, order] = orderBy.split('/');
        return filteredProducts.sort((a, b) => {
            if(a[field] < b[field] && order === 'ASC') return -1;
            if(a[field] > b[field] && order === 'ASC') return 1;
            if(a[field] > b[field] && order === 'DSC') return -1;
            if(a[field] < b[field] && order === 'DSC') return 1;
            return 0;
        });
    };

    render() {
        const {products, status, error, className, filters} = this.props;

        if (status === Constants.FETCH.FAILED) {
            return (
                <section className={`aca-products-grid ${className}`}>
                    <p>{error}</p>
                </section>
            );
        }

        const filteredProducts = this.getFilteredProducts(filters, products);

        return (
            <section className={`aca-products-grid ${className}`}>
                {this.renderProducts(filteredProducts)}
            </section>
        );
    }
}

export default ReduxContainers.FiltersHOC(ProductsGrid);