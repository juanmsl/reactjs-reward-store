import React from "react";
import {CoinImage} from "components";
import './index.scss';
import {ModalRedeemProducts} from "components";


class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    };

    render() {
        const {name, cost, category, img} = this.props;
        const {hdUrl} = img;

        return (
            <React.Fragment>
                <article className="aca-product-card" onClick={this.toggle}>
                    <img src={hdUrl} alt={name} className="aca-product-image"/>
                    <p className="aca-product-name">{name}</p>
                    <section className="aca-product-body">
                        <p>{category}</p>
                        <p><CoinImage/> {cost}</p>
                    </section>
                </article>
                <ModalRedeemProducts {...this.state} onClose={this.toggle} {...this.props} />
            </React.Fragment>
        );
    }
}

export default ProductCard;