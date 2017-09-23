// create new file ./app/controllers/index.controller.js
exports.index = (req, res) => {
    res.send('Hello World');
}

exports.help = (req, res) => {
    res.send('Help me');
}