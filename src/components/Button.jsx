/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import * as S from '../styles/styles'

export const ButtonComponent = (props) => {
    return (
        <div>
            <S.Button backgroundColor={props.backgroundColor}>{props.title}</S.Button>
        </div>
    )
}
