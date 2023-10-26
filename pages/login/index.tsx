import { useSearch } from '@/hooks'
import useAuth from '@/hooks/useAuth'
import axios from 'axios'
import { InputBox, Colors, Button } from 'my-react-component'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`
const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  & > div {
    flex: 1;
  }
`
const LoginPage = () => {
  const { searchText: email, onChangeText: onChangeEmail, emailValidator } = useSearch()
  const { searchText: password, onChangeText: onChangePasswoard, passwordValidator } = useSearch()
  const { setAuth } = useAuth()
  const router = useRouter()
  const onSubmit = async () => {
    const user = {
      email,
      password,
    }
    await axios
      .post('http://localhost:5000/login', user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          const accessToken = response.data.accessToken
          console.log(accessToken)
          setAuth((prev) => ({
            ...prev,
            email,
            accessToken,
          }))
          router.push('/')
        }
      })
  }
  return (
    <Container>
      <InputBox
        type="text"
        placeholder="email"
        searchText={email}
        onChange={onChangeEmail}
        validator={emailValidator}
      />
      <InputBox
        type="password"
        placeholder="password"
        searchText={password}
        onChange={onChangePasswoard}
        validator={passwordValidator}
      />
      <ButtonWrapper>
        <Button color={Colors.white} fontColor={Colors.grey_111} border={Colors.grey_bbb}>
          취소
        </Button>
        <Button color={Colors.main} click={onSubmit}>
          로그인
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

export default LoginPage
