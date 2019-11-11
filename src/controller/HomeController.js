import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter);

class HomeController {
  async index(req, res){
    
    return res.json(db.get('user'))
  }

}

export default new HomeController();