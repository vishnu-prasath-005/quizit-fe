export const CONSTANTS = {
  patterns: {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/
  },
  baseUrl: 'http://localhost:8070',
  bulidHeaders :  () => {
    return {'content-type': 'application/json'}
  }
}


