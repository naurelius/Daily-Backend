"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var e = __importStar(require("express"));
var todoController_1 = require("../controllers/todoController");
var router = e.Router();
function welcome(req, res, next) {
    try {
        res.status(200).json({ msg: 'Welcome to the api' });
    }
    catch (e) {
        res.send(e);
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
    .get(welcome);
router.route('/api/todos')
    .get(todoController_1.allTodos)
    .post(todoController_1.createTodo);
router.route('/api/todos/:todoId')
    .put(todoController_1.update)
    .delete(todoController_1.deleteTodo);
exports.default = router;
