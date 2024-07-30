const generateDayArray = () => {
  const currentTime = new Date()
  const dayArray = []
  
  for (let i = 0; i < 24; i++) {
    const hour = currentTime.getHours()
    const minute = currentTime.getMinutes()
    const hourStr = (hour < 10 ? "0" : "") + hour
    const minuteStr = (minute < 10 ? "0": "") + minute
    const timeStr = hourStr + ":" + minuteStr
    dayArray.unshift(timeStr)
    currentTime.setHours(hour -1)
  }
  return dayArray
}

const labels = generateDayArray();

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      data: [],
      fill: false,
      borderColor: "green",
      tension: 0.1,
      pointRadius: 0,
      pointHitRadius: 0
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    },
  },
};


export {data, config, labels}
