package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class SchoolDegreeDTO {

    @Size(max = 45)
    private String schoolDegreeDescription;

    private LocalDate recordDate;

    //Data de atualização será gerada automaticamente
}
