var katzDeli=[]
function takeANumber(katzDeliLine, newPersonsName)
{
  katzDeliLine.push(newPersonsName)
  return "Welcome, " + newPersonsName + ". You are number "+ katzDeliLine.length + " in line."
}

function nowServing(array)
{
  if(array.length===0)
  {
    return "There is nobody waiting to be served!"
  }
    var name = array[0]
    return "Currently serving " + name + "."
}
