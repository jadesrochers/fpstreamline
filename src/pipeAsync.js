const pipeAsync = (...fns) => x => fns.reduce(async (state, fn) => {
  var curr = fn(await state)
  if(Array.isArray(curr)){ 
    return await Promise.all(curr); 
  }else{ 
    return await curr; 
  } }, global.Promise.resolve(x));

exports.pipeAsync = pipeAsync

