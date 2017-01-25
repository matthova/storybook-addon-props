import React from 'react';
import styled from 'styled-components';

const PropName = styled.td`
  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;
`;
const unionValues = (values) => values.map(v => (
  <li key={v.name}>{v.name}</li>
));
const propTypeName = (prop) => {
  if (prop && prop.type) {
    if (prop.type.value && prop.type.name === 'union') {
      return (
        <span>
          <span>one of type:</span>
          <ul>{unionValues(prop.type.value)}</ul>
        </span>
      );
    }
    return prop.type.name;
  }
};
const enumValues = (values) => values.map(v => (
  <li key={v.value}>{v.value}</li>
));
const propTypeValue = (prop) => {
  if (prop.type && prop.type.value && prop.type.name === 'enum') {
    return (<ul>{enumValues(prop.type.value)}</ul>);
  }
};

export const PropTableRow = ({ name, prop }) => {
  return (
    <tr>
      <PropName>{name}</PropName>
      <td>{propTypeName(prop)}</td>
      <td>{prop.required ? 'yes' : 'no'}</td>
      <td>{prop.description}</td>
      <td>{propTypeValue(prop)}</td>
      <td>{prop.defaultValue && prop.defaultValue.value}</td>
    </tr>
  );
};

export default PropTableRow;