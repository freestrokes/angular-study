const model = require('../model/index.ts');
const Board = model.tutorial;
const Op = model.sequelize.Op;

const DEFAULT_PAGE_SIZE = 5;

// Create tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: 'Title is empty!'
        });
        return;
    }

    // Set tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save tutorial
    Board
        .create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create tutorial failure.'
            });
        });
};

// Retrieve all tutorials
exports.findAll = (req, res) => {
    const keyword = req.query.keyword ? req.query.keyword : '';
    const limit = parseInt( (req.query.size ? req.query.size : DEFAULT_PAGE_SIZE).toString() );
    const offset = parseInt( (req.query.page ? req.query.page * limit : 0).toString() );

    let condition = { where: {}, limit: limit, offset: offset };

    if (keyword) {
        condition = {
            where : {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${keyword}%`
                        }
                    }
                ]
            },
            limit: limit,
            offset: offset
        }
    };

    Board
        .findAndCountAll(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve all tutorials failure.'
            });
        });
};

// Retrieve tutorial by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Board
        .findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve tutorial failure. (id: ' + id + ')'
            });
        });
};

// Update tutorial by id
exports.update = (req, res) => {
    const id = req.params.id;
    const condition = {
            where: {
                id: ( id ? id : null )
            }
        };

    Board
        .update(
            req.body,
            condition
        )
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Tutorial updated.'
                });
            } else {
                res.send({
                    message: 'Cannot update tutorial. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Update tutorial failure. (id: ' + id + ')'
            });
        });
};

// Delete tutorial by id
exports.delete = (req, res) => {
    const id = req.params.id;
    const condition = {
            where: {
                id: ( id ? id : null )
            }
        };

    Board
        .destroy(condition)
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Tutorial deleted.'
                });
            } else {
                res.send({
                    message: 'Cannot delete tutorial. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Delete tutorial failure. (id: ' + id + ')'
            });
        });
};

//TODO
// Delete all tutorials
exports.deleteAll = (req, res) => {
    const condition = {
            where: {},
            truncate: false
        };

    Board
        .destroy(condition)
        .then(resultCount => {
            res.send({
                message: 'All tutorials deleted. (count: ' + resultCount + ')'
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Delete all tutorials failure.'
            });
        });
};

//TODO
// Retrieve all published tutorials
exports.findAllPublished = (req, res) => {
    const condition = {
            where: {
                published: true
            }
        };

    Board
        .findAll(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve all published tutorials failure.'
            });
        });
};
