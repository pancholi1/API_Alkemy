const {
    v4: uuidv4
} = require('uuid')


class ModelCrud {
    constructor(model) {
        this.model = model
    }
    getAll = (req, res, next) => {
        return this.model.findAll()
            .then((results) => res.send(results))
            .catch((error) => next(error))
    }

    getById = (req, res, next) => {
        var id = req.params.id
        this.model.findByPk(id)
            .then(result => res.send(result))
            .catch((error) => next(error));
    }

    add = (req, res, next) => {
        const body = req.body
        return this.model.create({
                ...body
            })
            .then((createdElement) => {
                res.send(createdElement)
            })
            .catch((error) => {
                next(error)
            })
    }

    update = (req, res, next) => {
        const body = req.body
        const id = req.params.id
        return this.model.update(body, {
                where: {
                    id,
                },
            }).then((updatedElement) => {
                res.send(updatedElement)
            })
            .catch((error) => {
                res.send( error)
            })
    }

    deletes = (req, res) => {
        const id = req.params.id
        return this.model.destroy({
                where: {
                    id,
                },
            }).then(() => {
                res.send()
            })
           
    }

}

module.exports = ModelCrud;