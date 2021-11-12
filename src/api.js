import axios from 'axios'

export const getTopMovies = async value => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Top250Movies/k_he159814`
      )
      return response.data.items
    } catch (error) {
      console.log(error)
    }
  }