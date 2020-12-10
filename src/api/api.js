const getToken = async (tokenEP, username, password, clientID) => {
  const response = await fetch(tokenEP, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `grant_type=password&username=${username}&password=${password}&client_id=${clientID}`
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