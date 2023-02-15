import React from 'react';
import { Header, PieChart } from '../../components';

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pie" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Project Cost Breakdown</p>
      <div className="w-full">
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
