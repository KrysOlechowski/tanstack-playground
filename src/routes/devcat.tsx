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
      <div className="absolute top-0 left-0 w-full">
        <h1>Hills</h1>
        <HillsPremium />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Hills aria-label="Hills" role="img" />
      </div>
    </div>
  )
}

export function HillsPremium() {
  return (
    <svg
      viewBox="0 0 1440 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 210C88 188 173 176 261 184C366 193 442 236 537 245C648 255 738 219 838 194C942 168 1034 161 1143 171C1258 181 1352 209 1440 232V360H0V210Z"
        fill="#EFE1CC"
      />
      <path
        d="M0 252C87 232 165 214 258 219C360 225 446 269 543 278C646 288 732 260 829 231C929 201 1026 191 1134 201C1244 212 1341 240 1440 267V360H0V252Z"
        fill="#D9BC93"
      />
      <path
        d="M0 286C90 263 183 247 286 252C383 258 470 294 566 304C665 314 753 299 846 275C947 249 1044 234 1154 240C1268 246 1360 271 1440 292V360H0V286Z"
        fill="#B98C58"
      />
      <path
        d="M0 315C84 287 178 270 286 273C391 276 482 314 585 325C689 336 780 327 876 305C975 283 1070 268 1178 272C1284 276 1374 299 1440 316V360H0V315Z"
        fill="#2C241F"
      />
    </svg>
  )
}
