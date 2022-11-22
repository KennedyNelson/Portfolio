import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

}

export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Kennedy's Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <Link href="#hero">
              <img className='h-10 w-10 rounded-full filter-grayscale hover:grayscale-0 cursor-pointer' 
                src='https://cdn.sanity.io/images/yg6o9ayc/production/b894e430849b5c97e54d914a90f5e3d06bbabd71-1319x1319.jpg'
                alt=''
              />
            </Link>
          </div>
        </footer>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}