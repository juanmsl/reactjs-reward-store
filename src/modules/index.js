import React from "react";
import './index.scss';
import {ReduxContainers} from "hocs";
import {Filters, ProductsGrid, UserData} from "components";


class RewardStoreApp extends React.Component {
    componentDidMount() {
        this.props.getUser();
        this.props.getProducts();
    }

    render() {
        const {products, users, addPoints, redeemProduct} = this.props;

        return (
            <main className='aca-home'>
                <UserData {...users} addPoints={addPoints} className='aca-home-user' />
                <Filters className='aca-home-filterbar' />
                <ProductsGrid {...products} redeemProduct={redeemProduct} className='aca-home-products'/>
            </main>
        );
    }
}

export default ReduxContainers.UsersHOC(
    ReduxContainers.ProductsHOC(RewardStoreApp)
);