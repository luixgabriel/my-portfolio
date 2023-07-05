import axios from '@/services/axios'
import { IRepositorie } from '@/types/repositorie'
import { useQuery } from '@tanstack/react-query'

export function UseRepositories() {
  const fetcher = async () => {
    const data = await axios.get('/repos')
    const reposAPI = data.data
    return reposAPI
  }

  const { data } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ['repos'],
    staleTime: 1000 * 60 * 1,
  })

  const reposFiltered: IRepositorie[] = data?.map(
    ({ name, full_name, html_url, description }: IRepositorie) => ({
      name,
      full_name,
      html_url,
      description,
    }),
  )

  return { reposFiltered }
}
