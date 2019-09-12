/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

const Link = props => {
  const { link, label } = props
  return (
    <p
      sx={{
        // fontSize: [5],
        fontFamily: 'body',
        fontWeight: 'body'
      }}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          {label}
        </a>
      ) : (
        label
      )}
    </p>
  )
}

Link.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string
}

Link.defaultProps = {
  link: ''
}

const LinkList = props => {
  const { list } = props
  return (
    <div sx={{ color: 'white' }}>
      {list &&
        list.map(({ link, label }) => (
          <Link key={uniqid(label)} label={label} link={link} />
        ))}
    </div>
  )
}

LinkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

LinkList.defaultProps = {
  list: []
}

export default LinkList
