// First, let's correct the typo in your request. Assuming you meant "format", here's the formatted version of the App.tsx code:

import React, { useState } from "react";
import Example from "./lib/Example";
import { Toaster } from "sonner";
import TabToggle from "./test-components/TabToggle";
import Wrapper from "./test-components/Wrapper";
import DemPageTwo from "./test-components/demo-page two";
import DemoPage from "./test-components/demo-page";


function App() {
  const [activeTab, setActiveTab] = useState("");

  const toggleTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Toaster />
      <Wrapper>
        {" "}
        <TabToggle activeTab={activeTab} toggleTab={toggleTab} />
      </Wrapper>
      {activeTab === "DemoPage1" && <DemoPage label="Demo Page 1" />}
      {activeTab === "DemoPage2" && <DemPageTwo label="Demo Page 2" />}
    </>
  );
}

export default App;
