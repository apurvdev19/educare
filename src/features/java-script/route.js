// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  Layout,
  WelcomePage,
} from './';

export default {
  path: 'java-script',
  name: 'Java script',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Welcome page', component: WelcomePage, isIndex: true },
    { path: 'layout', name: 'Layout', component: Layout },
    { path: 'welcomePage', name: 'Welcome page', component: WelcomePage },
  ],
};
