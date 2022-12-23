import Header from "./Layout/Header";

import Section from "./Layout/Section";
import "./styles.css";
export default function App() {
  return (
    <div className="App bg_gradiant ">
      <div className="wrapper">
        <Header
          title="EXPORTING FOR GROWTH"
          info="Click the image below to see how exporting increases opportunity."
          title2="BENEFIT #1: INCREASED JOBS AND INCOME"
        />
        <Section />
      </div>
    </div>
  );
}
