import { CSSProperties } from 'react'

export interface DomProps {
  id?: string
  className?: string
  style?: CSSProperties
  title?: string
}

type ClassValue =
  | string
  | number
  | { [className: string]: unknown }
  | ClassArray[]
  | undefined
  | null
  | boolean
interface ClassArray extends Array<ClassValue> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DomProps {
  export function extract(
    { className, id, style, title }: Readonly<DomProps>,
    ...additionalClassName: ReadonlyArray<Readonly<ClassValue>>
  ) {
    return {
      className: [className, ...additionalClassName].join(' '),
      id,
      style,
      title
    }
  }
}
