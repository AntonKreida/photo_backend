import { ReactNode } from 'react';
import { Table, Thead, Tbody, Tr, Box, Th, Td } from '@strapi/design-system';

type TColumn<T> = {
  key: keyof T;
  label: string;
  render?: (value: T) => ReactNode;
};

interface ITableComponentProps<T> {
  columns: TColumn<T>[];
  data: T[];
}

export const TableComponent = <T,>({ columns, data }: ITableComponentProps<T>) => (
  <Box>
    <Table>
      <Thead>
        <Tr>
          {columns.map(({ key, label }) => (
            <Th key={key}>{label}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.length &&
          data.map((item) =>
            columns.map(({ key, render }) => <Td key={key}>{render ? render(item) : item[key]}</Td>)
          )}
      </Tbody>
    </Table>
  </Box>
);
