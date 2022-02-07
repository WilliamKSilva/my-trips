import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>Testando</p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
