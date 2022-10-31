package com.school.dtos;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class SubjectDTO {

    @NotBlank
    @Size(max = 45)
    private String subjectName;

}

