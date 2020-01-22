import React from "react";
import {CoinImage, ModalAddPoints, RedeemHistory} from "components";
import {Constants} from "utils";
import './index.scss';


class UserData extends React.Component {
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
        const {username, points, history, status, error, className} = this.props;


        if(status === Constants.FETCH.FAILED) {
            return (
                <nav className={className}>
                    <p>{error}</p>
                </nav>
            );
        }

        return (
            <nav className={className}>
                <ModalAddPoints {...this.state} onClose={this.toggle} />
                <section className='aca-users'>
                    <section className='aca-users-title'>
                        <h1>{username || 'No user logged'}</h1>
                        <p onClick={this.toggle} style={{cursor: 'pointer'}}><CoinImage /> {points}</p>
                    </section>
                    <RedeemHistory redeemHistory={history}/>
                </section>
            </nav>
        );
    }
}

export default UserData;