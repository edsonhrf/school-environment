package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class SubjectDTO {

    @NotBlank
    @Size(max = 45)
    private String subjectName;

}

