import React from "react";
import {CoinImage} from "components";
import './index.scss';


class ProductHistoryCard extends React.Component {

    render() {
        const {name, cost, category, img} = this.props;
        const {url} = img;

        return (
            <article className="aca-product-history-card">
                <img src={url} alt={name} className="aca-product-image"/>
                <p className="aca-product-name">{name}</p>
                <section className="aca-product-body">
                    <p>{category}</p>
                    <p><CoinImage /> {cost}</p>
                </section>
            </article>
        );
    }
}

export default ProductHistoryCard;