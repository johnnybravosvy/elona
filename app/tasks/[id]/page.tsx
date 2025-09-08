import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const TaskDetail = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!task) {
    return notFound();
  }
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.createdAt.toDateString()}</p>
    </div>
  );
};

export default TaskDetail;
