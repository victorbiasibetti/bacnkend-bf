class CamController {

  async store(req, res){

    const data = req.body;
    console.log(data)

    console.log(req.file)
    return res.json({obj: 'return ok'})
  }
}

export default new CamController();