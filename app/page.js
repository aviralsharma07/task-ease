"use client";

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios("/api");
      setTodoData(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete("/api", {
        params: {
          mongoId: id,
        },
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete todo");
    }
  };

  const completeTodo = async (id) => {
    try {
      const response = await axios.put(
        "/api",
        {},
        {
          params: {
            mongoId: id,
          },
        }
      );
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Failed to complete todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code here
      const response = await axios.post("/api/", formData);

      toast.success(response.data.msg);
      setFormData({ title: "", description: "" });
      await fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Failed to add todo");
    }

    console.log("Form Submitted");
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-2 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Description" className="px-3 py-2 w-full"></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-20 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return <Todo key={index} id={index} mongoId={item._id} title={item.title} description={item.description} complete={item.isCompleted} deleteTodo={deleteTodo} completeTodo={completeTodo} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
