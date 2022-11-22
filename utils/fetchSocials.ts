import { Social } from '../typings'

export const fetchSocials = async() => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(`${dev ? 'http://localhost:3000' : 'https://myportfolio-ecru-nu.vercel.app/'}/api/getSocials`);


    const data = await res.json()
    const socials: Social[] = data.socials;

    return socials;
}