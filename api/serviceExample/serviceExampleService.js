//const ServiceExample = require('./ServiceExample')
//const _ = require('lodash')

/* serviceExample methods and errors

ServiceExample.methods(['get', 'post', 'put', 'delete'])
ServiceExample.updateOptions({new: true, runValidators: true})

ServiceExample.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

ServiceExample.route('count', function(req, res, next) {
    ServiceExample.count(function (error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

*/

//module.exports = ServiceExample