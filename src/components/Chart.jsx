import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Chart = (displayTitle = true, displayLegend = true, legendPosition = 'right') => {
    const [data, setData] = useState({
        labels: ['Palakkad', 'Thrissur', 'Eranakulam', 'Trivandrum'],
        datasets: [
            {
            label: 'Population',
            data: [6756785, 4549611, 2156694, 5985997],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)' 
            ]
            }
        ]
    })
    
  return (
    <div className="chart">
      <Bar 
        data={data}
        options={{
            plugins: {
                title: {
                    display: displayTitle,
                    text: 'Largest Cities in Kerala',
                    font: {
                        size: 25
                    }
                },
                legend: {
                    display: displayLegend,
                    position: legendPosition
                }
            }
        }}
      />
    </div>
  )
}

export default Chart
