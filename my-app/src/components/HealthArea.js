import { useParams, Link, Outlet } from 'react-router-dom';
import healthAreas from '../data/healthAreas.js';
import Juice from './Juice.js';


/*
This component renders when a user clicks on one of the health area components on the home page. It should
- TODO: render a Juice component (Juice.js) for each of the juices in the healthArea's `juice` array
*/
function HealthArea() {
  const { healthArea } = useParams();
  console.log(healthArea);
  console.log(healthAreas);
  // TODO: Update this to create a Juice component for each of the juices in the area's juice's array
  const juiceRecipes = [];
  healthAreas.forEach((area) => {
    console.log(area);
    if (area.area === healthArea) {
      area.juices.forEach((juice) => {
         const path = '/juices/' + juice.juiceNames;
         juiceRecipes.push(
           <li key={juice.juiceName}>
             <Link to={path}>
               <Juice details={juice}
               />
             </Link>
           </li>
           );
          }
       )
    }

  });



  console.log(juiceRecipes);
  return (
    <section>
      <p>you clicked the {healthArea} Health area</p>
      {/* placeholder for Juice */}
      <ul>
        {juiceRecipes}
      </ul>
      <Outlet />
    </section>
  );
}

export default HealthArea;
