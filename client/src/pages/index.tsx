import type { NextPage } from 'next'
import { Template } from '@/components/templates'
import { useSeo } from '@/lib/seo'
import { Main } from '@/components/parts/Main'
import { NavBar } from '@/components/parts/NavBar'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <NavBar />
      <Main />
    </Template>
  )
}

export default Index
