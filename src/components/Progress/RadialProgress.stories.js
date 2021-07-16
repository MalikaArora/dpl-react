import RadialProgress from './RadialProgress';

export default {
    title: 'Radial Progress',
}
export const ShowRadialProgress= () => {
    return <>
     <RadialProgress strokeWidth={8} percentage={60} color='#e55353'/>;
     <RadialProgress strokeWidth={8} percentage={70} color='#2eb85c'/>;
     <RadialProgress strokeWidth={8} percentage={80} color='#f9b115'/>;
     <RadialProgress strokeWidth={8} percentage={90} color='#1c1b1b'/>;
     <RadialProgress strokeWidth={8} percentage={100} color='#3399ff'/>;

     <RadialProgress strokeWidth={8} percentage={80} color='#1c1b1b'/>;
     <RadialProgress strokeWidth={12} percentage={80} color='#1c1b1b'/>;

     </>
}