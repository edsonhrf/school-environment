package com.school.repositories;

import com.school.models.AttendanceModel;
import com.school.models.SchoolDegreeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolDegreeRepository extends JpaRepository<SchoolDegreeModel, Long> {
}
