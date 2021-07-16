import RadialProgress  from './RadialProgress';
import './Progress.css';
export default {
    title: 'Progress Bar',
}
export const ShowRadialProgress  = () => {
    return <>
    		<h1>Progress Bar - Different Sizes</h1>
            <RadialProgress className={RadialProgress}  strokeWidth={4} percentage={90} color='#1c1b1b'/>

            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={90} color='#1c1b1b'/>
            <RadialProgress className={RadialProgress}  strokeWidth={12} percentage={90} color='#1c1b1b'/>

            <h1>Progress Bar - Different Shades</h1>
            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={60} color='#e55353'/>
     <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={70} color='#2eb85c'/>
     <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={80} color='#f9b115'/>
     <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={90} color='#1c1b1b'/>
     <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={100} color='#3399ff'/>
            <h1>Progress Bar - Different Progress</h1>

            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={20} color='#1c1b1b'/>
            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={40} color='#1c1b1b'/>
            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={60} color='#1c1b1b'/>
            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={80} color='#1c1b1b'/>
            <RadialProgress className={RadialProgress}  strokeWidth={8} percentage={100} color='#1c1b1b'/>


     </>
}
ShowRadialProgress  .storyName='Radial Progress Bar';
