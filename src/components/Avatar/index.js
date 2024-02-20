import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4"
        alt="Uma foto minha vestido com o uniforme da Grifinória do Harry Potter"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
