import { useGlobalStore } from '../store'

export const setTokenAction = async ({token}: {token: string | null}): Promise<void> => {
  useGlobalStore.setState({token})
}

