const { validateAll } = require('indicative/validator')

//Exports a function that validates the poll
module.exports = async (request, response, next) => {
  try {
    //Gets data to be validated
    await validateAll(request.body, {
      //Validation rules
      title: 'required',
      restaurants: 'required|array|min:3',
      'restaurants.*': 'required|string'
    })

    return next()
  } catch (errors){
    //422 response with json of the errors
    return response.status(422).json(errors)
  }
}