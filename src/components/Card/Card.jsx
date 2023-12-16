/* eslint-disable react/prop-types */
import * as S from "./Style";

import imageIconCard from '../../assets/images/icon.png'

export const Card = (props) => {
  return (
    <S.ContainerMain>
      <img src={imageIconCard} alt="icone" />
      <S.ContainerTexts>
      <h2>{props.studentName}</h2>
      <p>{props.description}</p>
      </S.ContainerTexts>
    </S.ContainerMain>
  );
};
