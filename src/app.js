import express from 'express'
import routes from './routes'
import cors from 'cors'

class App{
  constructor(){
    this.server = express()
    this.server.use(cors());
    this.middlawares();
    this.routes();

  }

  middlawares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}


export default new App().server;