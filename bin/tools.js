//身份证打码
export const idCardMask =(idCard)=> {
    return idCard.substr(0, 1) + idCard.slice(1, -4).replace(/\d/g, '*') + idCard.substr(-4)
}