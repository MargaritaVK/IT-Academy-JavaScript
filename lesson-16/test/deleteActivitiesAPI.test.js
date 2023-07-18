const axios = require('axios')

describe ('API tests', function() {
    test('DELETE activities by id request should be 200', async() => {
        const response5 = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/30', {
            headers: {
                Accept: '*/*'
            }
        })
        await expect(response5.status).toEqual(200)
    })
})