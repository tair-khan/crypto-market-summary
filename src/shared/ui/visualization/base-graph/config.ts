import type { NumberString } from '@/shared/api'
import { Mime } from '@/shared/config'

export type DrawGraphInit = {
  color: string;
  width: number;
  height: number;
  data: number[];
}

export const initData = (data: NumberString[]) => {
  return data
    .map(value => Number.parseFloat(value))
    .filter(value => !isNaN(value))
}

export const drawGraph = (config: DrawGraphInit) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas?.getContext('2d')
  const data = config.data

  if (!ctx || !data.length) return ''

  const max = Math.max(...data)
  const min = Math.min(...data)
  if (max === min) return ''

  canvas.width = config.width
  canvas.height = config.height

  const padding = 1
  const graphWidth = canvas.width - padding * 2
  const graphHeight = canvas.height - padding * 2

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  data.forEach((price, index) => {
    const x = padding + (index / (data.length - 1)) * graphWidth
    const y = canvas.height - padding - (price - min) / (max - min) * graphHeight
    ctx.lineTo(x, y)
  })

  ctx.strokeStyle = config.color
  ctx.lineWidth = 1.3
  ctx.stroke()

  return canvas.toDataURL(Mime.Png)
}
