'use client';
import { Button } from '@components/button';
import { Table } from '@components/table';
import { useState } from 'react';

export default function Index() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      Index page
      <div style={{ width: '1rem', height: '1rem' }}></div>
      <pre>{`{ "clicked": ${clicked} }`}</pre>
      <Button type="button" className="p-5" onClick={() => setClicked(true)}>
        Click
      </Button>
      <Table></Table>
    </div>
  );
}
