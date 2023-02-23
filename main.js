let personalMovieDB = {
    privat:false,
    movies:{
        "Error":6,
        "GREEN MILE":9,
        "Forrest Gump":9
    }
}

if(personalMovieDB.privat == false) { myfunction();}
else {console.log("privat = true")}

function myfunction()
{
    const keys = Object.keys(personalMovieDB.movies);
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Name of the film";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Mark";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = keys[0];
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = personalMovieDB.movies.Error;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = keys[1];
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = personalMovieDB.movies["GREEN MILE"];

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = keys[2];
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = personalMovieDB.movies["Forrest Gump"];

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);
}
