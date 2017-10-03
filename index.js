var katzDeli=[]
function takeANumber(katzDeliLine, newPersonsName)
{
  katzDeliLine.push(newPersonsName)
  return "Welcome, " + newPersonsName + ". You are number "+ katzDeliLine.length + " in line."
}

function nowServing(array)
{
  if(array >0)
  array.pop()
  else {
    return "There is nobody waiting to be served!"
  }
}