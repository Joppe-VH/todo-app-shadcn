import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Todo } from "../types"

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Todos"],
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({ query: () => "/todos?_embed=categorie" }),
  }),
})

export const { useGetTodosQuery } = todoApi
