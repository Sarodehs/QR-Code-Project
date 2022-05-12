import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "January",
    Iphone: 4000,
    Apple: 1000
  },
  {
    name: "March",
    Iphone: 1000,
    Apple: 4000
  },
  {
    name: "May",
    Iphone: 4000,
    Apple: 800
  },
  {
    name: "July",
    Iphone: 800,
    Apple: 4000
  },
  {
    name: "October",
    Iphone: 1500,
    Apple: 800
  }
];

function LineGraph() {
  return (
    <div className="line-graph">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Revenue Report</h3>
        <main>
          <select name="month" id="month">
            <option selected value="1">
              Janaury
            </option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="year" id="year">
            <option value="20219">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>{" "}
          | <span>₹ 1,50,000</span>
        </main>
      </div>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
          <XAxis dataKey="name" tick={{ fill: "black" }} />
          <YAxis tick={{ fill: "black" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="Iphone"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10
            }}
          />
          <Line
            type="monotone"
            dataKey="Apple"
            // stroke="#8884d8"
            stroke="green"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
