import * as React from 'react';

// const logo = require('./logo.svg');

class Heroes extends React.Component {
    render() {
        return (
            <ul>
                {(() => {

                    var rows = [];
                    for (var i = 0; i < 10; i++) {
                        rows.push(<li>{i}</li>);
                    }
                    return rows;

                })()}
                <li>1</li>
            </ul>
        );
    }
}

export default Heroes;