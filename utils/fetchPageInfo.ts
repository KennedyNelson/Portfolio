import { PageInfo } from '../typings'

export const fetchPageInfo = async() => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(`${dev ? 'http://localhost:3000' : 'https://myportfolio-ecru-nu.vercel.app/'}/api/getPageInfo`);

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}