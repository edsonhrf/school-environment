package com.school.dtos;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class SchoolDegreeDTO {

    @NotBlank
    @Size(max = 45)
    private String schoolDegreeDescription;

    //Data de registro será gerada automaticamente

    //Data de atualização será gerada automaticamente
}
