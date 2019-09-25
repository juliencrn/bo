/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx } from 'theme-ui'

import PropTypes from 'prop-types'
import Container from '../components/container'
import LinkList from '../components/members/linkList'
import BigText from '../components/bigText'
import Mail from '../components/mail'
import Section from '../components/section'
import { childrenPT } from '../utils/propTypes'

const Col = ({ children, width }) => (
  <Box
    sx={{
      width,
      px: 3,
      py: 4
    }}
  >
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      {children}
    </Flex>
  </Box>
)

Col.propTypes = {
  children: childrenPT.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
}
Col.defaultProps = { width: ['100%', '50%'] }

function MemberSingle({ frontmatter, body }) {
  const {
    bgColor,
    firstname,
    lastname,
    profession,
    skills,
    socialLinks,
    mail,
    color
  } = frontmatter
  return (
    <Section
      bg={bgColor}
      color="white"
      fullScreen
      padding={false}
      sx={{ display: 'flex' }}
    >
      <Container sx={{ margin: `auto` }}>
        <Flex sx={{ mx: -3, flexWrap: 'wrap' }}>
          <Col width={['100%', `${(4 / 12) * 100}%`, '50%']}>
            <Heading
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'body',
                fontFamily: 'body'
              }}
            >{`${firstname} ${lastname}`}</Heading>
            <LinkList list={[{ label: profession, link: '' }, ...skills]} />
          </Col>
          <Col width={['100%', `${(8 / 12) * 100}%`, '50%']}>
            <BigText sx={{ fontSize: 4 }}>
              <MDXRenderer>{body}</MDXRenderer>
            </BigText>
          </Col>
          <Col width={['100%', `${(4 / 12) * 100}%`, '50%']}>
            <LinkList list={socialLinks} />
          </Col>
          <Col width={['100%', `${(8 / 12) * 100}%`, '50%']}>
            <Mail mail={mail} color={color} />
          </Col>
        </Flex>
      </Container>
    </Section>
  )
}

MemberSingle.propTypes = {
  body: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    mail: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    profession: PropTypes.string,
    professionCool: PropTypes.string,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string
      })
    ),
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string
      })
    )
  }).isRequired
}

export default MemberSingle
