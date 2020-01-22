function highlight(table) {
  let tHead = table.querySelector('thead');
  let colHead = tHead.querySelectorAll('td');
  let colStatus;
  let colGender;
  let colAge;

  for (let col = 0; col < colHead.length; col++) {
    if (colHead[col].innerText == 'Status') { colStatus = col; }
    if (colHead[col].innerText == 'Gender') { colGender = col; }
    if (colHead[col].innerText == 'Age') { colAge = col; }
  }

  let tBody = table.querySelector('tbody');
  let rows = tBody.rows;

  for (let i = 0; i < rows.length; i++) {
    let cellStatus = rows[i].cells[colStatus];
    if (cellStatus.hasAttribute('data-available')) { 
      if (cellStatus.dataset.available == 'true') { 
        rows[i].classList.add('available') 
      }
        else if (cellStatus.dataset.available == 'false') {
        rows[i].classList.add('unavailable') 
      }
    } else { rows[i].setAttribute('hidden', 'hidden'); 
  }  
   
    if (rows[i].cells[colGender] = 'm') { 
      rows[i].classList.add('male')
      } else if (rows[i].cells[colGender] = 'f') { 
        rows[i].classList.add('female'); 
      }
    
    if (+rows[i].cells[colAge].innerText < 18) { 
      rows[i].style = 'text-decoration: line-through';
    }
  }
}
