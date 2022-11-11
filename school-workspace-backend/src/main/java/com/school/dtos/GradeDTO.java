package com.school.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.school.models.SchoolDegreeModel;
import com.school.models.StudentModel;
import com.school.models.SubjectModel;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Getter
@Setter
public class GradeDTO {

    @NotBlank
    private StudentModel student;
    @NotBlank
    private SubjectModel subject;
    @NotBlank
    private SchoolDegreeModel schoolDegree;

    @Size(max = 4)
    private Float firstBimesterGrade;
    @Size(max = 4)
    private Float secondBimesterGrade;
    @Size(max = 4)
    private Float firstSemesterRecoverGrade;
    @Size(max = 4)
    private Float thirdBimesterGrade;
    @Size(max = 4)
    private Float fourthBimesterGrade;
    @Size(max = 4)
    private Float secondSemesterRecoverGrade;
}
