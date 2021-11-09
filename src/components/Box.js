import react from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux";
import {setModal} from "../features/modalSlice";

const Box = () => {
// Get Value from Redux Store
    const dispatch = useDispatch()
    const text = useSelector(state => state.modal.text)
    // Dispatch to Store
    const closeBox = () => {
        dispatch(setModal(false))
    }
    return (
        <Modal>
            <CloseBtn onClick={closeBox}>Close</CloseBtn>
            <div className="flex justify-center justify-items-center">
                <Text>
                    {text}
                </Text>
            </div>
        </Modal>
    )
}
// Styled Components
const Modal = styled.div`
  position: fixed;
  min-width: 40vw;
  min-height: 40vh;
  background: #fff;
  border: 2px solid blue;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 640px) {
    p {
      font-size: 14px;

    }
  }
`
const CloseBtn = styled.button`
  overflow: hidden;
  position: relative;
  border: none;
  padding: 0;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: transparent;
  color: #1da1f2;
  font: inherit;
  text-indent: 100%;
  cursor: pointer;

  &:focus {
    outline: solid 0 transparent;
    box-shadow: 0 0 0 2px #8ed0f9
  }

  &:hover {
    background: rgba(29, 161, 142, .1)
  }

  &:before, &:after {
    position: absolute;
    top: 15%;
    left: calc(50% - .0625em);
    width: .125em;
    height: 70%;
    border-radius: .125em;
    transform: rotate(45deg);
    background: currentcolor;
    content: ''
  }

  &:after {
    transform: rotate(-45deg);
  }
`
const Text = styled.p`
  text-align: center;
  width: 25vw;
`

export default Box