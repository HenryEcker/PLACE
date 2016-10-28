import React from 'react';

export default class PMNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-side">
                <ul className="nav navbar-nav vertical-list">
                    <li className="active-class">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Interactions</a>
                    </li>
                    <li>
                        <a href="#">Initiatives</a>
                    </li>
                    <li>
                        <a href="#">Purchase Form</a>
                    </li>
                    <li>
                        <a href="#">Resources</a>
                    </li>
                    <li>
                        <a href="#">Feedback</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
