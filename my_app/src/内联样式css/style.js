
import styled from 'styled-components'

export const BannerWapper = styled.div.attrs(props=>({
  tcolor: props.color || 'blue'
}
))`
font-size: ${props => props.size}px;
.title{
  color: ${props=> (props.tcolor)};
}
.banner{
  color: blue;
  .item{
    color: yellow;
  }
}
`