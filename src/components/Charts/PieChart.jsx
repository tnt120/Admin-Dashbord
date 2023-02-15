import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const PieChart = () => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent id="pie-chart" height="420px" tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : '#FFF'} legendSettings={{ background: 'white' }}>
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          type="Pie"
          name="Sale"
          xName="x"
          yName="y"
          dataSource={pieChartData}
          innerRadius="50"
          explode
          explodeOffset="10%"
          explodeIndex={0}
          dataLabel={{ visible: true, name: 'text', positon: 'Inside', font: { fontWeight: '700', color: 'white' } }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
