"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.update = exports.createTodo = exports.allTodos = void 0;
var Todos = require('../models').Todos;
function sortOnName(array) {
    array.sort(function (el1, el2) { return el1.todo.toLowerCase().localeCompare(el2.todo.toLowerCase()); });
    return array;
}
function allTodos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var todos, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Todos.findAll()];
                case 1:
                    todos = _a.sent();
                    res.status(200).send(sortOnName(todos));
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    res.status(400).send(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.allTodos = allTodos;
function createTodo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newTodo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newTodo = Todos.build(req.body);
                    return [4 /*yield*/, newTodo.save()];
                case 1:
                    _a.sent();
                    res.status(201).send({ msg: 'Todo created successfully' });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(400).send(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createTodo = createTodo;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var todoId, oldTodo, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    todoId = req.params.todoId;
                    return [4 /*yield*/, Todos.findByPk(todoId)];
                case 1:
                    oldTodo = _a.sent();
                    return [4 /*yield*/, Todos.update({ done: !oldTodo.done }, { where: { id: todoId } })];
                case 2:
                    _a.sent();
                    res.status(200).send({ msg: 'updated successfully' });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(400).send(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
function deleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var todoId, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    todoId = req.params.todoId;
                    return [4 /*yield*/, Todos.destroy({ where: { id: todoId } })];
                case 1:
                    _a.sent();
                    res.status(200).send({ msg: 'Todo deleted' });
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    res.status(400).send(e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteTodo = deleteTodo;
