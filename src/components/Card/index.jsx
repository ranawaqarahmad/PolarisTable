import {Card} from '@shopify/polaris';
import React from 'react';
import CustomTable from '../CustomTable';

const CustomCard = () => {
  return (
    <Card sectioned>
      <CustomTable />
    </Card>
  );
}

export default CustomCard;