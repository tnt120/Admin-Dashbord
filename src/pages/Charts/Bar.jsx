import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, ColumnSeries, Category, Tooltip } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Bar" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Olympic Medal Counts - RIO</p>
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
