import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Todo, Categorie } from "../types"

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Todos"],
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos?_embed=categorie",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: todo => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    toggleTodo: builder.mutation<Todo, Pick<Todo, "id" | "completed">>({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: { completed: !completed },
      }),
      invalidatesTags: ["Todos"],
    }),
    removeTodo: builder.mutation<Todo, Todo["id"]>({
      query: id => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    getCategories: builder.query<Categorie[], void>({ query: () => "/categories" }),
  }),
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useGetCategoriesQuery,
  useToggleTodoMutation,
  useRemoveTodoMutation,
} = todoApi
