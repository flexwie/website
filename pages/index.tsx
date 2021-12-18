import type { NextPage } from 'next'
import Link from 'next/link'
import { Hero } from '../components/hero'
import { Project } from '../components/project'

import fs from 'fs'

import pic1 from '../public/me/1.png'
import pic2 from '../public/me/2.png'
import pic3 from '../public/me/3.png'
import path from 'path'
import matter from 'gray-matter'
import { Heading } from '../components/heading'
import { BlogPreview } from '../components/blog_preview'

const getRandomProfilePicture = (): StaticImageData => {
  const index = Math.floor(Math.random() * (4 - 1 + 1) + 1)
  switch (index) {
    case 1:
      return pic1
    case 2:
      return pic2
    case 3:
      return pic3
    default:
      return pic1
  }
}

const projects = [
  {
    name: "OAuth Device Flow",
    readMore: "https://github.com/flexwie/oauth"
  },
  {
    name: "DocSys",
    readMore: "https://github.com/flexwie/docsys"
  }
]

interface HomeProps {
  posts: any
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Hero imageData={getRandomProfilePicture()} header='Welcome' subheader='Nice to have you here! Take a closer look at my projects or read up on my journey with DevOps, the HashiStack and software developement.' />
      <div className='flex flex-col mr-4 ml-4 sm:m-0'>
        <Heading>
          Projects
        </Heading>
        <div className='flex flex-col sm:flex-row'>
          {projects.map((p, i) => <Project key={i} name={p.name} />)}
        </div>
      </div>
      <div className='flex flex-col mr-4 ml-4 sm:m-0'>
        <Heading>
          Blog
        </Heading>
        <div className='flex flex-col sm:flex-row'>
          {posts.map((p: any, i: number) => <Link href={'/blog/' + p.slug} passHref key={i}><div className='w-full'><BlogPreview title={p.frontMatter.title} icon={p.frontMatter.icon} tags={p.frontMatter.tags} /></div></Link>)}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("_posts"))

  const posts = files.map(filename => {
    const mdWithMeta = fs.readFileSync(path.join("_posts", filename))
    const { data: frontMatter } = matter(mdWithMeta)

    return {
      frontMatter,
      slug: filename.split(".")[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home
