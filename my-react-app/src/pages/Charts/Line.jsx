import React from 'react';

import { ChartsHeader, LineChart } from '../../components';
const line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title="Inflation Rate" />
      <div className='w-4'>
        <LineChart />
      </div>
    </div>
  )
}

export default line