import React from 'react'
import PMHomePanel from './PMHomePanel';
import PMNavBar from './PMNavBar';

export default class PMApp extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-2">
                    <PMNavBar/>
                </div>
                <PMHomePanel userID={1}/>
            </div>
        );
    }
}
