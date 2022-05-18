import React from "react";
import JsonData from "./data.json";
function JsonDataDisplay() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.OrderId}</td>
        <td>{info.Name}</td>
        <td>{info.Plan}</td>
        <td>{info.Method}</td>
        <td>{info.RestaurantName}</td>
        <td>{info.BillStatus}</td>
        <td>{info.TransationId}</td>
        <td>{info.OrderUpdatedOn}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table" width="100%">
        <thead style={{color:'black'}}>
          <tr style={{color:'black'}}>
            <th style={{color:'black'}}>OrderId</th>
            <th style={{color:'black'}}>Name</th>
            <th style={{color:'black'}}>Plan</th>
            <th style={{color:'black'}}>Method</th>
            <th style={{color:'black'}}>RestaurantName</th>
            <th style={{color:'black'}}>BillStatus</th>
            <th style={{color:'black'}}>TransationId</th>
            <th style={{color:'black'}}>OrderUpdatedOn</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
