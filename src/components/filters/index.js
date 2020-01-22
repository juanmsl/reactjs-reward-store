import React from "react";
import './index.scss';
import {ReduxContainers} from "hocs";


class Filters extends React.Component {
    renderOptions = (options) => (
        options.map((option, i) => (
            <option value={option.value} key={i}>{option.label}</option>
        ))
    );

    handleChangeName = (e) => {
        const {value} = e.target;
        this.props.setName(value);
    };

    handleChangeOrderBy = (e) => {
        const {value} = e.target;
        this.props.setOrderBy(value);
    };

    render() {
        const {className, filters} = this.props;
        const {orderByOptions, orderBy, name} = filters;

        return (
            <section className={`aca-filterbar ${className}`}>
                <input onChange={this.handleChangeName} type="text" name='name' placeholder='Name' className='aca-filterbar_input' value={name} />
                <select name="" id="" value={orderBy} onChange={this.handleChangeOrderBy} className='aca-filterbar_input'>
                    {this.renderOptions(orderByOptions)}
                </select>
            </section>
        );
    }
}

export default ReduxContainers.FiltersHOC(Filters);