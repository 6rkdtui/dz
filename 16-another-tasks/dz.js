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

    addTask: function(title, priority, description){
        this.tasks.push(
            {
                title,
                id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
                priority,
                description
            }
        )
    },

    delTaskByID: function(id){
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    updateTask: function(id, newTitle, newPriority, newDescription){
        const task = this.tasks.find(task => task.id === id);
        if (task){
            if (newTitle){
                task.title = newTitle;
            }
            if (newPriority !== undefined){
                task.priority = newPriority;
            }
            if (newTitle){
                task.description = newDescription;
            }
        }
    },

    sortTask: function(order = 'asc'){
       this.tasks.sort((a, b) =>{
        if (order === 'asc'){
            return a.priority - b.priority;
        } else {
            return b.priority - a.priority;
        }
       })
    }
};

const newTask = {
    tasks: [
        {
            title: 'test',
            id: 1,
            priority: 0,
            description: 'dee'
            
        }
    ]
};

const addNewTask = ToDoList.addTask.bind(newTask);
const delTaskByID = ToDoList.delTaskByID.bind(newTask);
const updateTask = ToDoList.updateTask.bind(newTask);
const sortTasks = ToDoList.sortTask.bind(newTask);

// addNewTask('test2', 1, 'zxcvbbn');
// addNewTask('test3', 3, 'zxcvbbn');
// addNewTask('test4', 5, 'zxcvbbn');
// console.log(newTask.tasks);

// delTaskByID(1);
// console.log(newTask.tasks);

// updateTask(2, 'test22', 20, 'qwerrt');
// console.log(newTask.tasks);

// sortTasks('asc');
// console.log(newTask.tasks);






