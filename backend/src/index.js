const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros,Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Banco de dados:
  * SQL: MYSQL,SQLLITE,POSTGRESQL, ORACLE, E ETC
  * NOSQL: MONGODB, COUCHDB E ETC
  */

  /**
   * CONEXÃO COM BANCO
   * DRIVERS: SELECT * FROM
   * QUERY BUILDER: TABLE
   */



