import {
  PaperCircle,
  PaperCircleFiber,
  PaperCircleIrregular,
  PaperCircleNoise,
  PaperCirclePremium,
  PaperCircleWarmShadow,
  PaperSun,
} from '#/components/devcat/PaperCircle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/devcat')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#efe5d1] text-[#2d241b]">
      <h1>DevCat</h1>
      <section className="relative min-h-screen">
        <div className="h-250">
          <img
            src="/ksiezyc.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12%] top-[-10%] z-0 w-[min(34vw,420px)] max-w-none opacity-90 mix-blend-multiply md:right-[-2%] md:top-[0%] lg:right-[2%] lg:top-[-6%]"
          />
          <img
            src="/ksiezyc-drzewko.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-8%] top-[10%] z-0 w-[min(46vw,640px)] max-w-none opacity-95 mix-blend-multiply md:right-[2%] md:top-[14%] lg:right-[6%] lg:top-[12%]"
          />
        </div>
        <PaperCircle />
        <PaperCircle size={260} color="#e86a00" />
        <PaperCircle size={260} color="#457575" />
        <PaperCircleIrregular />
        <PaperCircleNoise />
        <PaperCircleFiber />
        <PaperCircleWarmShadow />
        <h1>premium</h1>
        <PaperCirclePremium
          color="#FF6D06"
          shadowStrength={0.6}
          textureStrength={0.6}
        />
        <PaperCirclePremium
          color="#FF6D06"
          shadowStrength={1.4}
          textureStrength={1.4}
        />
        <PaperCirclePremium
          color="#55817D"
          shadowStrength={0.6}
          textureStrength={1.4}
        />
        <PaperCirclePremium
          color="#55817D"
          shadowStrength={1.4}
          textureStrength={0.6}
        />
        <PaperCirclePremium
          color="#8A9A84"
          shadowStrength={1.4}
          textureStrength={0.6}
        />
        <PaperCirclePremium
          color="#8A9A84"
          shadowStrength={0.6}
          textureStrength={1.4}
        />
        <h1>Sun</h1>
        <PaperSun
          size={420}
          color="#f47c20"
          shadowStrength={1.15}
          textureStrength={1}
          glowStrength={1.1}
          className="absolute -left-10 -top-5"
        />
        <PaperSun
          size={360}
          color="#ef7a1a"
          shadowStrength={0.9}
          textureStrength={0.7}
          glowStrength={0.8}
        />
      </section>
    </div>
  )
}
