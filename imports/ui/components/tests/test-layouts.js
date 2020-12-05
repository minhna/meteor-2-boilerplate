import React, { useContext } from "react";

import { Button } from "@material-ui/core";

import { LayoutContext } from "/imports/ui/contexts/layout-context.js";

function TestComponent() {
  const { layout, setLayout } = useContext(LayoutContext);

  const toggleLayout = () => {
    setLayout(layout === "default" ? "single" : "default");
  };

  return (
    <div>
      <div>Test Layouts</div>
      <div>
        <Button onClick={toggleLayout} variant="contained">
          Toggle layout
        </Button>
      </div>
    </div>
  );
}

export default TestComponent;
