import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = () => {
  const handleForSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="todo" onSubmit={handleForSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          //   onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label className="label" htmlFor="task">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  );
};

export default CustomForm;
