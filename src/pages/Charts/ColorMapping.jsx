import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mapping" />
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">USA Climate - temperature</p>
      <div className="w-full">
        <ChartComponent
          id="color-mapping-chart"
          height="420px"
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
          legendSettings={{ mode: 'Range', background: 'white' }}
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
        >
          <Inject services={[Legend, Tooltip, Category, ColumnSeries]} />

          <SeriesCollectionDirective>
            <SeriesDirective type="Column" name="USA" xName="x" yName="y" dataSource={colorMappingData[0]} cornerRadius={{ topLeft: 10, topRight: 10 }} />
          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
