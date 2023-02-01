// ... imports
import { useSelector } from "react-redux";

export type TaskListProps = {
  userId: number;
  validateTask: (e: number) => any;
  listName?: string;
};
export const TaskList = (props: TaskListProps) => {
  let count = 0;
  let tasks: Task[] = useSelector((state: any) =>
    getTaskListForUser(state, prop.userId)
  );

  return (
    <div className="list-container">
      <h1>{props.listName}</h1>
      {tasks.map((task: Task) => {
        if (task.overdue) {
          count++;
        }

        return (
          <div className="container">
            <div className="header">
              <h1>{task.title}</h1>
              <span>{task.date}</span>
            </div>
            <div className="body">
              <input
                type="checkbox"
                checked={task.isChecked}
                onChange={() => props.validateTask(task.id)}
              ></input>
              <span>{task.content}</span>
            </div>
            <div className="footer">
              {task.overdue ? <span className="alert"> Overdue </span> : null}
            </div>
          </div>
        );
      })}
      <span> `Number of overdue tasks: ${count}` </span>
    </div>
  );
};
