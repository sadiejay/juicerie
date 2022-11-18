// import juice class
import Juice from './JuiceClass.js';

// import images

const glow = new Juice('Glow with your Gut');
glow.addNewHealthAreas('Gut');
glow.editRecipeItems({
  celery: '1 head',
  cucumber: '1',
  kale: '1 handful',
  ginger: '1 small thumb',
  orange: '1 peeled, with seeds removed',
});
glow.editHealthBenefits(
  'Glow With Your Gut and enjoy this vibrant, nutrient-packed juice. Celery offers nutrients and compounds which may help protect the entire digestive tract, decrease instances of stomach ulcers, and improve the lining of the stomach. Leafy greens, such as kale, are excellent sources of fiber, as well as nutrients like folate, vitamin C, vitamin K and vitamin A. Leafy greens also contain a specific type of sugar that helps fuel growth of healthy gut bacteria. The oranges in this juice sweeten up the deal as a fruit with less fructose, making them easier to tolerate and less likely to cause gas. Ginger is a star in this show. Gingerol, a natural component of ginger root, benefits gastrointestinal motility ― the rate at which food exits the stomach and continues along the digestive process.'
);
glow.addImage();

const heartbeets = new Juice('The 5 Heartbeets');
heartbeets.addNewHealthAreas('Heart');
heartbeets.editRecipeItems({
  celery: '1 head',
  cucumber: '1',
  beets: '3',
  cranberries: '2 cups',
  grapes: '1 cup',
  tumeric: '1 small piece',
  apples: 'small gree, cored and sliced',
  pepper:
    'black, sprinkled in after juice for better absorption and activiation of the tumeric',
});
heartbeets.editHealthBenefits(
  'Let your heart lead the way with this beautiful juice. Celery has anti-hypertensive properties due to naturally occurring compounds called phthalides. These relax the tissues of the artery walls to increase blood flow and reduce blood pressure. Beets have properties which can lower blood pressure. Cranberry juice is a natural source of polyphenols, which have been shown to help reduce the risk of heart disease. A study has shown red grape juice provides protection from oxidized LDL cholesterol, which can cause hardened arteries.  With its ability to help reduce inflammation and oxidation, turmeric could lower the risk of heart disease. Listen to your heart when it’s telling you to sip on this!'
);

const recipes = [glow, heartbeets];

export default recipes;
