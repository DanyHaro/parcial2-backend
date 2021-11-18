import { pool } from '../database'


export const getAllPosts = async(req, res) => {
    try {
        const response = await pool.query('select * from posts');
        let respuesta = response.rows
        return res.status(200).json({respuesta});
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const getPost = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from posts where idpost=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createPost = async(req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        await pool.query('insert into posts (titulo, descripcion) values($1,$2)', [titulo, descripcion]);
        
        return res.status(200).json(
            `Post ${ titulo } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

export const deletePost = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from posts where idpost=$1', [id]);
        return res.status(200).json(
            `Post ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const updatePost = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { titulo, descripcion } = req.body;
        await pool.query('update posts set titulo=$1, descripcion=$2 where idpost=$3', [titulo, descripcion, id]);
        return res.status(200).json(
            `Post ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}