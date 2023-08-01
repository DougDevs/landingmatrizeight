import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonLink = ({ to, label, muted, className, external }) => {
  const content = (
    <>
      {label}
      {muted && (
        <>
          <br />
          <span className="muted" style={{ display: 'inline-block' }}>
            {muted}
          </span>
        </>
      )}
    </>
  )
  return external ? (
    <a href={to} className={className}>
      {content}
    </a>
  ) : (
    <Link className={className} to={to}>
      {content}
    </Link>
  )
}
const FilledBtnLink = styled(ButtonLink).attrs(() => ({
  className: 'main-btn btn-filled',
}))``

const BorderBtnLink = styled(ButtonLink).attrs(() => ({
  className: 'main-btn btn-border',
}))``

export { BorderBtnLink, ButtonLink, FilledBtnLink }
