import React, { Component } from 'react';

export default class Watch extends Component {

    constructor(props) {
        super(props);
        this.id = props.watchInfo.id;
        this.city = props.watchInfo.city;
        this.timeZone = props.watchInfo.timeZone;
        this.onRemove = props.onRemove;
        this.state = {
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }

    setClock = () => {
        const locDate = new Date();
        const utcDate = locDate.getTime() + locDate.getTimezoneOffset() * 60000;
        const cityDate = new Date(utcDate + 3600000 * this.timeZone);

        this.setState({
            hours: cityDate.getHours(),
            minutes: cityDate.getMinutes(),
            seconds: cityDate.getSeconds()

        });
    }

    componentDidMount() {
        this.interval = setInterval(this.setClock, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="watch">
                <h4>{this.city}</h4>
                <div>
                    {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                </div>
                <div onClick={() => this.onRemove(this.id)} className="third-col">
                    <span role="img" aria-label="delete">&#10060;</span>
                </div>
            </div>
        )

    }
}
