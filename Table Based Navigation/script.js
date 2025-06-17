let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);// Accessing the rows of the table // This will return a collection of all the rows in the table
console.log(t.caption);
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.rows[0].rowIndex);