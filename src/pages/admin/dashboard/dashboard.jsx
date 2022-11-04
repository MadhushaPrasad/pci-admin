import React from 'react';
import './dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className="main_container">
                <div className="item h-100">
                    <div className="row mt-4">
                        <div className="col">
                            <div className="col-6 card text-center">
                                Make Orders
                            </div>

                        </div>
                        <div className="col">
                            <div className="col-6 card text-center">
                                New Questions
                            </div>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="col-6 card text-center">
                                Inventory
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-6 card text-center">
                                Manage Requisition
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;