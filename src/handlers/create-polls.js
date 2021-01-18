//A function returning another function
module.exports = (client) => {
  //Which is a valid express js handler
  return (request, response) => {
    response.json({
      message: 'It works.'
    });
  }
}