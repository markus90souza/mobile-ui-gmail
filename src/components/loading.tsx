import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

export const Loading: FC = () => {
  return (
    <ActivityIndicator className="flex-1 bg-gray-900 justify-center items-center" />
  )
}
