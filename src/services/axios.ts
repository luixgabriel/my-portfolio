import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.github.com/users/luixgabriel',
  headers: {
    Authorization: `Bearer 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 `,
  },
})

// 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

// https://api.github.com/users/luixgabriel/repos
