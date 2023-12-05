import { render as originalRender, RenderOptions } from '@testing-library/react'
import { Providers } from './providers'

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return originalRender(ui, { wrapper: Providers, ...options })
}
