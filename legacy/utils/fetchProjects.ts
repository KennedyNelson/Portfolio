import { Project } from '../typings'

export const fetchProjects = async() => {
    const dev = process.env.NODE_ENV !== 'production';
    const res = await fetch(`${dev ? 'http://localhost:3000' : 'https://myportfolio-ecru-nu.vercel.app/'}/api/getProjects`);

    const data = await res.json()
    const projects: Project[] = data.projects;

    return projects;
}