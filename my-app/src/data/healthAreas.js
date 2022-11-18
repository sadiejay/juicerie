// import class
import HealthArea from './HealthAreaClass.js';

// import images
import gut from '../images/gut.jpg';
import heart from '../images/heart.jpg';
import skin from '../images/skin.jpg';

// imports juice recipes to match recipes with health areas
import juices from './recipes.js';

const gutHealth = new HealthArea('Gut', gut);
const heartHealth = new HealthArea('Heart', heart);
const skinHealth = new HealthArea('Skin', skin);
const colonHealth = new HealthArea('Colon', gut);
const brainHealth = new HealthArea('Brain', skin);

const healthAreas = [
  gutHealth,
  heartHealth,
  skinHealth,
  colonHealth,
  brainHealth,
];

healthAreas.forEach((area) => {
  area.juices = area.addJuices(juices);
});

export default healthAreas;
