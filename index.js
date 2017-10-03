var katzDeli=[]
function takeANumber(katzDeliLine, newPersonsName)
{
  katzDeliLine.push(newPersonsName)
  return "Welcome, " + newPersonsName + ". You are number "+ katzDeliLine.length + " in line."
}

function nowServing(array)
{
  if(array >0)
{
    var name = array.pop()
    return "Currently serving " + name + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
