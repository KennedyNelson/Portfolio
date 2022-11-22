import { Experience } from '../typings'

export const fetchExperiences = async() => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(`${dev ? 'http://localhost:3000' : 'https://myportfolio-ecru-nu.vercel.app/'}/api/getExperience`);


    const data = await res.json()
    const experiences: Experience[] = data.experience;

    return experiences;
}