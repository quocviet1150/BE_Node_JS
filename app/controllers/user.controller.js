const User = require('../models/user.model')

exports.create = async(req, res) => {
    const user = await User.create(req.body)

    if(user){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const user = await User.read();
    res.status(200).send(user)
}

exports.update = async(req, res) => {
    const user = await User.update(req.params.id, req.body)

    if(user){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const user = await User.delete(req.params.id, req.body);

    if (user) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const user = await User.readById(req.params.id)
    res.status(200).send(user)
}