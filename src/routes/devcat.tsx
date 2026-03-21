import { createFileRoute } from '@tanstack/react-router'
import Hills from '@/devcat/images/hills.svg?react'
import '@/devcat/devcat-style.css'

export const Route = createFileRoute('/devcat')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-(--dc-bg-color) w-full h-screen flex items-center justify-center">
      DevCat
      <div>
        <Hills aria-label="Hills" role="img" />
      </div>
    </div>
  )
}
