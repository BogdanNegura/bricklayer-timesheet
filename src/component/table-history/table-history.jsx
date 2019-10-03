import React from 'react'

const  TableHistory = (props) => {


    return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Total Income</th>
                        <th>Tax deduced</th>
                        <th>Total Paid</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(row => (
                            <tr>
                                <td>{row.rank}</td>
                                <td>{row.company}</td>
                                <td>{row.total_income}</td>
                                <td>{row.tax_deduced}</td>
                                <td>{row.total_paid}</td>
                                <td>{row.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
}

export default TableHistory