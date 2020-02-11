/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class SortableTable {
  constructor(items) {
    this.el = document.createElement("table");
    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    tHead.innerHTML = `
                    <tr>
                      <td>Name</td>
                      <td>Age</td>
                      <td>Salary</td>
                      <td>City</td>  
                    </tr>
  `;
    this.el.append(tHead);
    this.el.append(tBody);
    function buildTable() {
      tBody.innerHTML = items
        .map(
          user => `
              <tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.salary}</td>
                <td>${user.city}</td>
              </tr>
            `
        )
        .join("");
      //???    document.body.append(this.el);
    }
    this.sort = (sortKey, sortOrder = false) => {
      //let sortOrder = false; //false или пусто - по возрастанию, true - по убыванию
      //let sortKey = 0; //столбец для сортировки
      switch (sortKey) {
        case 0:
          sortKey = "name";
          break;
        case 1:
          sortKey = "age";
          break;
        case 2:
          sortKey = "salary";
          break;
        case 3:
          sortKey = "city";
          break;
        default:
          sortKey = "name";
      }
      items = items.sort((a, b) => {
        if (sortOrder) {
          return a[sortKey] < b[sortKey] ? 1 : -1;
        } else {
          return a[sortKey] > b[sortKey] ? 1 : -1;
        }
      });
      buildTable();
    };
    buildTable();
  }
}
