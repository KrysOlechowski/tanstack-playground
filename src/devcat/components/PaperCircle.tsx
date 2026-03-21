import * as React from 'react'

type PaperCircleProps = {
  size?: number
  color?: string
  className?: string
}

export function PaperCircle({
  size = 220,
  color = '#ff7300',
  className = '',
}: PaperCircleProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Soft shadow on background */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: 'translate(10px, 14px)',
          background: 'rgba(70, 40, 10, 0.22)',
          filter: 'blur(16px)',
        }}
      />

      {/* Main paper circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22), transparent 32%),
            radial-gradient(circle at 70% 75%, rgba(0,0,0,0.08), transparent 38%),
            linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,0,0,0.06)),
            ${color}
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.22),
            inset -8px -10px 16px rgba(0,0,0,0.10),
            inset 8px 10px 18px rgba(255,255,255,0.05),
            0 18px 28px rgba(84, 48, 12, 0.18)
          `,
        }}
      />

      {/* Paper edge thickness */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '2px',
          border: '1px solid rgba(90,40,0,0.08)',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.06)',
        }}
      />

      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 rounded-full opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.7) 0.7px, transparent 0.8px),
            radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.7px)
          `,
          backgroundSize: '10px 10px, 14px 14px',
          backgroundPosition: '0 0, 4px 6px',
        }}
      />

      {/* Top highlight */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '10%',
          background:
            'radial-gradient(circle at 40% 28%, rgba(255,255,255,0.18), transparent 36%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
type PaperCircleProps2 = {
  size?: number
  color?: string
  className?: string
}

export function PaperCircleIrregular({
  size = 220,
  color = '#ff7300',
  className = '',
}: PaperCircleProps2) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: 'translate(10px, 14px)',
          background: 'rgba(90, 52, 18, 0.20)',
          filter: 'blur(16px)',
          borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.20), transparent 30%),
            radial-gradient(circle at 68% 75%, rgba(0,0,0,0.08), transparent 36%),
            linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.05)),
            ${color}
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset -8px -10px 14px rgba(0,0,0,0.10),
            0 18px 28px rgba(84, 48, 12, 0.16)
          `,
        }}
      />

      <div
        className="absolute"
        style={{
          inset: '2px',
          borderRadius: '47% 53% 50% 50% / 49% 47% 53% 51%',
          border: '1px solid rgba(90,40,0,0.08)',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.05)',
        }}
      />
    </div>
  )
}
type PaperCircleProps3 = {
  size?: number
  color?: string
  className?: string
}

export function PaperCircleNoise({
  size = 220,
  color = '#ff7300',
  className = '',
}: PaperCircleProps3) {
  const noiseId = 'paper-noise-filter'

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width="0" height="0" aria-hidden="true">
        <filter id={noiseId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.05" />
          </feComponentTransfer>
        </filter>
      </svg>

      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: 'translate(10px, 14px)',
          background: 'rgba(90, 52, 18, 0.20)',
          filter: 'blur(16px)',
        }}
      />

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.20), transparent 30%),
            radial-gradient(circle at 68% 75%, rgba(0,0,0,0.08), transparent 36%),
            linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.05)),
            ${color}
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset -8px -10px 14px rgba(0,0,0,0.10),
            0 18px 28px rgba(84, 48, 12, 0.16)
          `,
        }}
      />

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          filter: `url(#${noiseId})`,
          opacity: 0.45,
          mixBlendMode: 'multiply',
          background: 'rgba(255,255,255,0.25)',
        }}
      />
    </div>
  )
}
type PaperCircleProps4 = {
  size?: number
  color?: string
  className?: string
}

export function PaperCircleFiber({
  size = 220,
  color = '#ff7300',
  className = '',
}: PaperCircleProps4) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: 'translate(10px, 14px)',
          background: 'rgba(90, 52, 18, 0.20)',
          filter: 'blur(16px)',
        }}
      />

      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.20), transparent 30%),
            radial-gradient(circle at 68% 75%, rgba(0,0,0,0.08), transparent 36%),
            linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.05)),
            ${color}
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset -8px -10px 14px rgba(0,0,0,0.10),
            0 18px 28px rgba(84, 48, 12, 0.16)
          `,
        }}
      >
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            opacity: 0.18,
            mixBlendMode: 'soft-light',
            backgroundImage: `
              radial-gradient(ellipse 10px 2px at 12% 18%, rgba(255,255,255,0.9), transparent 70%),
              radial-gradient(ellipse 8px 2px at 28% 34%, rgba(255,255,255,0.8), transparent 70%),
              radial-gradient(ellipse 12px 2px at 54% 22%, rgba(255,255,255,0.75), transparent 70%),
              radial-gradient(ellipse 9px 2px at 74% 42%, rgba(255,255,255,0.9), transparent 70%),
              radial-gradient(ellipse 11px 2px at 38% 66%, rgba(255,255,255,0.8), transparent 70%),
              radial-gradient(ellipse 10px 2px at 62% 74%, rgba(255,255,255,0.7), transparent 70%),
              radial-gradient(ellipse 12px 2px at 82% 58%, rgba(255,255,255,0.85), transparent 70%),

              radial-gradient(ellipse 8px 1.5px at 18% 52%, rgba(0,0,0,0.25), transparent 70%),
              radial-gradient(ellipse 10px 1.5px at 44% 14%, rgba(0,0,0,0.18), transparent 70%),
              radial-gradient(ellipse 8px 1.5px at 68% 28%, rgba(0,0,0,0.20), transparent 70%),
              radial-gradient(ellipse 11px 1.5px at 80% 78%, rgba(0,0,0,0.18), transparent 70%)
            `,
          }}
        />
      </div>
    </div>
  )
}
type PaperCircleProps5 = {
  size?: number
  color?: string
  className?: string
}

export function PaperCircleWarmShadow({
  size = 220,
  color = '#ff7300',
  className = '',
}: PaperCircleProps5) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: 'translate(12px, 15px)',
          background: 'rgba(108, 63, 17, 0.26)',
          filter: 'blur(18px)',
        }}
      />

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22), transparent 32%),
            radial-gradient(circle at 70% 75%, rgba(0,0,0,0.08), transparent 38%),
            linear-gradient(145deg, rgba(255,255,255,0.07), rgba(0,0,0,0.05)),
            ${color}
          `,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.22),
            inset -8px -10px 16px rgba(0,0,0,0.10),
            0 18px 30px rgba(124, 74, 24, 0.20),
            0 6px 10px rgba(86, 45, 12, 0.12)
          `,
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          inset: '2px',
          border: '1px solid rgba(90,40,0,0.08)',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.06)',
        }}
      />
    </div>
  )
}

type PaperCirclePremiumProps = {
  size?: number
  color?: string
  className?: string
  shadowStrength?: number
  textureStrength?: number
}

export function PaperCirclePremium({
  size = 220,
  color = '#ff7300',
  className = '',
  shadowStrength = 1,
  textureStrength = 1,
}: PaperCirclePremiumProps) {
  const noiseId = React.useId().replace(/:/g, '')
  const fiberOpacity = 0.16 * textureStrength
  const noiseOpacity = 0.14 * textureStrength

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <filter id={`${noiseId}-paper-noise`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="7"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.045" />
          </feComponentTransfer>
        </filter>
      </svg>

      {/* Warm ambient shadow */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${10 * shadowStrength}px, ${14 * shadowStrength}px)`,
          borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
          background: 'rgba(110, 67, 21, 0.24)',
          filter: `blur(${18 * shadowStrength}px)`,
        }}
      />

      {/* Tighter contact shadow */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${4 * shadowStrength}px, ${6 * shadowStrength}px)`,
          borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
          background: 'rgba(86, 47, 12, 0.12)',
          filter: `blur(${8 * shadowStrength}px)`,
        }}
      />

      {/* Main paper body */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
          background: [
            'radial-gradient(circle at 34% 28%, rgba(255,255,255,0.22), transparent 28%)',
            'radial-gradient(circle at 68% 72%, rgba(0,0,0,0.08), transparent 34%)',
            'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.06))',
            color,
          ].join(', '),
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.22)',
            'inset -10px -12px 18px rgba(0,0,0,0.10)',
            'inset 8px 8px 14px rgba(255,255,255,0.04)',
            '0 18px 28px rgba(124, 74, 24, 0.14)',
          ].join(', '),
        }}
      >
        {/* Surface highlight */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
            background:
              'radial-gradient(circle at 38% 30%, rgba(255,255,255,0.14), transparent 34%)',
            pointerEvents: 'none',
          }}
        />

        {/* Paper fibers */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
            opacity: fiberOpacity,
            mixBlendMode: 'soft-light',
            pointerEvents: 'none',
            backgroundImage: `
              radial-gradient(ellipse 12px 2px at 14% 20%, rgba(255,255,255,0.95), transparent 72%),
              radial-gradient(ellipse 10px 2px at 27% 36%, rgba(255,255,255,0.82), transparent 72%),
              radial-gradient(ellipse 11px 2px at 41% 18%, rgba(255,255,255,0.78), transparent 72%),
              radial-gradient(ellipse 12px 2px at 58% 30%, rgba(255,255,255,0.86), transparent 72%),
              radial-gradient(ellipse 10px 2px at 74% 18%, rgba(255,255,255,0.82), transparent 72%),
              radial-gradient(ellipse 12px 2px at 80% 42%, rgba(255,255,255,0.90), transparent 72%),
              radial-gradient(ellipse 10px 2px at 34% 60%, rgba(255,255,255,0.72), transparent 72%),
              radial-gradient(ellipse 12px 2px at 56% 70%, rgba(255,255,255,0.84), transparent 72%),
              radial-gradient(ellipse 10px 2px at 72% 62%, rgba(255,255,255,0.76), transparent 72%),

              radial-gradient(ellipse 9px 1.5px at 20% 52%, rgba(0,0,0,0.22), transparent 72%),
              radial-gradient(ellipse 10px 1.5px at 46% 12%, rgba(0,0,0,0.18), transparent 72%),
              radial-gradient(ellipse 8px 1.5px at 68% 28%, rgba(0,0,0,0.20), transparent 72%),
              radial-gradient(ellipse 11px 1.5px at 84% 72%, rgba(0,0,0,0.16), transparent 72%),
              radial-gradient(ellipse 9px 1.5px at 36% 82%, rgba(0,0,0,0.14), transparent 72%)
            `,
          }}
        />

        {/* Fine grain */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
            filter: `url(#${noiseId}-paper-noise)`,
            opacity: noiseOpacity,
            mixBlendMode: 'multiply',
            background: 'rgba(255,255,255,0.35)',
            pointerEvents: 'none',
          }}
        />

        {/* Inner edge definition */}
        <div
          className="absolute"
          style={{
            inset: '2px',
            borderRadius: '47% 53% 50% 50% / 49% 47% 53% 51%',
            border: '1px solid rgba(92,44,4,0.08)',
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.05)',
            pointerEvents: 'none',
          }}
        />

        {/* Outer rim, slightly imperfect */}
        <div
          className="absolute"
          style={{
            inset: '0px',
            borderRadius: '48% 52% 49% 51% / 50% 48% 52% 50%',
            boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.06)',
            outline: '1px solid rgba(120, 63, 16, 0.04)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

type PaperSunProps = {
  size?: number
  color?: string
  className?: string
  shadowStrength?: number
  textureStrength?: number
  glowStrength?: number
}

export function PaperSun({
  size = 320,
  color = '#f97316',
  className = '',
  shadowStrength = 1,
  textureStrength = 0.9,
  glowStrength = 1,
}: PaperSunProps) {
  const noiseId = React.useId().replace(/:/g, '')

  const clampedShadow = clamp(shadowStrength, 0.5, 1.6)
  const clampedTexture = clamp(textureStrength, 0, 1.5)
  const clampedGlow = clamp(glowStrength, 0, 1.8)

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <filter id={`${noiseId}-sun-noise`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="2"
            seed="8"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.04" />
          </feComponentTransfer>
        </filter>
      </svg>

      {/* Ambient glow behind sun */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${8 * clampedShadow}px, ${14 * clampedShadow}px) scale(${1 + 0.03 * clampedGlow})`,
          borderRadius: '50%',
          background: 'rgba(255, 152, 64, 0.14)',
          filter: `blur(${34 * clampedGlow}px)`,
        }}
      />

      {/* Warm paper shadow */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${14 * clampedShadow}px, ${20 * clampedShadow}px)`,
          borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
          background: 'rgba(117, 67, 18, 0.20)',
          filter: `blur(${26 * clampedShadow}px)`,
        }}
      />

      {/* Contact depth shadow */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${6 * clampedShadow}px, ${8 * clampedShadow}px)`,
          borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
          background: 'rgba(91, 49, 10, 0.10)',
          filter: `blur(${10 * clampedShadow}px)`,
        }}
      />

      {/* Main body */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
          background: [
            'radial-gradient(circle at 34% 28%, rgba(255,255,255,0.24), transparent 26%)',
            'radial-gradient(circle at 68% 70%, rgba(0,0,0,0.08), transparent 34%)',
            'radial-gradient(circle at 50% 50%, rgba(255,190,120,0.10), transparent 58%)',
            'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.05))',
            color,
          ].join(', '),
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.20)',
            'inset -12px -14px 22px rgba(0,0,0,0.09)',
            'inset 10px 10px 18px rgba(255,255,255,0.04)',
            '0 24px 42px rgba(124, 74, 24, 0.12)',
          ].join(', '),
        }}
      >
        {/* Soft light sweep */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
            background:
              'radial-gradient(circle at 38% 30%, rgba(255,255,255,0.12), transparent 34%)',
            pointerEvents: 'none',
          }}
        />

        {/* Paper fibers, gentler than standard circle */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
            opacity: 0.11 * clampedTexture,
            mixBlendMode: 'soft-light',
            pointerEvents: 'none',
            backgroundImage: `
              radial-gradient(ellipse 13px 2px at 14% 20%, rgba(255,255,255,0.95), transparent 72%),
              radial-gradient(ellipse 11px 2px at 28% 38%, rgba(255,255,255,0.82), transparent 72%),
              radial-gradient(ellipse 12px 2px at 44% 18%, rgba(255,255,255,0.80), transparent 72%),
              radial-gradient(ellipse 13px 2px at 62% 28%, rgba(255,255,255,0.84), transparent 72%),
              radial-gradient(ellipse 11px 2px at 76% 20%, rgba(255,255,255,0.80), transparent 72%),
              radial-gradient(ellipse 12px 2px at 82% 46%, rgba(255,255,255,0.88), transparent 72%),
              radial-gradient(ellipse 11px 2px at 34% 62%, rgba(255,255,255,0.74), transparent 72%),
              radial-gradient(ellipse 12px 2px at 58% 74%, rgba(255,255,255,0.82), transparent 72%),

              radial-gradient(ellipse 9px 1.5px at 20% 54%, rgba(0,0,0,0.18), transparent 72%),
              radial-gradient(ellipse 10px 1.5px at 48% 14%, rgba(0,0,0,0.14), transparent 72%),
              radial-gradient(ellipse 8px 1.5px at 68% 30%, rgba(0,0,0,0.16), transparent 72%),
              radial-gradient(ellipse 10px 1.5px at 84% 72%, rgba(0,0,0,0.12), transparent 72%)
            `,
          }}
        />

        {/* Fine grain */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: '49% 51% 50% 50% / 50% 49% 51% 50%',
            filter: `url(#${noiseId}-sun-noise)`,
            opacity: 0.11 * clampedTexture,
            mixBlendMode: 'multiply',
            background: 'rgba(255,255,255,0.32)',
            pointerEvents: 'none',
          }}
        />

        {/* Edge softness */}
        <div
          className="absolute"
          style={{
            inset: '2px',
            borderRadius: '48.5% 51.5% 50% 50% / 49.5% 48.5% 51.5% 50.5%',
            border: '1px solid rgba(120, 63, 16, 0.05)',
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.04)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}
