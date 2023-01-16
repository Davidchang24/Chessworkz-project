import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { getAllCourses } from '../../api/courseService'
import { getAllFollowsByEmail } from '../../api/followService'
import { Course } from './Course'

function MyCourses() {
  const [courses, setCourses] = useState([])
  const [follows, setFollows] = useState([])


  useEffect(() => {
    const api = async () => {
      setCourses(await getAllCourses())
      setFollows(await getAllFollowsByEmail(sessionStorage.getItem("email")))
      console.log(follows)
    }
    api()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {courses.map((course) => {
            return (

              <Course
                courseId={course.id}
                courseName={course.courseName}
                courseDescription={course.courseDescription} />
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default MyCourses