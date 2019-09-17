/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'

import Item from './menuItem'
import ButtonReset from '../../buttonReset'

const ItemDropdown = ({ label, childs, isXL }) => {
  const [open, setOpen] = useState(!isXL)
  return (
    <span
      sx={{ position: 'relative', display: 'inline-block' }}
      onMouseLeave={() => isXL && setOpen(false)}
      onMouseEnter={() => isXL && setOpen(true)}
    >
      <ButtonReset
        sx={{
          display: 'inline-block',
          width: isXL ? 'auto' : '100%',
          height: `100%`
        }}
        onClick={() => !isXL && setOpen(!open)}
      >
        <Item>{label}</Item>
      </ButtonReset>
      {open && (
        <Box
          sx={{
            width: 'auto',
            position: isXL ? 'absolute' : 'relative',
            ml: isXL ? 0 : 4
          }}
        >
          {childs.map(({ label: text, to }) => (
            <Flex key={uniqid(text)}>
              <Item link={to} child>
                {text}
              </Item>
            </Flex>
          ))}
        </Box>
      )}
    </span>
  )
}

ItemDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  childs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string
    })
  ).isRequired,
  isXL: PropTypes.bool.isRequired
}

export default ItemDropdown
