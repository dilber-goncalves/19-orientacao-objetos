import { Request, Response } from "express";
import { autores } from "../bancodedados";
import Autor from "../modelos/Autor";

export default class AutorControlador {
    listar(req: Request, res: Response) {
        res.json(autores)
    }

    detalhar(req: any, res: any) {
        const { id } = req.params
    
        const autor = autores.find((elemento) => {
            return elemento.id === id
        })
    
        if(!autor){
            return res.status(404).json({
                message: "Autor não encontrado"
            })
        }
    
        return res.json(autor)
    }

    cadastrar(req: any, res: any) {
        const { nome, idade } = req.body

        if(!nome || !idade){
            return res.status(400).json({
                message: "Nome e idade obrigatórios"
            })
        }

        const autor = new Autor({
            nome,
            idade,
            id: ""
        })

        autores.push(autor)

        return res.status(201).json({
            message: "Autor cadastrado com sucesso",
        })
    }

    editar(req: any, res: any) {
        //buscar autor para editar

        const { id } = req.params

        const autor = autores.find((elemento) => {
            return elemento.id === id
        })

        if(!autor){
            return res.status(404).json({
                message: "Autor nao encontrado"
            })
        }

        //alterar o nome e a idade
        const { nome, idade } = req.body

        autor.nome = nome
        autor.idade = idade

        return res.status(204).send()
    }

    excluir(req: any, res: any) {
        const { id } = req.params    

        const autorIndice = autores.findIndex((elemento) => {
            return elemento.id === id
        })

        if(autorIndice === -1){
            return res.status(404).json({
                message: "Autor não encontrado"
            })
        }

        autores.splice(autorIndice, 1)
    }
}
