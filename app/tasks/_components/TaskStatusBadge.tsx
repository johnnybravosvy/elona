import { Status } from "@prisma/client";
import React from "react";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "yellow" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
  DONE: { label: "Done", color: "green" },
};

const TaskStatusBadge = ({ status }: { status: Status }) => {
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${statusMap[status].color}-100 text-${statusMap[status].color}-800`}
    >
      {statusMap[status].label}
    </span>
  );
};

export default TaskStatusBadge;
