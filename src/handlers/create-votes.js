const { v4 } = require('uuid')

module.exports = (db) => {
    return async (request, response) => {
        const result = await db.collection('polls').updateOne({
            _id: request.params.poll,
            'restaurants._id': request.body.restaurant
        }, {
            $inc: {
                'restaurants.$.count': 1
            }
        })

        return response.json({
            message: 'Vote has been registered.'
        })
    }
}