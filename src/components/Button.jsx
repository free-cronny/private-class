/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import * as S from '../styles/styles'

export const ButtonComponent = (props) => {
    return (
        <div>
            <S.Button backgroundHover={props.backgroundHover} marginButton={props.marginButton} paddingButton={props.paddingButton} backgroundColor={props.backgroundColor}>{props.text}</S.Button>
        </div>
    )
}
