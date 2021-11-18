import { Pool } from 'pg'


export const pool = new Pool({
    connectionString: process.env.d59unspri9rdam    ,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-34-203-114-67.compute-1.amazonaws.com',
    user: 'aewhepuflxgojc',
    password: 'a566d6b24e1e0ba048c0349c17caecb87a3ec1372eedbbcfecb9f7c4f1059f9d',
    database: 'd88j45hdlvncor',
    port: 5432,
    
});
