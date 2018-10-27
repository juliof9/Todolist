window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task;
             
            let ready = document.createElement("button");
            ready.type = "button";
            ready.style.margin = "0 25px";
            ready.innerText = "Eliminar";

            let eliminar = document.createElement("button");
            eliminar.type = "button";
            eliminar.style.margin = "0 15px";
            eliminar.innerText = "Eliminar";

            element.appendChild(ready);
            element.appendChild(eliminar);

            eliminar.addEventListener("click", function(){
                let parent = this.parentNode;
                let bigParent = parent.parentNode;
                if(parent){
                    bigParent.removeChild(parent);
                }
             });

             ready.addEventListener("click", function(){
                let parent = this.parentNode;
                parent.className += "tachado";
             });
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }