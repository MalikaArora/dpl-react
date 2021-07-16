import Progress from './Progress';
export default {
    title: 'Progress Bar',
    argTypes: {
      variant: {control: 'text'}
  }
}

export const ShowProgress = (props) => {
    return <>
		<h1>Progress Bar - Different Sizes & Progress</h1>
		<Progress color='#e55353' done="70" height='30'/>
        <Progress color='#e55353' done="20" height='15'/>

        <h1>Progress Bar - Different Shades</h1>
        <Progress color='#e55353' done="80" height='20'/>
        <Progress color='#2eb85c' done="80" height='20'/>
        <Progress color='#f9b115' done="80" height='20'/>
        <Progress color='#ced2d8' done="80" height='20'/>
        <Progress color='#3399ff' done="80" height='20'/>

        <h1>Progress Bar - Dynamic Gradient</h1>
        <Progress color='#e55353' done="70" height='20' gradient={true}/>
        <h1>   -</h1>

	</>
}

ShowProgress.storyName='Linear Progress Bar';
