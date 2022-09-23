import { TransactionContext } from '@/lib/TransactionContext'
import { FormData } from '@/types/types'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Main: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const { connectWallet, sendTransaction } = useContext(TransactionContext)
  const submitHandler: SubmitHandler<FormData> = (data) => {
    if (!data.addressTo || !data.amount) {
      console.log('空欄を入力してください')
      return
    }
    sendTransaction(data)
  }
  return (
    <Box>
      <HStack>
        <Box w='50%'>
          <Center>
            <Stack spacing={20}>
              <Button onClick={connectWallet}>Wallet連携</Button>
            </Stack>
          </Center>
        </Box>

        <Box border='1px solid #707070' p={10} w='50%'>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Stack spacing={10}>
              <Input
                {...register('addressTo')}
                type='text'
                placeholder='address'
              />
              <Input
                {...register('amount')}
                type='number'
                placeholder='通貨（ETH）'
                step='0.0001'
              />
              <Button type='submit'>送信</Button>
            </Stack>
          </form>
        </Box>
      </HStack>
    </Box>
  )
}
