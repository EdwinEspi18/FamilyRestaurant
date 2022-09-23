const d = document;

const template = d.getElementById("template").content;
const cont_menu = d.querySelector(".menu-desayuno");
const fragment = d.createDocumentFragment();
const list_des = [
  {
    nombre: "HUEVO CON QUESO",
    precio: "$6.00",
    descripcion: "Egg and Cheese",
  },
  {
    nombre: "HUEVOS CON SALCHICHAS",
    precio: "$6.00",
    descripcion: "Eggs with Sausage",
  },
  {
    nombre: "HUEVOS CON SALAMI",
    precio: "$6.00",
    descripcion: "Eggs and Salami",
  },
  {
    nombre: "HUEVOS CUALQUIER ESTILO",
    precio: "$5.00",
    descripcion: "Egss any Style",
  },
  {
    nombre: "TORTILLA BAJA EN GRASA",
    precio: "$5.00",
    descripcion: "Low Fat Egg Omelette",
  },
  {
    nombre: "SALAMI GUISADO",
    precio: "$5.00",
    descripcion: "Stewed Salami",
  },
  {
    nombre: "TORTILLA DE PAPA",
    precio: "$5.00",
    descripcion: "Potato Omelette",
  },
  {
    nombre: "TORTILLA DE JAMON Y HUEVO",
    precio: "$6.00",
    descripcion: "Ham and Egg Omelette",
  },
];

d.addEventListener("DOMContentLoaded", () => {
  list_des.map((el) => {
    template.querySelector(".nombre").textContent = el.nombre;
    template.querySelector(".precio").textContent = el.precio;
    template.querySelector(".descripcion").textContent = el.descripcion;
    const clone = d.importNode(template, true);
    fragment.appendChild(clone);
  });
  cont_menu.appendChild(fragment);
});
