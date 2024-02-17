import { View } from 'react-native'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'

export default function Home() {
  return (
    <View className="flex-1 bg-slate-900 pt-14 px-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          size="sm"
          source={{ uri: 'https://github.com/markus90souza.png' }}
        />
      </Input>
    </View>
  )
}
