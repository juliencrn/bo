/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Flex } from 'rebass'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Container from '../components/container'
import PackTitle from '../components/pack/packTitle'
import Button from '../components/button'
import Section from '../components/section'
import { packPT } from '../utils/propTypes'

function PackSingle({ body, frontmatter, isXL }) {
  const { title, color, bgColor, numero } = frontmatter
  const cols = [4 / 12, 5 / 12, 3 / 12].map(el => `${el * 100}%`)
  const colWidth = index => cols[index - 1]

  return (
    <Section as={Flex} bg={bgColor} color="white" fullScreen padding={false}>
      <Container my="auto">
        <Flex
          sx={{
            py: 3,
            flexDirection: isXL ? `row` : `column`,
            mx: -3
          }}
        >
          <Box
            sx={{
              p: 3,
              pt: [3, 6],
              textAlign: 'left',
              width: [`100%`, `100%`, colWidth(1)]
            }}
          >
            <PackTitle
              color={color}
              pack={`pack ${numero}`}
              title={title}
              isXL={isXL}
            />
          </Box>
          <Box sx={{ p: 3, width: [`100%`, `100%`, colWidth(2)] }}>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
          <Flex
            sx={{
              p: 3,
              pb: [3, 6],
              alignItems: 'flex-end',
              justifyContent: 'center',
              width: [`100%`, `100%`, colWidth(3)]
            }}
          >
            <Button>Bouton</Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

PackSingle.propTypes = {
  ...packPT.frontmatter,
  ...packPT.body,
  isXL: PropTypes.bool.isRequired
}

export default PackSingle
