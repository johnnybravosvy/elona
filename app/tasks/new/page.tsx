"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface TaskForm {
  title: string;
  description: string;
}

const NewTaskPage = () => {
  const { register, handleSubmit } = useForm<TaskForm>();
  const router = useRouter();
  return (
    <div>
      <form
        className=" flex flex-col max-w-xl gap-2 m-4"
        action=""
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/tasks", data);
          router.push("/tasks");
        })}
      >
        <input
          className="border-2"
          type="text"
          placeholder="title"
          {...register("title")}
        />
        <textarea
          className="border-2"
          placeholder="description"
          {...register("description")}
        />
        <button className="bg-blue-600 p-4 rounded" type="submit">
          Submit New Task
        </button>
      </form>
    </div>
  );
};

export default NewTaskPage;
