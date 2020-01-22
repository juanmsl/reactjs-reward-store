import React from "react";
import {Accordion, ProductHistoryCard} from "components";
import './index.scss';


class RedeemHistory extends React.Component {
    static defaultProps = {
        redeemHistory: []
    };

    renderRedeemHistory = (redeemHistory) => (
        redeemHistory.map((productHistoryCard, i) => (
            <ProductHistoryCard key={i} {...productHistoryCard} />
        ))
    );

    filterDates = (redeemHistory) => {
        const groups = {};
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        redeemHistory.forEach((item) => {
            const date = new Date(item.createDate);
            const year = `${date.getFullYear()}`;
            const month = `${months[date.getMonth()]}`;
            const day = `${date.getDate()}`;
            if (!(year in groups)) groups[year] = {};
            if (!(month in groups[year])) groups[year][month] = {};
            if (!(day in groups[year][month])) groups[year][month][day] = [];
            groups[year][month][day].push(item);
        });
        return groups;
    };

    renderDays = (month, y, m) => {
        const days = Object.keys(month);
        return days.map((day, i) => {
            const itemDay = month[day];
            return (
                <Accordion name={`${m} ${day}, ${y} (${itemDay.length})`} key={i}>
                    {this.renderRedeemHistory(itemDay)}
                </Accordion>
            );
        });
    };

    renderMonths = (year, y) => {
        const months = Object.keys(year);
        return months.map((month, i) => {
            const itemMonth = year[month];
            return (
                <Accordion name={month} key={i}>
                    {this.renderDays(itemMonth, y, month)}
                </Accordion>
            );
        });
    };

    renderGroups = (groups) => {
        const years = Object.keys(groups);
        return years.map((year, i) => {
            const itemYear = groups[year];
            return (
                <Accordion name={year} key={i}>
                    {this.renderMonths(itemYear, year)}
                </Accordion>
            );
        });
    };

    render() {
        const {redeemHistory} = this.props;
        const groups = this.filterDates(redeemHistory || []);

        return (
            <section className='aca-redeem-history'>
                {this.renderGroups(groups)}
            </section>
        );
    }
}

export default RedeemHistory;