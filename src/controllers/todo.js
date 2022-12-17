let todos = [
    {
        id: 1,
        title: 'Learn NodeJs - ExpressJs',
        isDone: true,
    },
    {
        id: 2,
        title: 'Learn Golang',
        isDone: false,
    },
    {
        id: 3,
        title: 'Learn Java - Spring Boot',
        isDone: false,
    },
    {
        id: 4,
        title: 'Learn VueJs - NuxtJs',
        isDone: true,
    },
    {
        id: 5,
        title: 'Learn ReactJs - Redux',
        isDone: false,
    },
    {
        id: 6,
        title: 'Learn PHP - Laravel',
        isDone: true,
    },
];

// Create controller get todos here
exports.getTodos = async (req, res) => {
    try {
        res.send({
            data: todos,
        });
    } catch (error) {
        console.log(error);
        res.send({
            error: {
                message: 'Server Error'
            },
        });
    };
};

// Create controller for get todo by id
exports.getTodo = async (req, res) => {
    try {
        const id = req.params.id;

        // using this 
        const data = todos.find((item) => item.id == id);


        // or using this
        // const index = id - 1;
        res.send({
            status: "success",
            data: {
                todo: data,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};

// Create controller for add todo
exports.addTodo = async (req, res) => {
    try {
        // using this
        // todos = [...todos, req.body];

        // or using this
        const data = req.body;
        todos.push(data);

        res.send({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

// Create controller for update data
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        
        todos = todos.map((todo) => {
            if (todo.id == id){
                return req.body;
            } else {
                return todo;
            }
        });

        const data = todos.find((todo) => todo.id == id);

        res.send({
            status: 'success',
            data: {
                todo: data,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

// Create controller for delete data
exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        todos = todos.filter((todo) => todo.id != id);
        res.send({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};