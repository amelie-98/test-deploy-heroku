// => http://localhost:3000/DynamicRoute/3

import React from 'react';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  console.log(router.query.id);

  return <button onClick={() => router.push('/pageLong1')}>Sang trang pageLong1</button>;
};
