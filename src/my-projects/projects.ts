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
    name: 'MovieMix',
    description:
      'Movie web app that taps into The Movie Database (TMDb) API to bring you all the movie info you are looking for. Discover everything from plot summaries and cast details to release dates and ratings, all in one place...',
    github: 'https://github.com/ab-sharifi21/MovieMix',
    url: 'https://mixmovie.netlify.app/',
    tools: ['Next.js', 'HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Framer motion'],
  },
  {
    id: 3,
    name: 'Weather App',
    description:
      'It is a responsive weather app that allows you access hourly weather forecasts and predictions for the upcoming five days by either entering your preffered city name or utilizing your current location...',
    github: 'https://github.com/ab-sharifi21/weather-app-react-spa',
    url: 'https://weather-app-react-spa.netlify.app',
    tools: ['HTML', 'Tailwind', 'TypeScript', 'React'],
  },
  {
    id: 4,
    name: 'To Do App',
    description:
      'This is a simple To do App built with React, TypeScript and TailwindCSS. It allows you to add, edit, remove, and mark tasks as completed or uncompleted...',
    github: 'https://github.com/ab-sharifi21/To-Do-App-React',
    url: 'https://ab-todo-app-react.netlify.app/',
    tools: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React'],
  },
];
