import { cn } from '@/utils/cn'
import { FC } from 'react'
import { Image, ImageProps } from 'react-native'

type AvatarProps = ImageProps & {
  size?: 'sm' | 'md'
}

export const Avatar: FC<AvatarProps> = ({ size = 'md', ...rest }) => {
  return (
    <Image
      alt=""
      className={cn('rounded-full', {
        'w-8 h-8': size === 'sm',
        'w-10 h-10': size === 'md',
      })}
      {...rest}
    />
  )
}
