import { CategoryItems } from "@/features/categories/components/category-items";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <aside className="w-[300px] min-w-[300px] border-r min-h-screen flex flex-col bg-gray-100 p-10 items-center">
      <div className="mb-10">Epic Kitchen</div>
      <div className="bg-red-100 w-full p-2">Home</div>
      <div className="p-2 w-full">
        <CategoryItems />
      </div>
      <div className="bg-red-100 w-full p-2">Favorites</div>
    </aside>
  );
}
