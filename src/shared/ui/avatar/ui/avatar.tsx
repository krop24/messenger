interface IAvatarProps {
  src: Nullable<string>
  name: Maybe<string>
}

export const Avatar = ({ src, name }: IAvatarProps) => {
  return (
    <div className="w-12 h-12">
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
