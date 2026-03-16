import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const getGames = createServerFn({ method: 'GET' }).handler(async () => {
  const { supabaseServer } = await import('../utils/supabase.server')
  const { data, error } = await supabaseServer
    .from('games')
    .select('id, level_id, status, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Supabase games query failed: ${error.message}`)
  }

  return { games: data ?? [] }
})

export const Route = createFileRoute('/')({
  loader: () => getGames(),
  component: App,
})

function App() {
  const { games } = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1>Demo</h1>
      {games.length === 0 ? (
        <p>No games found in Supabase.</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.level_id} ({game.status})
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
