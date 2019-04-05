import React, { useState, useEffect } from 'react';

export default (importComponent: any) => (props: any) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const { default: component } = await importComponent();

      setComponent(() => component);
    }

    fetchComponent();
  }, []);

  const C: any = component;

  return C ? <C {...props} /> : null;
};
