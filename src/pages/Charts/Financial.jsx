import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, Inject, DateTime, Zoom, Logarithmic, Crosshair, Tooltip } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Financial" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Apple historical financials</p>
      <div className="w-full">
        <ChartComponent
          id="financial-chart"
          height="420px"
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        >
          <Inject services={[HiloSeries, DateTime, Zoom, Logarithmic, Crosshair, Tooltip]} />

          <SeriesCollectionDirective>
            <SeriesDirective type="Hilo" name="Apple Inc" xName="x" yName="low" dataSource={returnValue} low="low" high="high" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
