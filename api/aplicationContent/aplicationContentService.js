const AplicationContent = require('./AplicationContent')
const _ = require('lodash')

AplicationContent.methods(['get', 'post', 'put', 'delete'])
AplicationContent.updateOptions({new: true, runValidators: true})

/*
AplicationContent.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.local.bundle

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else{
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

AplicationContent.route('count', function(req, res, next) {
    AplicationContent.count(function (error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
}) */

module.exports = AplicationContent