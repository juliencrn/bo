/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const introduction =
  'Aenean eu porta est, vel faucibus tellus. Vestibulum in arcu ultrices, semper velit vel, tempor augue. Nulla vulputate tempus arcu sed mattis. Duis sed tristique magna. Donec accumsan nisi non quam interdum, sit amet dignissim nibh euismod. Duis eu auctor turpis, ac commodo turpis. Mauris non aliquet enim. Sed aliquet neque eget tortor luctus pulvinar. Cras et metus enim. In a erat et odio consectetur ullamcorper a Bengale Studio. Curabitur nec ornare purus. In eget augue in neque dignissim varius sed non ligula.\n' +
  'Fusce in sapien faucibus, congue odio id, iaculis turpis. Nulla facilisi. Sed nec dolor neque. Nunc viverra in diam in tristique. Vivamus efficitur fringilla purus non tincidunt. Nulla fermentum nibh eu nisl imperdiet ultrices. Nam tincidunt pretium felis, et faucibus mauris dignissim eu. Morbi placerat felis posuere justo viverra, id iaculis felis pharetra. Aliquam vulputate nulla id facilisis commodo. Mauris ante mi, venenatis eu tempus non, finibus.'

const BigIntro = ({ text }) => (
  <p
    sx={{
      fontFamily: 'heading',
      fontSize: [6],
      lineHeight: 1,
      fontWeight: 'heading'
    }}
  >
    {text}
  </p>
)

BigIntro.propTypes = {
  text: PropTypes.string
}

BigIntro.defaultProps = {
  text: introduction
}

export default BigIntro
