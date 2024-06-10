import type { FC } from "react"

import { CloseIcon } from "../../1_atoms/icons/CloseIcon"
import { Surface } from "../../1_atoms/surface/Surface"
import { Button } from "../../2_molecules/button/Button"

import { Text } from "../../1_atoms/text/Text"
import styles from './ActionsHeader.module.scss'

interface Props {
  title?: string
  close?: () => void
}

export const ActionsHeader: FC<Props> = ({close, title = ''}) => {
  return (
    <Surface className={styles.headerContainer}>
      <Text type="sectionHeading">{title}</Text>
      {close && (
        <Button aria-label="close" onClick={close}>
          <CloseIcon className={styles.actionIcon} />
        </Button>
      )} 
    </Surface>
  )
}