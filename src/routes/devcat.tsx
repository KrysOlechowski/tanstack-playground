import { createFileRoute } from '@tanstack/react-router'
import Hills from '@/devcat/images/hills.svg?react'
import Moon_Image from '@/devcat/images/moon.png'
import '@/devcat/devcat-style.css'

export const Route = createFileRoute('/devcat')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-(--dc-bg-color) w-full h-screen flex items-center justify-center relative">
      DevCat
      <div className="absolute max-w-100">
        <img src={Moon_Image} alt="Moon" />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Hills aria-label="Hills" role="img" />
      </div>
    </div>
  )
}
