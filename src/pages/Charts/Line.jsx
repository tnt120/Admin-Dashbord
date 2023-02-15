import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Line" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Inflation Rate</p>
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
