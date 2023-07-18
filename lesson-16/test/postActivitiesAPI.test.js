const axios = require('axios')
const validator = require('jsonschema')
const postActivitiesSchema = require('../data/postActivitiesSchema.v1.json')

describe ('API tests', function() {
    let response;

    beforeAll(async () =>{
        response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            data: {
                "id": 31,
                "title": "string",
                "dueDate": "2023-07-17T19:11:07.600Z",
                "completed": true
        }
        })
    })

    test('POST request should be 200', async() => {
        await expect(response3.status).toEqual(200)
    })

    test('POST should be valid schema', async() => {
        const result = await validator.validate(response3.data, postActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })
})