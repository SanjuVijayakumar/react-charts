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

const Chart = ({ data }) => {

  return (
    <div className="chart">
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Largest Cities in Kerala',
              font: {
                size: 25
              }
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }}
      />
    </div>
  )
}

export default Chart
