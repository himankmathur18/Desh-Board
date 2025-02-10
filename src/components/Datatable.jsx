// import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};

const Datatable = () => {
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Sales</th>
                </tr>
            </thead>
            <tbody>
                {data.labels.map((label, index) => (
                    <tr key={index}>
                        <td>{label}</td>
                        <td>{data.datasets[0].data[index]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Datatable;