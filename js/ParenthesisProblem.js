module.exports = function(input)
{
  let arr = [];
  for( let i of input)
  {
    if( i === '{')
    {
      arr.push(i);
    }
    else{
      if(arr.length === 0 ){
        return false;
      }
      else arr.pop(i);
    }
  }
    return arr.length === 0;


}
