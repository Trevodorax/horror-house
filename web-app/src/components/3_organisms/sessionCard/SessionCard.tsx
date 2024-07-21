import { Text } from "@/components/1_atoms/text/Text"
import { Card } from "@/components/2_molecules/card/Card"
import { Session } from "@/types/Session"
import { FC } from "react"
import { ActionsHeader } from "../actionsHeader/ActionsHeader"
import { useMutationDeleteSession } from "@/hooks/queries/useMutationDeleteSession"
import styles from './SessionCard.module.scss'

interface Props {
    session: Session
}

export const SessionCard: FC<Props> = ({session}) => {
    const {mutate: deleteSession} = useMutationDeleteSession()
    
    const onRemove = () => {
        deleteSession(session.id)
    }

    return (
        <Card className={styles.card}>
            <ActionsHeader title={session.title} remove={onRemove} />
            <div className={styles.sessionCardContent}>
                <div>
                    <Text type="subSectionHeading">{session.theme}</Text>
                    <hr />
                    <Text>{session.description}</Text>
                </div>
                <div>
                    <Text>{`Minimum ${session.minNbParticipants} participants`}</Text>
                    <Text>{`Lasts ${session.durationMinutes} minutes`}</Text>
                </div>
            </div>
        </Card>
    )
}