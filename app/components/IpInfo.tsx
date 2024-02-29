type IpInfoProps = {
  title: string,
  value: string
}

export const IpInfo = ({title, value}: IpInfoProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span aria-label={'key'} className="text-sm">{title}</span>
      <span aria-label={'value'} className="text-xl">{value}</span>
    </div>
  )
}