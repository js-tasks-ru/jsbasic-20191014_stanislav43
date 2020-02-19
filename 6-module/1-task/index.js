class ClearedTable {
  constructor(data) {
    this.el = document.createElement("table");
    this.data = data;
    this.el.classList.toggle("pure-table");
    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    tHead.innerHTML = `
                    <tr>
                      <td>Name</td>
                      <td>Age</td>
                      <td>Salary</td>
                      <td>City</td>
                      <td></td>
                    </tr>
  `;
    this.el.append(tHead);
    tBody.innerHTML = data
      .map(
        user => `
                    <tr id="${user.id}">
                      <td>${user.name}</td>
                      <td>${user.age}</td>
                      <td>${user.salary}</td>
                      <td>${user.city}</td>
                      <td><a href="#delete">X</a></td>
                    </tr>
                  `
      )
      .join("");
    this.el.append(tBody);
    this.el.addEventListener("click", event => this.onClick(event));
  } //к конструктору

  onClick(event) {
    if (event.target.getAttribute("href") == "#delete") {
      let userId = event.target.closest("tr").getAttribute("id");
      event.target.closest("tr").remove();
      this.onRemoved(+userId);
    }
  }
  onRemoved(userId) {
    console.log(`Из таблицы удален пользователь ${userId}`);
  }
} // к классу

window.ClearedTable = ClearedTable;