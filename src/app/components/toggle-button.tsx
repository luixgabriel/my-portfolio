import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import { styled } from 'styled-components'

interface ToggleButtonProps {
  toggled: boolean
  onClick: () => void
}

const ToggleButtonContainer = styled.div`
  position: absolute;
  color: white;
  width: 300px;
  height: 30px;
  top: 15px;
  right: -85px;
`
const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  top: 0px;
  right: -8px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #bfd1e2;
    transition: 0.3s;
    border-radius: 30px;
  }
  span:before {
    position: absolute;
    content: '';
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + span {
    background-color: #bfd1e2;
  }

  input:checked + span:before {
    transform: translateX(29px);
  }
`

export function ToggleButton({ toggled, onClick }: ToggleButtonProps) {
  const { isChanged, handleChange } = useChangeLanguage()

  const callback = () => {
    handleChange()
  }
  return (
    <ToggleButtonContainer>
      <span>{isChanged ? 'Change Language' : 'Alterar Linguagem'}</span>
      <ToggleLabel>
        <input type="checkbox" defaultChecked={isChanged} onClick={callback} />
        <span />
      </ToggleLabel>
    </ToggleButtonContainer>
  )
}
