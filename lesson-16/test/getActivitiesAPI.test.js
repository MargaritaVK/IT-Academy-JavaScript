const axios = require('axios')
const validator = require('jsonschema')
const getActivitiesSchema = require('../data/getActivitiesSchema.v1.json')


describe ('API tests', function() {
    let response;

    beforeAll(async () =>{
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
            headers: {
                Accept: 'text/plain'
            }
        })
    })

    test('GET request should be 200', async() => {
        await expect(response.status).toEqual(200)
    })

    test('GET should be valid json schema', async() => {
        const result = await validator.validate(response.data, getActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })
})