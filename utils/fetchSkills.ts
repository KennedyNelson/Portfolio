import { Skill } from '../typings'

export const fetchSkills = async() => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(`${dev ? 'http://localhost:3000' : 'https://myportfolio-ecru-nu.vercel.app/'}/api/Skills`);


    const data = await res.json()
    const skills: Skill[] = data.skills;

    return skills;
}