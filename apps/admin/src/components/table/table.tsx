import { TableRoot, Thead, Tr, Th, Td, Tbody } from './table.ui';

export const Table = () => {
  return (
    <TableRoot>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Payment</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
        <Tr>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
        <Tr>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
      </Tbody>
    </TableRoot>
  );
};
