package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class AttendanceDTO {

    @Size(max = 45)
    private String reasonDescription;

    private Long studentCode;

    private Long schoolDegreeCode;

    private Long subjectCode;

}
