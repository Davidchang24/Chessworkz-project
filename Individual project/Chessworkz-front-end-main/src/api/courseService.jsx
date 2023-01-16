export const getAllCourses = async () => {
    const data = await fetch('https://chessworkz-service.azurewebsites.net/course/all')
    const json = await data.json()
    return json
}
