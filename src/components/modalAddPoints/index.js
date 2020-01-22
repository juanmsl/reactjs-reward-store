import React from "react";
import Rodal from 'rodal';
import {ReduxContainers} from "hocs";
import './index.scss';
import {CoinImage} from "components";
import {Constants} from "utils";


class ModalAddPoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '1000'
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.visible !== prevProps.visible && !this.props.visible) {
            this.props.resetMessagePoints();
        }
    }

    handleChange = (e) => {
        const {value} = e.target;

        this.setState({
            amount: value
        });
    };

    addPoints = () => {
        this.props.addPoints(parseInt(this.state.amount));
    };

    render() {
        const {visible, onClose, users} = this.props;
        const {statusPoints, messagePoints} = users;

        return (
            <Rodal visible={visible} onClose={onClose} height={250}>
                <h1>Add points to {users.username}</h1>
                <section className='aca-modal-options'>
                    <article className='aca-modal-option'>
                        <input type="radio" id='amount_1000' name='amount' value='1000'
                               checked={this.state.amount === '1000'} onChange={this.handleChange}/>
                        <label htmlFor="amount_1000"><CoinImage/> 1000</label>
                    </article>
                    <article className='aca-modal-option'>
                        <input type="radio" id='amount_5000' name='amount' value='5000'
                               checked={this.state.amount === '5000'} onChange={this.handleChange}/>
                        <label htmlFor="amount_5000"><CoinImage/> 5000</label>
                    </article>
                    <article className='aca-modal-option'>
                        <input type="radio" id='amount_7500' name='amount' value='7500'
                               checked={this.state.amount === '7500'} onChange={this.handleChange}/>
                        <label htmlFor="amount_7500"><CoinImage/> 7500</label>
                    </article>
                </section>
                {statusPoints !== Constants.FETCH.STANDBY && <p className='aca-modal-message'>{messagePoints}</p>}
                <button onClick={this.addPoints} className='aca-modal-button'>Add {this.state.amount} points</button>
            </Rodal>
        );
    }
}

export default ReduxContainers.UsersHOC(ModalAddPoints);