import {useState} from 'react'
import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setIsLock] = useState(true)
  const lockImg = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const lockText = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const lockBtnTxt = isLock ? 'Unlock' : 'Lock'
  const altText = isLock ? 'lock' : 'Unlock'
  const onClickButton = () => setIsLock(prevState => !prevState)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={lockImg} alt={altText} />
        <Text>{lockText}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {lockBtnTxt}
      </Button>
    </UnlockLockContainer>
  )
}
export default Unlock
