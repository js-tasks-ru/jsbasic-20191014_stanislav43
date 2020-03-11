"use strict";

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;
    const backDrop = document.querySelector(".backdrop");
    const menuUp = this.el.querySelectorAll(".list-group-item");
    for (let i = 0; i < menuUp.length; i++) {
      menuUp[i].addEventListener("pointerenter", event =>
        this.onPointerenter(event, backDrop)
      );
      menuUp[i].addEventListener("pointerleave", event =>
        this.onPointerleave(event, backDrop)
      );
    }
    const dropDownMenu = this.el.querySelectorAll(".dropdown-menu");
    for (let i = 0; i < dropDownMenu.length; i++) {
      dropDownMenu[i].addEventListener("click", event =>
        this.onClickMenu(event)
      );
    }
  } //к конструктору

  onPointerenter(event, backDrop) {
    event.target.querySelector(".dropdown-menu").classList.toggle("show");
    backDrop.classList.toggle("show");
  }
  onPointerleave(event, backDrop) {
    event.target.querySelector(".dropdown-menu").classList.toggle("show");
    backDrop.classList.toggle("show");
  }
  onClickMenu(event) {
    let menuId = event.target.closest("li").dataset.id;
  }
} //к классу

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
