import ReactApexChart from 'react-apexcharts';

const Installment = () => {
    const currentMonthData = [
        { month: 'January', paid: 2500, overdue: -500 },
        { month: 'February', paid: 2800, overdue: -400 },
        { month: 'March', paid: 3000, overdue: -2000 },
      ];
    
      const seriesData = currentMonthData.map((item) => ({
        x: item.month,
        y: [item.paid, item.overdue],
      }));
    
  const state = {
    series: [
      {
        data: seriesData,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: 'rangeBar',
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [['#008FFB', '#00E396']],
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['paid', 'overdue'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#00E396'],
          inverseColors: true,
          stops: [0, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: 'on',
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={260}/>
    </div>
  );
};
export default Installment;
// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexChart />, domContainer);

