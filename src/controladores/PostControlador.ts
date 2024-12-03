import { Request, Response } from "express";
import { autores, posts } from "../bancodedados";
import Post from "../modelos/Post";

export default class PostControlador {
    listar(req: any, res: any) {
        return res.json(posts)
    }

    detalhar(req: any, res: any) {
        const { id } = req.params

        const post = posts.find((elemento) => {
            return elemento.id === id
        })

        if (!post) {
            return res.status(404).json({
                message: "Postagem nao encontrada"
            })
        }

        return res.json(post)
    }

    cadastrar(req: any, res: any) {
        const { titulo, descricao, autor_id } = req.body

        if (!titulo || !descricao || !autor_id) {
            return res.status(400).json({
                message: "Todos os campos são obrigatorios"
            })
        }

        const autor = autores.find((elemento) => {
            return elemento.id === autor_id
        })

        if (!autor) {
            return res.status(404).json({
                message: "Autor nao encontrado"
            })
        }

        const post = new Post({
            titulo,
            descricao,
            autor
        })

        return res.status(201).json({})
    }


    editar(req: any, res: any) {
        const { id } = req.params
        const { titulo, descricao } = req.body

        const post = posts.find((elemento) => {
            return elemento.id === id
        })

        if (!post) {
            return res.status(404).json({
                message: "Postagem nao encontrada"
            })
        }

        post.titulo = titulo
        post.descricao = descricao

        return res.status(204).send()
    }

    excluir(req: any, res: any) {
        const { id } = req.params

        const postIndice = posts.findIndex((elemento) => {
            return elemento.id === id
        })

        if (postIndice === -1) {
            return res.status(404).json({
                message: "Postagem nao encontrada"
            })
        }

        posts.splice(postIndice, 1)
    }
}
