const MAP = document.querySelector("button");

function message(e){
  e.preventDefault();
  alert("hello");
}

MAP.onClick = console.alert("hello");
