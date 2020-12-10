const tokenEP = 'https://webapi.demo.bluechain.com/v1/OAuth2/token'
// const authEP = process.env.REACT_APP_API_URI_AUTH
const credUN = 'TestUserDemo'
const credPW = '@Password_1234'
const clientID = 'c.user.password'

const getToken = async () => {
  const response = await fetch(tokenEP, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `grant_type=password&username=${credUN}&password=${credPW}&client_id=${clientID}`
  })

  if (response.status === 200) {
    const data = await response.json()
    // return data
    console.log(data)
  } else {
    throw new Error(`${response.status} | Unable to fetch token`)
  }
}
/* 
const getData = async (token, searchQuery) => {
  const response = await fetch(`${authEP}?userSearch=${searchQuery}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if(response.status === 200) {
    return await response.json()
  } else {
    throw new Error(`${response.status} | Unable to fetch practitioner data`)
  }
}
 */
/* const getPracData = async (searchQuery) => {
  const tokenRcvd = await getToken()
  const pracData = await getData(tokenRcvd.access_token, searchQuery)
  return pracData.results
} */

export { getToken }