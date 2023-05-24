import React from 'react'
import { styled } from 'styled-components'

const StyledButton = styled.button`
    border: none;
    padding: 5px 12px;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #fff;
    cursor: pointer;
`
                                        // {...rest} 나머지 내용 남은 내용 묶기
export default function Button({children, ...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )            // {...rest} 전부 풀어서 
}
// Button에 color값을 기본 값으로 지정
Button.defaultProps = {
    color : "#ff6fdb"
}