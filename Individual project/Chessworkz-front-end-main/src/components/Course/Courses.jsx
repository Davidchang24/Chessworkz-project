import React, { useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { getAllCourses } from '../../api/courseService'
import {Course} from './Course'

function Courses() {
  const [courses, setCourses] = useState([])


    useEffect(() => {
        const api = async () => {
          setCourses(await getAllCourses())
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
                            courseId={course.courseId}
                            courseName={course.courseName}
                            courseDescription={course.courseDescription}/>
                    );
                })}
                </Row>
          </Container>
        </div>
  )
}

export default Courses