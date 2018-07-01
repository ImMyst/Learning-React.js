import React from 'react';
import Citation from './Citation'
import citations from '../citations';

class App extends React.Component {

    state = {};

    componentWillMount() {
        this.genererCitation();
    }

    genererCitation = event => {
        // Translate citation in array
        const keyArray = Object.keys(citations);
        // Random citation
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if (this.state.citation === citations[randomKey].citation) {
            this.genererCitation();
            return
        }
        this.setState(citations[randomKey]);
    };

    render() {
        return (
            <div>
                <Citation details={this.state}/>
                <button onClick={e => this.genererCitation(e)}>Once agaaain !</button>
            </div>
        )
    }
}

export default App;

