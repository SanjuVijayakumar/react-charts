import { useEffect, useState } from 'react'
import './App.css'
import Chart from './components/Chart'

function App() {
  const [data, setData] = useState({
    labels: [], 
    datasets: []
  })

  useEffect(() => {
    getChartData()
  },[])

  function getChartData() {
    setData({
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
  }

  return (
    <>
      <h1>Kerala Population</h1>
      <Chart data={data} />
    </>
  )
}

export default App
