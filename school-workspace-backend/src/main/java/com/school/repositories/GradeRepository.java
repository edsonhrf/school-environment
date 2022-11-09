package com.school.repositories;

import com.school.models.GradeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GradeRepository extends JpaRepository<GradeModel, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM nota where cd_aluno = (:studentCode) and cd_serie = (:schoolDegreeCode) and cd_disciplina = (:subjectCode)")
    Optional<GradeModel> findGradesByStudentAndSubjectAndSchoolDegree(@Param("studentCode") Long studentCode,
                                                                             @Param("schoolDegreeCode") Long schoolDegreeCode,
                                                                             @Param("subjectCode") Long subjectCode);

}
