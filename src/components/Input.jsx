/* eslint-disable react/prop-types */
import * as S from '../styles/styles'

export const Input = (props) => {
    return (
        <div>
            <S.Input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}