/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import { Text, Link as BaseLink, Box } from 'rebass'

const Link = props => {
  const { link, label } = props
  return (
    <Text sx={{ my: 3 }}>
      {link ? (
        <BaseLink
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          {label}
        </BaseLink>
      ) : (
        label
      )}
    </Text>
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
    <Box sx={{ color: 'white' }}>
      {list &&
        list.map(({ link, label }) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link key={uniqid(label)} label={label} link={link} />
        ))}
    </Box>
  )
}

LinkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

LinkList.defaultProps = {
  list: []
}

export default LinkList
