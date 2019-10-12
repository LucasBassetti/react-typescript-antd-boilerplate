import React, { useState, useEffect } from 'react';

export default (importComponent: () => Promise<{ default: React.ComponentType }>) => (
  props: any
) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    (async () => {
      const { default: component } = await importComponent();

      setComponent(component);
    })();
  }, []);

  return Component ? <Component {...props} /> : null;
};
