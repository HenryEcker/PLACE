import React from 'react';

export default class Pane extends React.Component {
    render() {
        return (
          <div className={this.props.styleName} > {
            React.Children.map(this.props.children, function(child) {
                return (
                    <div className="panel">
                        {child}
                    </div>
                );
            })
        }
       </div>
        );
    }
}
