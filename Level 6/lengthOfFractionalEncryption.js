function decrypt(message, key)
{
const regEx = /((?<=p)\d+).((?<=\[)(?:\d+-?)*)/
const padded = Number(key.match(regEx)[1])
const indexes = key.match(regEx)[2].split("-").map(num =>Number(num) - 1)
const lastIndexOfOrigin = (Math.max(...indexes) - padded) + 1
const originMessage = []
if(!key.match(regEx)) return ""

for(let i = 0; i < indexes.length; i++) {
    const index = indexes[i]
    originMessage[i] = message[index]
}

return originMessage.slice(0,lastIndexOfOrigin).join("")
}