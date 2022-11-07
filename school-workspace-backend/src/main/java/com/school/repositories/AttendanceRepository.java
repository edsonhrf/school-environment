package com.school.repositories;

import com.school.models.AttendanceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<AttendanceModel, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM falta where dt_falta between (:dateTimeStart) and (:dateTimeEnd) and cd_aluno = (:studentCode)")
    public List<AttendanceModel> findAttendancesBetweenDate(@Param("dateTimeStart") LocalDate dateTimeStart,
                                                            @Param("dateTimeEnd") LocalDate dateTimeEnd,
                                                            @Param("studentCode") Long studentCode);

}
