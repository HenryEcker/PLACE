import React from 'react';

export default class Pane extends React.Component {
    render() {
        return ( < div className = "col-md-6" > {
            React.Children.map(this.props.children, function(child) {
                return (
                    <div className="panel this-week-container">
                        {child}
                    </div>
                );
            })
        } < /div>
        );
    }
}
