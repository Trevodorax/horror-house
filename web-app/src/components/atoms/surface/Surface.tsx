import { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import styles from './Surface.module.scss'

type surfaceBackground = 
  'default' | 
  'inversed' | 
  'primary' |
  'secondary' |
  'alert' |
  'success' |
  'warning' |
  'info' |
  'error'

interface Props {
  children: ReactNode
  background?: surfaceBackground
}


export const Surface: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ children, background = 'default', ...props }) => {
  console.log('PONEY', background)
  
  return (
    <div 
      className={classNames(styles.surface, styles[background])}
      {...props}
    >
      {children}
    </div>
  )
}
