import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center border">
      <input
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />

      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <p>
        {isCompleted ? (
          <p className="text-green-500 font-medium">Done</p>
        ) : (
          <p className="text-red-500 font-medium">Pending</p>
        )}
      </p>
      <p>{description}</p>

      <div className="space-x-5">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <TrashIcon className="h-5 w-5" />
        </Button>
        <Button className="bg-[#5C53FE]">
          <PencilSquareIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
