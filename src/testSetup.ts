import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(cleanup)

afterEach(() => {
  vi.clearAllMocks()
  vi.resetAllMocks()
})
