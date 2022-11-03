package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class SchoolDegreeDTO {

    @NotBlank
    @Size(max = 45)
    private String schoolDegreeDescription;

    //Data de registro será gerada automaticamente

    //Data de atualização será gerada automaticamente
}
