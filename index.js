//{type:"", payload:""}
// dispatch({type:"ADD",payload:"1"})
import store from "./store.js";
import {
  addTodoActionCreator,
  addUserActionCreator,
  removeTodoActionCreator,
} from "./actionCreator.js";

console.log(store.getState());
store.dispatch(addTodoActionCreator("Buy milk"));
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreator("buy eggs"));
store.dispatch(addTodoActionCreator("buy cheese"));
store.dispatch(addUserActionCreator("jhon Doe"));
// store.dispatch(removeTodoActionCreator(store.getState().todos[0].id));
console.log(store.getState());
