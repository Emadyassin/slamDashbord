import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const Savings = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1700, 2600, 1200, 2500, 3500];
const Current = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 8000, 3700, 4500, 3500, 5000];
const Deposit = [3000, 1500, 6000, 4200, 5500, 3500, 3700, 7000, 2800, 4000, 3000, 4500];
const xLabels = [
  'month 1',
  'month 2',
  'month 3',
  'month 4',
  'month 5',
  'month 6',
  'month 7',
  'month 8',
  'month 9',
  'month 10',
  'month 11',
  'month 12',
];

export default function DashedLineChart() {
  return (
    <LineChart
    //   width={500}
      height={450}
      series={[
        { data: Savings, label: 'Savings', id: 'SavingsId' },
        { data: Current, label: 'Current', id: 'CurrentId' },
        { data: Deposit, label: 'Deposit', id: 'DepositId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root, .MuiMarkElement-root': {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
          fill: '#fff',
        },
        '& .MuiMarkElement-highlighted': {
          stroke: 'none',
        },
      }}
    />
  );
}