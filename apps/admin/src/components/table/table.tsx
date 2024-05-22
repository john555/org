import { TableRoot, Thead, Tr, Th, Td, Tbody } from './table.ui';

export const Table = () => {
  return (
    <TableRoot>
      <Thead>
        <Tr>
          <Th sticky>
            <input type="checkbox" />
          </Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Payment</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td sticky>
            <input type="checkbox" />
          </Td>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
        <Tr>
          <Td sticky>
            <input type="checkbox" />
          </Td>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
        <Tr selected>
          <Td sticky>
            <input checked type="checkbox" />
          </Td>
          <Td>John Doe</Td>
          <Td>john.do@example.com</Td>
          <Td>Cash</Td>
        </Tr>
      </Tbody>
    </TableRoot>
  );
};
