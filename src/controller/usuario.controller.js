import { pool } from '../database'
const jwt = require('jsonwebtoken')
const helpers = require('../libs/helper');



export const signIn = async (req, res) => {

    try {
        const { username, password } = req.body;

        await pool.query('SELECT * FROM USUARIO WHERE username=$1 AND password=$2',[username,password],(err,result)=>{
            if (result.rows.length<=0) {
                return res.status(401).send("Usuario o Contraseña incorrecto !");
            }else{
                jwt.sign(req.body, 'Token', (error, token) => {
                    return res.status(200).json({token,username,password});
                });
            }
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}