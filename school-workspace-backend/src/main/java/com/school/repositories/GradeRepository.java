package com.school.repositories;

import com.school.models.AttendanceModel;
import com.school.models.GradeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<GradeModel, Long> {
}
