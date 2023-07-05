import axios from '@/services/axios'
import { IRepositorie } from '@/types/repositorie'
import { useState } from 'react'

export function UseRepositories() {
  const [repos, setRepos] = useState<IRepositorie[]>([])

  const fetcher = async () => {
    const result = await axios('/repos')
    const reposAPI = result.data
    const reposFiltered: IRepositorie[] = reposAPI.map(
      ({ name, html_url, description }: IRepositorie) => ({
        name,
        html_url,
        description,
      }),
    )
    setRepos(reposFiltered)
  }

  fetcher()

  return { repos }
}
