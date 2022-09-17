import {Page, Card, DataTable} from '@shopify/polaris';
import React from 'react';
import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import Logo from "../../assets/logo.png";

function CustomTable() {
  const [selected, setSelected] = useState('...');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: '...', value: '...'},
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
  ];


  const rows = [
    [<img src={Logo} alt="logo" style={{ width: "30%"}} />, 'Fawery Delivery Services',  <Select
    options={options}
    onChange={handleSelectChange}
    value={selected}
  />],
    [<img src={Logo} alt="logo" style={{ width: "30%"}} />, 'Fawery Delivery Services',  <Select
    options={options}
    onChange={handleSelectChange}
    value={selected}
  />],
//     ['Logo', 'Fawery Delivery Services',  <Select
//     options={options}
//     onChange={handleSelectChange}
//     value={selected}
//   />],
   
    
  ];

  return (
    
        <DataTable
        hoverable={false}
          columnContentTypes={[
            'text',
            'text',
            'text',
          ]}
          headings={[
            'Logo',
            'Carrier Name',
            'Action',
          ]}
          rows={rows}
        />
      
  );
}


export default CustomTable;