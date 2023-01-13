export function isStrValidTest(val: string | undefined) {
  let bool: boolean = true;
  const value: string[] | undefined = val?.split('');

  if(value === undefined) {
    return false
  }
  try {
    for (const element of value) {
      if(element.toUpperCase() === element.toLowerCase() && element !== ' ') {
        return bool = false;
      }
    }
    return bool;
  } catch (error) {
    return false
  }
  }