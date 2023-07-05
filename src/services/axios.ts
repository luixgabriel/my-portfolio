import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.github.com/users/luixgabriel',
  headers: {
    Authorization: ` Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY} `,
  },
})
