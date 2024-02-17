import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'

type MenuButtonProps = PressableProps

export const MenuButton: FC<MenuButtonProps> = (props) => {
  return (
    <Pressable {...props}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}
