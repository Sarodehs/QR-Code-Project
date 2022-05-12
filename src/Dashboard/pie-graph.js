
import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "Free",
    value: 100,
    color: "black"
  },
  {
    label: "Gold",
    value: 0,
    color: "orange"
  },
  {
    label: "Silver",
    value: 0,
    color: "red"
  }
];
const reactDonutChartBackgroundColor = [
  "black",
  "orange",
  "#red"
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function PieGraph() {
  return (
    <div className="App" >
      <DonutChart
        // width={550}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  );
}
