import { useParams } from 'react-router-dom';
import healthAreas from '../data/healthAreas.js';

/* 
This component renders when a user clicks on one of the health area components on the home page. It should
- TODO: render a Juice component (Juice.js) for each of the juices in the healthArea's `juice` array
*/
function HealthArea() {
  const { healthArea } = useParams();

  // TODO: Update this to create a Juice component for each of the juices in the area's juice's array
  const juiceRecipes = [];
  healthAreas.forEach((area) => {
    if (area.area === healthArea) {
      juiceRecipes.push(area.juices);
    }
  });

  return (
    <section>
      <p>you clicked the {healthArea} Health area</p>
      {/* placeholder for Juice */}
      <p>{JSON.stringify(juiceRecipes)}</p>
    </section>
  );
}

export default HealthArea;
