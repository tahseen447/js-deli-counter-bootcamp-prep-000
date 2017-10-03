var katzDeli=[]
function takeANumber(katzDeliLine, newPersonsName)
{
  katzDeliLine.push(newPersonsName)
  return "Welcome, " + newPersonsName + ". You are number "+ katzDeliLine.length + " in line."
}
