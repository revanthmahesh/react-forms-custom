import  todoApp  from "./reducers/common-reducer";
import { createStore } from "redux";
const store = createStore(todoApp);

export default  store ;