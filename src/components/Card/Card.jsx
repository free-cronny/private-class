/* eslint-disable react/prop-types */
import * as S from "./Style";

import imageIconCard from '../../assets/images/icon.png'

export const Card = (props) => {
  return (
    <S.ContainerMain style={{background: props.background}}>
      <img src={imageIconCard} alt="icone" />
      <S.ContainerTexts style={{ color: props.colorTexts}}>
      <h2>{props.studentName}</h2>
      <hr />
      <p>{props.description}</p>
      </S.ContainerTexts>
    </S.ContainerMain>
  );
};
