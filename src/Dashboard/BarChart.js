import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import cubejs from "@cubejs-client/core";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL
});

const dateFormatter = (item) => moment(item).format("MMM YY");

class App1 extends Component {
  render() {
    return (
      <div>
        <div class="bar-graph">
          <h3>Active Members</h3>
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
            </select>{" "}
            &nbsp;
            <select name="year" id="year">
              <option value="20219">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>{" "}
            &nbsp; | &nbsp; <span>200</span>
          </main>

          <QueryRenderer
            query={{
              measures: ["Orders.count"],
              timeDimensions: [
                {
                  dimension: "Orders.createdAt",
                  dateRange: ["2020-07-01", "2020-12-31"],
                  granularity: "month"
                }
              ]
            }}
            cubejsApi={cubejsApi}
            render={({ resultSet }) => {
              if (!resultSet) {
                return "Loading...";
              }

              return (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={resultSet.chartPivot()}>
                    <XAxis dataKey="x" tickFormatter={dateFormatter} />

                    <YAxis />
                    <Tooltip labelFormatter={dateFormatter} />
                    <Bar dataKey="Orders.count" fill="rgba(106, 110, 229)" />
                  </BarChart>
                </ResponsiveContainer>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default App1;
