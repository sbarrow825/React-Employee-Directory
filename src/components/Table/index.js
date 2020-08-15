import React from 'react'

function Table(props) {
    return (
        <div className="container table">
            <table>
                <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Total Earnings</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export default Table;