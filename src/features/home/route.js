import {
  DefaultPage,
  ListOfProgramming,
  Header,
  HomePage,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: HomePage,
      isIndex: true,
    },
    { path: 'listOfProgramming', name: 'List of programming', component: ListOfProgramming },
    { path: 'header', name: 'Header', component: Header },
    { path: 'homePage', name: 'Home page', component: HomePage },
  ],
};
