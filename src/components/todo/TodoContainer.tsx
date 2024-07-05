import { useAppSelector } from "../../redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-[500px] rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-xl space-y-3">
          {todos.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
