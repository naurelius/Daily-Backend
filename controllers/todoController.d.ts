import type * as express from 'express';
export declare function allTodos(req: express.Request, res: express.Response): Promise<void>;
export declare function createTodo(req: express.Request, res: express.Response): Promise<void>;
export declare function update(req: express.Request, res: express.Response): Promise<void>;
export declare function deleteTodo(req: express.Request, res: express.Response): Promise<void>;
