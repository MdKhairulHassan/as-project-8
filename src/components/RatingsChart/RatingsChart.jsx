import React from 'react';
import {
  Area,
  Bar,
  // BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  // LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const RatingsChart = ({ ratings }) => {
  return (
    <div>
      {/* <LineChart width={500} height={500} responsive data={ratings}>
        <XAxis dataKey={'count'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="name" stroke="blue"></Line>
        <Line dataKey={'count'} stroke="red"></Line>
      </LineChart>

      <BarChart width={500} height={300} data={ratings}>
        <XAxis dataKey={'count'}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={'name'} fill="yellow"></Bar>
        <Bar dataKey={'count'} fill="blue"></Bar>
      </BarChart> */}

      <ComposedChart
        layout="vertical"
        style={{
          width: '100%',
          maxWidth: '600px',
          maxHeight: '100vh',
          aspectRatio: 1 / 1.618,
        }}
        responsive
        data={ratings}
        margin={{
          top: 20,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" width="auto" />
        <Tooltip />
        <Legend />
        <Line dataKey="count" stroke="#632EE3" />
        <Area dataKey="count" fill="#FF8811" stroke="#8884d8" />
        <Bar dataKey="count" barSize={20} fill="#00D390" />
      </ComposedChart>
    </div>
  );
};

export default RatingsChart;
