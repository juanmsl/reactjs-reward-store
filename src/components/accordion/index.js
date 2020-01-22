import React from "react";
import eases from "eases";
import SlideToggle from "react-slide-toggle";
import './index.scss';


class Accordion extends React.Component {
    renderBody = ({onToggle, setCollapsibleElement}) => (
        <section className='aca-accordion'>
            <p className='aca-accordion_name' onClick={onToggle}>{this.props.name}</p>
            <section className='aca-accordion_body' ref={setCollapsibleElement}>
                {this.props.children}
            </section>
        </section>
    );

    render() {
        return (
            <SlideToggle
                duration={200}
                easeCollapse={eases["linear"]}
                easeExpand={eases["linear"]}
                render={this.renderBody}
                bestPerformance
                collapsed
            />
        );
    }
}

export default Accordion;