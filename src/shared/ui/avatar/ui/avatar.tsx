import clsx from 'clsx'

interface IAvatarProps {
  src: Nullable<string>
  name: Maybe<string>
  className?: string
}

export const Avatar = ({ src, name, className }: IAvatarProps) => {
  return (
    <div className={clsx('w-12 h-12', className)}>
      <img
        className="w-full h-full object-cover rounded-full"
        src={src ?? '/assets/img/avatar-abstract.jpg'}
        alt={name ?? 'Avatar'}
        width={32}
        height={32}
      />
    </div>
  )
}
