import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import styles from './Surface.module.scss'
import { Surface } from './Surface'

describe('Surface', () => {
  test('Should render children', () => {
    render(<Surface><div data-testid='content'/></Surface>)
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  test('Should render with default background', () => {
    render(<Surface data-testid='content'><div /></Surface>)
    expect(screen.getByTestId('content')).toHaveClass(styles.default)
  })

  test('Should use background prop', () => {
    render(<Surface background='primary' data-testid='content'><div /></Surface>)
    expect(screen.getByTestId('content')).toHaveClass(styles.primary)
  })

  test('Should accept div props', () => {
    render(<Surface data-testid='content' id='surface'><div /></Surface>)
    expect(screen.getByTestId('content')).toHaveAttribute('id', 'surface')
  })
})
