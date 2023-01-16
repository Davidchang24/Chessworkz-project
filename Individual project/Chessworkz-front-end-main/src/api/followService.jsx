export const getAllFollowsByEmail = async (email) => {
    const data = await fetch("https://follow-service.azurewebsites.net/follow/all/"+ email)
    const json = await data.json()
    console.log(json)
    return json
}