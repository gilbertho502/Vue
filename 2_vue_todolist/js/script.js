let app = new Vue({
  el: "#app",
  data: {
    message: "Ahora es: " + new Date(),
    seen: false,
    tasks: [
      { text: "comprar arroz", done: false },
      { text: "comprar azucar", done: false },
    ],
    newTask: "Nueva tarea",
  },
  created: function () {
    if (localStorage.getItem("tasks") === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({ text: this.newTask });
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});