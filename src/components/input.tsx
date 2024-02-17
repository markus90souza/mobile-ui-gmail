import { FC, ReactNode } from 'react'
import { colors } from '@/styles/colors'
import { TextInput, TextInputProps, View } from 'react-native'

type InputProps = { children: ReactNode }

const Input: FC<InputProps> = ({ children }) => {
  return (
    <View className="w-full gap-4 items-center flex-row p-4 h-14 rounded-md bg-gray-900">
      {children}
    </View>
  )
}

type InputFieldProps = TextInputProps

const InputField: FC<InputFieldProps> = (props) => {
  return (
    <TextInput
      cursorColor={colors.blue['600']}
      placeholderTextColor={colors.gray['400']}
      className="flex-1 text-base font-normal text-white"
      {...props}
    />
  )
}

Input.Field = InputField

export { Input }
