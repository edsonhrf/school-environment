package com.school.repositories;

import com.school.models.AttendanceModel;
import com.school.models.StudentModel;
import com.school.models.SubjectModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Long> {
}
