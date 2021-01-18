const { v4 } = require('uuid');

//A function returning another function
module.exports = (db) => {
  //Which is a valid express js handler
  return async (request, response) => {
    const data = {
      _id: v4(),
      title: request.body.title,
      restaurants: request.body.restaurants.map(restaurant => ({
        name: restaurant,
        count: 0,
        _id: v4()
      }))
    }

    await db.collection('polls').insertOne(data);

    return response.json({
      message: 'Poll created.',
      pollId: data._id
    })
  }
}