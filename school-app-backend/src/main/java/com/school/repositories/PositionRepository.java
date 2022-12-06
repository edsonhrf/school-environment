package com.school.repositories;

import com.school.models.AttendanceModel;
import com.school.models.PositionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends JpaRepository<PositionModel, Long> {
}
