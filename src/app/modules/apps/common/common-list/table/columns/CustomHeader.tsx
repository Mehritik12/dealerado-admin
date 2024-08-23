import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { HeaderProps } from 'react-table'

type Props = {
  className?: string
  title?: string
  tableProps: PropsWithChildren<HeaderProps<any>>
}
const UserCustomHeader: FC<Props> = ({ className, title, tableProps }) => {
  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,
      )}
      style={{ cursor: 'pointer' }}
    >
      {title}
    </th>
  )
}

export { UserCustomHeader }
