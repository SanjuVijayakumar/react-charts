import { Bar, Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, LineElement, ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, LineElement, ArcElement,
  Title,
  Tooltip,
  Legend
)

const Chart = ({ data, location }) => {

  return (
    <div className="chart">
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Largest Cities in ${location}`,
              font: {
                size: 25
              }
            },
            legend: {
              display: true,
              position: 'bottom',
              location: "City"
            }
          }
        }}
      />

      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Largest Cities in ${location}`,
              font: {
                size: 25
              }
            },
            legend: {
              display: true,
              position: 'bottom',
              location: "City"
            }
          }
        }}
      />

      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Largest Cities in ${location}`,
              font: {
                size: 25
              }
            },
            legend: {
              display: true,
              position: 'bottom',
              location: "City"
            }
          }
        }}
      />
    </div>
  )
}

export default Chart
