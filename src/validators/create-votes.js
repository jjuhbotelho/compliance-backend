const { validateAll } = require('indicative/validator')

module.exports = async (request, response, next) => {
    try {
        await validateAll(request.body, {
            restaurant: 'required'
        })

        return next()
    } catch (errors) {
        return response.status(422).json(errors)
    }
}