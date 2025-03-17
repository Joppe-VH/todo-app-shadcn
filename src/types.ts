export interface Categorie {
  id: string
  name: string
  color: string
}

export interface Todo {
  id: string
  text: string
  completed: boolean
  categorieId: string
  description?: string
  categorie: Categorie
}
