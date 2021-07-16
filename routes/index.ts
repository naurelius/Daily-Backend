import * as e from 'express';
import { allTodos, createTodo, update, deleteTodo } from "../controllers/todoController";

const router: e.Router = e.Router();

function welcome(req:e.Request, res:e.Response, next:e.NextFunction) {
    try {
        res.status(200).json({msg: 'Welcome to the api'});
    } catch (e) {
        res.send(e)
    }
}

/*function allTodos(req:e.Request, res:e.Response) {
    try {
        res.status(200).send({msg: 'No todos'});
    } catch (e) {
        res.send(e)
    }
}*/

/**function findOne(req:e.Request, res:e.Response) {
    try {
        res.status(200).send({msg: "Nontodos,add a todo"});
    } catch (e) {
        res.send(e)
    }
}*/
router.route('/api')
.get(welcome)

router.route('/api/todos')
.get(allTodos)
.post(createTodo)

router.route('/api/todos/:todoId')
.put(update)
.delete(deleteTodo)

export default router;

