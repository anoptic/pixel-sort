interface ThingsProps {
  thing1: string,
  thing2: string,
}

const things = ({thing1, thing2}: ThingsProps) => {
  // console.log('thing', props);

  const doTheThing = (thing: string) => {
    return thing.replace('thing', 'one');
  }

  const doTheOtherThing = (thing: string) => {
    return thing.replace('thing', 'body');
  }

  const something = doTheThing(thing1);
  const nothing = doTheOtherThing(thing2);
  
  return {something, nothing}
}

export default things;