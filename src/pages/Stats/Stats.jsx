import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ShowContext } from '../../context/ShowContext';
import useHooks from '../../hooks/useHooks';

const Stats = () => {

      const {call,text,video}=useContext(ShowContext);
    
    const data = [
  { name: 'text', value:call.length, fill: '#0088FE' },
  { name: 'call', value:text.length, fill: '#00C49F' },
  { name: 'video', value: video.length, fill: '#FFBB28' },

];

    return (
        <div className='container mx-auto shadow my-8 flex justify-center items-center  py-6'>
              <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
          <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip></Tooltip>
    <Legend></Legend>
    </PieChart>
    
        </div>
    );
};

export default Stats;