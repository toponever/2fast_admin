/* eslint-disable */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';

const UserDataTable = () => {
  const columns = ['Image', 'Name', 'Role', 'License', 'Team', 'Latest Active'];

  const Comp = 'JESUS KUY';
  const DataTest = {
    text1: <div><Avatar size="50" name="John Walsh" round={true} />hello</div>,
    text2: `${Comp}`,
    text3: 'helloworld',
  };
  const data = [
    [
      <Avatar
        size="100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvF-J2FLf7GZ4IpcY0N5mM4zBkjV9SRbf3zQ&usqp=CAU"
        title="kokoko"
        value="kokokokoko"
        round={true}
        name="OMG"
        size="50px"
      />,
      Comp,
      'Test Popcorn',
      'Yonkers',
      'NY',
    ],
    [<div><Avatar size="50" name="John Walsh" round={true} /> Hello World</div>, 'John Walsh', 'Test Corp', 'Hartford', 'CT'],
    [
      <Avatar
        size="100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU"
      />,
      'Bob Herm',
      'Test Corp',
      'Tampa',
      'FL',
    ],
    [
      <Avatar
        size="100"
        src="https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png"
      />,
      'James Houston',
      'Test Corp',
      'Dallas',
      'TX',
    ],
    [
      <Avatar
        size="100"
        src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
      />,
      'Joe James',
      'Test Corp',
      'Yonkers',
      'NY',
    ],
    [
      <Avatar name="John Walsh" size="100" />,
      'John Walsh',
      'Test Corp',
      'Hartford',
      'CT',
    ],
    [
      <Avatar name="Bob Herm" size="100" />,
      'Bob Herm',
      'Test Corp',
      'Tampa',
      'FL',
    ],
    [
      <Avatar name="James Houston" size="100" />,
      'James Houston',
      'Test Corp',
      'Dallas',
      'TX',
    ],
    [
      <Avatar name="Joe James" size="100" />,
      'Joe James',
      'Test Corp',
      'Yonkers',
      'NY',
    ],
    [
      <Avatar name="James Houston" size="100" />,
      'John Walsh',
      'Test Corp',
      'Hartford',
      'CT',
    ],
    [
      <Avatar name="Bob Herm" size="100" />,
      'Bob Herm',
      'Test Corp',
      'Tampa',
      'FL',
    ],
    [
      <Avatar name="James Houston" size="100" />,
      'James Houston',
      'Test Corp',
      'Dallas',
      'TX',
    ],
  ];

  const options = {
    filterType: 'checkbox',
    print: false,
  };
  return (
    <MUIDataTable
      title={'Users Management'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default UserDataTable;
