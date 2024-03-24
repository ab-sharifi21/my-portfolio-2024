import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'P2P - Marketplace',
    description:
      'Buying and selling platform for second hand video games, consoles, accessories and PCs. The users can search for products by their category, price, name and location. It allows users to sing up for achieving complete access so that they can add and buy products...',
    github: 'https://github.com/ab-sharifi21/Player2Player-Marketplace',
    url: 'https://www.youtube.com/watch?v=J51EmE-M_NM&t=18s',
    tools: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'React', 'SQL'],
  },
  {
    id: 2,
    name: 'Weather App',
    description:
      'It is a responsive weather app that allows you acess hourly weather forcasts and predictions for the upcoming five days by either enterring your preffered city name of utilizing your current location...',
    github: 'https://github.com/ab-sharifi21/weather-app-react-spa',
    url: 'https://weather-app-react-spa.netlify.app',
    tools: ['HTML', 'Tailwind', 'TypeScript', 'React'],
  },
];
