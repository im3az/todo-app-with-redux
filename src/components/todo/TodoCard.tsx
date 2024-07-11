import { Button } from "../ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center border">
      <input type="checkbox" name="" id="" />

      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>

      <div className="space-x-5">
        <Button className="bg-red-500">
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
