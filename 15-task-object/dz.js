const ToDoList = {
    tasks: [
        {
            title: 'Помыть посуду', 
            id: 1,
            priority: 1
        },
        {
            title: 'Помыть полы', 
            id: 2,
            priority: 3
        },
        {
            title: 'Постирать', 
            id: 3,
            priority: 2
        }
    ],
    addTask: function(title, priority){
        this.tasks.push(
            {
                title,
                id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
                priority
            }
        )
    },
    delTaskByID: function(id){
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    updateTask: function(id, newTitle, newPriority){
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            return null;
        }
        if (newTitle){
            task.title = newTitle;
        }
        if (newPriority !== undefined){
            task.priority = newPriority;
        }
    },
    sortTask: function(order = 'asc'){
        this.tasks.sort((a, b) =>{
            order === 'asc' ?  a.priority - b.priority : b.priority - a.priority;
       })
    }
}

ToDoList.addTask('Убраться в шкафу', 5);
console.log(ToDoList.tasks);

ToDoList.delTaskByID(1);
console.log(ToDoList.tasks);

ToDoList.updateTask(2, 'Помыть обувь');
console.log(ToDoList.tasks);

ToDoList.sortTask('desc');
console.log(ToDoList.tasks);




