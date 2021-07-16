var Todos = require('../models').Todos
import type * as express from 'express'

function sortOnName(array:Array<any>) {
    array.sort((el1, el2) => el1.todo.toLowerCase().localeCompare(el2.todo.toLowerCase()));
    return array;
}

export async function allTodos(req:express.Request, res:express.Response) {
    try {
        let todos = await Todos.findAll()
        res.status(200).send(sortOnName(todos))
    } catch (e) {
        res.status(400).send(e)
    }
}

export async function createTodo(req:express.Request, res:express.Response) {
    try {
        let newTodo = Todos.build(req.body);
        await newTodo.save()
        res.status(201).send({msg: 'Todo created successfully'})
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function update(req:express.Request, res:express.Response) {
    try {
        const {todoId} = req.params;
        let oldTodo = await Todos.findByPk(todoId);
       await Todos.update({done: !oldTodo.done}, {where:{id:todoId}});
       res.status(200).send({msg: 'updated successfully'});
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function deleteTodo(req:express.Request, res:express.Response) {
    try {
    let {todoId} = req.params;
    await Todos.destroy({where: {id:todoId}});
    res.status(200).send({msg: 'Todo deleted'});
    } catch (e) {
        res.status(400).send(e)
    }
} 
