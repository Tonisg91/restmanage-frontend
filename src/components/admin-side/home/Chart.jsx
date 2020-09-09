import React, { useState, useEffect, useRef} from 'react'
import ordersService from '../../../tools/ordersService'
import Chartjs from 'chart.js'

function DisplayChart({data, chartName}) {
    const chartContainer = useRef(null)
    const [chartInstance, setChartInstance] = useState(null)

    const getFiveElements = data.filter(el => el.qty > 5).sort((a, b) => b.qty - a.qty)

    const innerColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ]

    const borders = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]

    const chartConfig = {
        type: "bar",
        data: {
            labels: getFiveElements.map(el => el.name),
            datasets: [
                {
                    data: getFiveElements.map(el => el.qty),
                    backgroundColor: innerColors,
                    borderColor: borders,
                    borderWidth: 2
                },
        ]
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }



    useEffect(() => {
        if (chartContainer && chartContainer.current ) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig)
            setChartInstance(newChartInstance)
        }
    }, [chartContainer]);

    return (
        <canvas ref={chartContainer} >
        </canvas>
    )
}

export default DisplayChart
