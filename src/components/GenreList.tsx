import { useGenres } from '../hooks/useGenres'

export const GenreList = () => {
  const { data: genres } = useGenres()
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  )
}
