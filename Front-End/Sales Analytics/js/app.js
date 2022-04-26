const itemList = document.querySelector('.item-list');

let salesItems = [];


const getList = function(salesItems){
    salesItems.forEach(function(item){
          //  itemList.insertAdjacentHTML('beforeend', `<h5 class="item-name">${item}</h5></div>`);


            itemList.insertAdjacentHTML('beforeend',`<table id='table'>
            <tr>
                <th>Total Sales</th>
                <th>Product Line</th>
                <th>Year</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
            </tr>
            `);
            var sales_product = '';

            // ITERATING THROUGH OBJECTS
            $.each(JSON.parse(item), function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                sales_product += '<tr>';
                sales_product += '<td>' +
                    value.totalSales + '</td>';

                sales_product += '<td>' +
                    value.productLine + '</td>';

                sales_product += '<td>' +
                    value.year + '</td>';

                sales_product += '<td>' +
                    value.city + '</td>';
                
                sales_product += '<td>' +
                    value.state + '</td>';

                sales_product += '<td>' +
                    value.country + '</td>';

                sales_product += '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(sales_product);
        });
    }
    // const todoItems = '[]';
    // const myArray = JSON.parse(todoItems);
    // document.getElementById("demo").innerHTML = myArray;
const getAllList = function(){
    fetch('http://localhost:5000/getAllData')
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            salesItems.push(response);
            console.log('GET response:' + response);
            getList(salesItems);
        });
}
getAllList();



