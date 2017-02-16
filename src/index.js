import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Button } from 'semantic-ui-react';
import styles from '../styles/style.scss';

const App = () => {
    return (
        <div>
            <Header as='h1'>
                Hello World
            </Header>
            <Button>
                Click me
            </Button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));