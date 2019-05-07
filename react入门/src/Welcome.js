import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        const isLogin = false
        return (
            <div>
                <h1>holle lqw</h1>
                {
                    isLogin ? <p>你已经登录成功。</p> : <p>登录失败</p>
                }
                <h2>It is{this.state.date.toLocaleTimeString()}</h2>
            </div>

        )

    }
};

export default Welcome