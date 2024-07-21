import { Surface } from "@/components/1_atoms/surface/Surface"
import { FC, ReactNode } from "react"
import styles from './Card.module.scss'
import classNames from "classnames"

interface Props {
    children: ReactNode
    className?: string
}

export const Card: FC<Props> = ({children, className}) => {
    return (
        <Surface className={classNames(styles.cardContainer, className)}>
            {children}
        </Surface>
    )
}