const { response, request } = require('express');

const usuarioGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controlador',
        query
    })

}

const usuarioPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad,
    })

}

const usuarioPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id,
    })

}

const usuarioPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controlador',
    })

}

const usuarioDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador',
    })

}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete,
}