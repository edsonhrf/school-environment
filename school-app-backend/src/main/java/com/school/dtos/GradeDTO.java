package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
@Getter
@Setter
public class GradeDTO {

    @Max(10)
    private Float firstBimesterGrade;

    @Max(10)
    private Float secondBimesterGrade;

    @Max(10)
    private Float firstSemesterRecoverGrade;

    @Max(10)
    private Float thirdBimesterGrade;

    @Max(10)
    private Float fourthBimesterGrade;

    @Max(10)
    private Float secondSemesterRecoverGrade;

}
