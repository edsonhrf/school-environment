package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class AttendanceDTO {

    @NotBlank
    private LocalDate attendanceDate;

    @Size(max = 45)
    private String reasonDescription;

    @NotBlank
    private Long studentCode;

    @NotBlank
    private Long schoolDegreeCode;

    @NotBlank
    private Long subjectCode;

}
