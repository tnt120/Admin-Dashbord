import React from 'react';
import { Header, LineChart, StackedChart } from '../../components';

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Stacked" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Revenue Breakdown</p>
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
