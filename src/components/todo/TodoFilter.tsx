import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FunnelIcon } from "@heroicons/react/24/outline";

const TodoFilter = () => {
  const [position, setPosition] = useState("top");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-lg bg-primary-gradient">
          Filter <FunnelIcon className="h-5 w-5 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="High">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
