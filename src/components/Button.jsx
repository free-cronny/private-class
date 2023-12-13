/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import * as S from '../styles/styles'

export const ButtonComponent = (props) => {
    return (
        <div>
            <S.Button>{props.title}</S.Button>
        </div>
    )
}
