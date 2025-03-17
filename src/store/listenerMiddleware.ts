import { createListenerMiddleware } from "@reduxjs/toolkit"
import { toast } from "sonner"
import { todoApi } from "./todoApi"

const _listenerMiddleware = createListenerMiddleware()

_listenerMiddleware.startListening({
  matcher: todoApi.endpoints.addTodo.matchFulfilled,
  effect: async ({ payload: { text } }) => {
    toast.success(`added Todo:\n${text}`)
  },
})

export const { middleware: listenerMiddleware } = _listenerMiddleware
