import React, { Component } from 'react';

export default function CardHoc(WrappedComponent, config) {
    return class extends Component {
        render() {
            return (
                <div className="card">
                    <div className="card-header">
                        {config.title}
                    </div>
                    <div className="card-body">
                        <WrappedComponent></WrappedComponent>
                    </div>
                </div>
            );
        }
    }
}