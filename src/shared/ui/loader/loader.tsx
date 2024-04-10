import './loader.scss'

interface ILoaderProps {
  loading: boolean
}

export const Loader = ({ loading }: ILoaderProps) => {
  if (!loading) {
    return <div />
  }

  return (
    <div className="loader__wrapper">
      <div className="loader" />
    </div>
  )
}
