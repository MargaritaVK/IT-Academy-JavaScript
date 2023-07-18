const axios = require('axios')
const validator = require('jsonschema')
const getActivitiesSchema = require('../data/getActivitiesSchema.v1.json')
const activitiesSchema2 = require('../data/activitiesSchema2.v1.json')


describe ('API tests', function() {
    let response1;
    let response2;
    let response3;
    let response4;
    beforeAll(async () =>{
        response1 = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
            headers: {
                Accept: 'text/plain'
            }
        })
        response2 = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                Accept: 'text/plain'
            }
        })
        response3 = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities/', {
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
        response4 = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            data: {
                "id": 0,
                "title": "string",
                "dueDate": "2023-07-17T19:15:33.054Z",
                "completed": true
        }
        })
    })

    test('GET request should be 200', async() => {
        await expect(response1.status).toEqual(200)
    })

    test('GET should be valid json schema', async() => {
        const result = await validator.validate(response1.data, getActivitiesSchema)
        await expect(result.valid).toEqual(true)
    })


    test('GET activities by id request should be 200', async() => {
        await expect(response2.status).toEqual(200)
    })

    test('GET activities by id should be valid json schema', async() => {
        const result = await validator.validate(response2.data, activitiesSchema2)
        await expect(result.valid).toEqual(true)
    })

    test('POST request should be 200', async() => {
        await expect(response3.status).toEqual(200)
    })

    test('POST should be valid schema', async() => {
        const result = await validator.validate(response3.data, activitiesSchema2)
        await expect(result.valid).toEqual(true)
    })

    test('PUT request should be 200', async() => {
        await expect(response4.status).toEqual(200)
    })

    test('PUT should be valid schema', async() => {
        const result = await validator.validate(response4.data, activitiesSchema2)
        await expect(result.valid).toEqual(true)
    })

    test('DELETE activities by id request should be 200', async() => {
        const response5 = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                Accept: '*/*'
            }
        })
        await expect(response5.status).toEqual(200)
    })
})