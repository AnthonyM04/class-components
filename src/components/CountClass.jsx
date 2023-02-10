import { Component } from 'react';

class CountClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            title: 'Welcome'
        }
    }
    componentDidMount() {
        this.setState({ title: 'Our New Title' })
    }
    componentDidUpdate() {
        document.title = `${this.state.count} count`
    }
    render() {
        const { count, title } = this.state
        return (
            <section>
                <h2>{title}</h2>
                <h3> We counted {count} clicks.</h3>
                <button onClick={() => this.setState({ count: count + 1 })}>Click me</button>
            </section>
        )
    }
}

export default CountClass;