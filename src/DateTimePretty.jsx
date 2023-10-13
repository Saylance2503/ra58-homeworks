import React from 'react';
import moment from 'moment';

const DateTimePretty = WrappedComponent => {
    return class extends React.Component {
        formatDateTime = date => {
            const dateTime = moment(date);
            const now = moment();

            if (now.diff(dateTime, 'minutes') < 60) {
                return now.diff(dateTime, 'minutes') + ' минут назад';
            } else if (now.diff(dateTime, 'hours') < 24) {
                return now.diff(dateTime, 'hours') + ' часов назад';
            } else {
                return now.diff(dateTime, 'days') + ' дней назад';
            }
        };

        render() {
            return <WrappedComponent {...this.props} date={this.formatDateTime(this.props.date)} />;
        }
    };
};

export default DateTimePretty;
