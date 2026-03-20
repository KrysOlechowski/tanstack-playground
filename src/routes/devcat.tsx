import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/devcat')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>DevCat</div>
}
