import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = [
    new Autor ({
        nome: "Joaquim",
        idade: 20,
        id: ""
    }),
]
export const posts: Post[] = [
    new Post ({
        titulo: "Primeiro post",
        descricao: "Primeira postagem",
        autor: autores[0],
    })
]