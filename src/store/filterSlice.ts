import { Categorie } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
  categorieId: Categorie["id"]
  status: "all" | "active" | "completed"
}

const initialState: FilterState = {
  categorieId: "all",
  status: "all",
}

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterCategorie: (state, action: PayloadAction<FilterState["categorieId"]>) => {
      state.categorieId = action.payload
    },
    setFilterStatus: (state, action: PayloadAction<FilterState["status"]>) => {
      state.status = action.payload
    },
    resetFilters: state => {
      state.categorieId = "all"
      state.status = "all"
    },
  },
  selectors: {
    selectStatusFilter: state => state.status,
    selectCategorieFilter: state => state.categorieId,
  },
})

export const { setFilterCategorie, setFilterStatus, resetFilters } = filterSlice.actions
export const { selectStatusFilter, selectCategorieFilter } = filterSlice.selectors
