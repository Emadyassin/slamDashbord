import ReactApexChart from 'react-apexcharts';

const PaidInst = () => {
    const lastThreeMonthPaid = [
        { month: "Sep", paid: 1200 },
        { month: "Oct", paid: 3900 },
        { month: "Nov", paid: 3400 },
    ];

    const seriesDataPaid = lastThreeMonthPaid.map((item) => item.paid);

    const state = {
        series: [{
            name: 'Paid',
            data: seriesDataPaid,
        }],
        options: {
            chart: {
                type: 'area',
                height: 100,
                toolbar: {
                    show: false
                }
            },
            stroke: {
                curve: 'smooth'
            },
            dataLabels: {
                enabled: false,
            },
            
            xaxis: {
                categories: lastThreeMonthPaid.map((item) => item.month),
            },
            yaxis: {
                show: false,
            },
            fill: {
                type:'gradient',
                gradient: {
                    colors: ['#00E396'],
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]
                }
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart className="new" options={state.options} series={state.series} type="area" height={100} />
        </div>
    );
};

export default PaidInst;
