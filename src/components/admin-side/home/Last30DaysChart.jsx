import React, { useState, useEffect, useRef } from 'react'
import Chartjs from 'chart.js'

function Last30DaysChart({data}) {
    const chartContainer = useRef(null)
    const [chartInstance, setChartInstance] = useState(null)

    const chartConfig = {
        type: "line",
        data: {
            labels: data.map(el => el.date),
            datasets: [
                {
                    data: data.map(el => el.amount),
                    backgroundColor: 'transparent',
                    borderColor: 'green',
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
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig)
            setChartInstance(newChartInstance)
        }
    }, [chartContainer]);

    return (
        <canvas ref={chartContainer} >
        </canvas>
    )
}

export default Last30DaysChart
