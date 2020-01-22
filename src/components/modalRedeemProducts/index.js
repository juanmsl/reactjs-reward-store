import React from "react";
import Rodal from 'rodal';
import {ReduxContainers} from "hocs";
import {CoinImage} from "components/index";
import {Constants} from "utils";


class ModalRedeemProducts extends React.Component {
    redeemProduct = () => {
        this.props.redeemProduct(this.props._id);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.visible !== prevProps.visible && !this.props.visible) {
            this.props.resetMessageRedeem();
        }
    }

    render() {
        const {visible, onClose, products} = this.props;
        const {statusRedeem, messageRedeem} = products;
        const {name, cost, category, img} = this.props;
        const {hdUrl} = img;

        const customStyle = {
            width: 'auto',
            height: 'auto',
            top: 'auto',
            left: 'auto',
            right: '50%',
            bottom: '50%',
            transform: 'translate(50%, 50%)',
            padding: '1em 2em'
        };

        return (
            <Rodal visible={visible} onClose={onClose} width={330} height={470} customStyles={customStyle}>
                <h1 style={{textAlign: 'center'}}>{name}</h1>
                <article className="aca-product-card">
                    <img src={hdUrl} alt={name} className="aca-product-image" style={{width: 'auto'}}/>
                    <section className="aca-product-body">
                        <p>{category}</p>
                        <p><CoinImage/> {cost}</p>
                    </section>
                    {statusRedeem !== Constants.FETCH.STANDBY && <p className='aca-product-message'>{messageRedeem}</p>}
                </article>
                <button onClick={this.redeemProduct} className='aca-modal-button'>Redeem</button>
            </Rodal>
        );
    }
}

export default ReduxContainers.ProductsHOC(ModalRedeemProducts);