import axios from 'axios'

const cts = async (method = 'get', endpoint, payload) => {
  console.log(process.env.REACT_APP_API_BASE_URL)
  try {
    const res = await axios({
      method,
      url: `${process.env.REACT_APP_API_BASE_URL}/${endpoint}`,
      data: payload,
    })
    return { data: res.data, error: null }
  } catch (error) {
    return { data: null, error: error.message }
  }
}
export default cts
