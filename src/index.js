import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBcalklgMWG6JCl5O45viK2gh0pV4tMbC0';



class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));