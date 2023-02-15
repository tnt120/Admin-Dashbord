import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PyramidSeries,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pyramid" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Food Comparison Chart</p>
      <div className="w-full">
        <AccumulationChartComponent id="pie-chart" height="420px" tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : '#FFF'} legendSettings={{ background: 'white' }}>
          <Inject services={[PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              type="Pyramid"
              name="Food"
              xName="x"
              yName="y"
              dataSource={PyramidData}
              width="40%"
              height="75%"
              gapRatio={0.05}
              neckWidth="15%"
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              explode
              explodeOffset="1%"
              dataLabel={{ visible: true, name: 'text', positon: 'Inside', font: { fontWeight: '700' } }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
