// fetch('ppl.json')
// .then(function (response) {
// 	return response.json();
// })
// .then(function (data) {
// 	appendData(data);
// })
// .catch(function (err) {
// 	console.log('error: ' + err);
// });
// function appendData(data) {
// var mainContainer = document.getElementById("myData");
// for (var i = 0; i < data.length; i++) {
// 	var div = document.createElement("div");
// 	div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
// 	mainContainer.appendChild(div);
// }
// }

//promice mytry
function fetchOrders(){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      const error=false;
      if(!error){
        // var result=response.json();
        fetch('data.json')
        .then(function (response) {	        console.log("function can run")
        const orderData= response.json();
        console.log(orderData);
        resolve(orderData);
      })
      }
      else{
        console.log('fetch failed');
        reject();
      }
    },2000);
  })
}

fetchOrders().then(function(orderData){  
  console.log(orderData);
  displayOrders(orderData);
}).catch(function(error){
  console.log("codn't access data");
})

// table display
function displayOrders(result){
	// console.log(result);
          // Getting the all column names

          var cols =  Headers(result);
          var list=result;
          // console.log(cols);
          // Traversing the JSON data
          for (var i = 0; i < list.length; i++) {
            var row = $("<tr width='100%'>");
            for (var colIndex = 0; colIndex < cols.length; colIndex++) {
              var val = list[i][cols[colIndex]];
  
              // If there is any key, which is matching
              // with the column name
              if (val == null) val = "";
              row.append($("<td/>").html(val));
            }
  
            // Adding each row to the table
            $(table).append(row);
          }
        
  
        function Headers(list) {
          var columns = [];
          var header = $("<tr width='100%'/>");
  
          for (var i = 0; i < list.length; i++) {
            var row = list[i];
  
            for (var k in row) {
              if ($.inArray(k, columns) == -1) {
                columns.push(k);
  
                // Creating the header
                header.append($("<th/>").html(k));
              }
            }
          }
  
          // Appending the header to the table
          $(table).append(header);
          return columns;
        }
		
	}








































// ḍisplay data normal
function appendData(data) {
	var mainContainer = document.getElementsByClassName("myData");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = data[i].OrderId + ' ' + data[i].Name + ' ' + data[i].Plan + ' ' + data[i].Method + ' ' + data[i].RestaurantName + ' ' + data[i].BillStatus + ' ' + data[i].TransationId + ' ' + data[i].OrderUpdatedOn;
		mainContainer.appendChild(div);
	}











}

// // ḍisplay data normal
// function appendData(data) {
// 	var mainContainer = document.getElementById("myData");
// 	for (var i = 0; i < data.length; i++) {
// 		var div = document.createElement("div");
// 		div.innerHTML = data[i].OrderId + ' ' + data[i].Name + ' ' + data[i].Plan + ' ' + data[i].Method + ' ' + data[i].RestaurantName + ' ' + data[i].BillStatus + ' ' + data[i].TransationId + ' ' + data[i].OrderUpdatedOn;
// 		mainContainer.appendChild(div);
// 	}
// 	}
		
