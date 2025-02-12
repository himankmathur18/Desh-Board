import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40, 85, 90, 30, 75, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true, // This property is used to fill the area under the line for the area chart
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Sales',
        },
    },
};

const Charts = () => {
    const [chartType, setChartType] = useState('bar');

    return (
        <div className="p-4 f bg-white shadow-md rounded-lg gap-10">
            
                <button onClick={() => setChartType('bar')} className="p-2  text-black border rounded">Bar</button>
                <button onClick={() => setChartType('area')} className="p-2  text-black border rounded">Area</button>
           
            {chartType === 'bar' ? (
                <Bar data={data} options={options} />
            ) : (
                <Line data={data} options={options} />
            )}
        </div>
    );
};

export default Charts;