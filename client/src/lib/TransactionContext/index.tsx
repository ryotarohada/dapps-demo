import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants/connect'
import { FormData } from '@/types/types'
import { ethers } from 'ethers'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const TransactionContext = createContext({
  connectWallet: () => {},
  sendTransaction: (value: FormData) => {},
})

// スマートコントラクトの取得
const getSmartContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer,
  )
  return transactionContract
}

export const TransactionProvider: React.FC<{ children: ReactNode }> = (
  props,
) => {
  const [currentAccount, setCurrentAccount] = useState('')

  // メタマスクウォレットと連携しているか確認
  const checkMetamaskWalletConnected = async () => {
    if (!window.ethereum) return alert('Metamaskをインストールしてください')

    // メタマスクのアカウントIDを取得
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    console.log('accounts', accounts?.[0])
    setCurrentAccount(accounts[0])
  }

  // メタマスクウォレットと連携する
  const connectWallet = async () => {
    if (!window.ethereum) return alert('Metamaskをインストールしてください')

    // メタマスクを持っていれば接続開始する
    const accounts = window.ethereum.request({ method: 'eth_requestAccounts' })

    console.log('accounts', accounts[0])

    setCurrentAccount(accounts[0])
  }

  // 実際に通貨のやり取りをする
  const sendTransaction = async (value: FormData) => {
    if (!window.ethereum) return alert('Metamaskをインストールしてください')
    console.log('formData', value)

    const transactionContract = getSmartContract()
    const parsedAmount = ethers.utils.parseEther(value.amount)

    const transactionParameters = {
      gas: '0x2710',
      to: value.addressTo,
      from: currentAccount,
      value: parsedAmount._hex,
    }

    console.log(transactionParameters)

    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    })

    const transactionHash = await transactionContract.addToBlockChain(
      value.addressTo,
      parsedAmount,
    )

    console.log('ロード中...', transactionHash.hash)

    await transactionHash.wait()

    console.log('送金に成功しました', transactionHash.hash)
  }

  useEffect(() => {
    checkMetamaskWalletConnected()
  }, [])

  return (
    <TransactionContext.Provider value={{ connectWallet, sendTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  )
}
