package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class PhysicalPersonDTO {

    @NotNull
    private String physicalPersonName;

    private String email;

    private Integer areaCodeNumber;

    private Integer telephoneNumber;

    private Character gender;

    @NotNull
    private LocalDate birthDate;

}
