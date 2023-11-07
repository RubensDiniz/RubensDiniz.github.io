import styled from '@emotion/styled'
import Image from 'next/image'

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  cursor: pointer;
`

interface IconFlipperProps {
  currentTheme?: string
}

export const IconFlipper = styled.div<IconFlipperProps>`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;

  transform-style: preserve-3d;
  --webkit-transform-style: preserve-3d;

  transform: ${({ currentTheme }) => currentTheme === 'dark' ? '0' : 'rotateY(180deg)'};
  transition: transform 1s ease;

  > img {
    opacity: ${({ currentTheme }) => currentTheme ? 1 : 0};
    transition: opacity 1s ease-in;
  }
`

export const ButtonIcon = styled(Image)`
  position: absolute;

  height: 1.5rem;
  width: 1.5rem;

  user-select: none;

  backface-visibility: hidden;
  --webkit-backface-visibility: hidden;
`

export const SunIcon = styled(ButtonIcon)`
  transform: rotateY(180deg);
`

export const MoonIcon = styled(ButtonIcon)``
