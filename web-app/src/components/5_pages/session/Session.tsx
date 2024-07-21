import { Text } from "@/components/1_atoms/text/Text"
import { SessionCard } from "@/components/3_organisms/sessionCard/SessionCard"
import { useQueryGetSessionById } from "@/hooks/queries/useQueryGetSessionById"
import { router } from "@/router"
import { useParams } from "react-router-dom"
import styles from './Session.module.scss'

export const Session = () => {
    const { sessionId } = useParams<{ sessionId: string }>()

    const session = useQueryGetSessionById(sessionId ?? '')

    if(!sessionId) {
        router.navigate('/sessions')
        return null
    }

    return (
        <div className={styles.sessionPageContainer}>
            <Text type="pageHeading">{session.data?.title ?? 'Title'}</Text>
            {session.isLoading || session.data == null ? <div>...</div> : <SessionCard session={session.data} />}
        </div>
    )
}