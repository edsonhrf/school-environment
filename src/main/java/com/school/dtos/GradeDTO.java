package com.school.dtos;

import javax.validation.constraints.Size;

public class GradeDTO {

    @Size(max = 4)
    private Float firstBimesterGrade;
    @Size(max = 4)
    private Float secondBimesterGrade;
    @Size(max = 4)
    private Float firstSemesterRecoverGrade;
    @Size(max = 4)
    private Float thirdBimesterGrade;
    @Size(max = 4)
    private Float fourthBimester;
    @Size(max = 4)
    private Float secondSemesterRecoverGrade;
}
