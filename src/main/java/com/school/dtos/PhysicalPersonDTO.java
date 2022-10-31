package com.school.dtos;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class PhysicalPersonDTO {

    @NotBlank
    @Size(max = 45)
    private String physicalPersonName;

    @NotBlank
    @Size(max = 11)
    private Integer rgNumber;

    @NotBlank
    @Size(max = 11)
    private String texpayerIdNumber;

    @NotBlank
    @Size(max = 1)
    private Character gender;

    @NotBlank
    @Size(max = 8)
    private LocalDate birthDate;

    @Size(max = 45)
    private String fatherName;

    @Size(max = 8)
    private LocalDate birthDateFather;

    @Size(max = 45)
    private String motherName;

    @Size(max = 8)
    private LocalDate birthDateMother;

    @Size(max = 45)
    private String addressDescription;

    @Size(max = 10)
    private Integer addressNumber;

    @Size(max = 45)
    private String addressComplement;

    @Size(max = 45)
    private String districtName;

    @Size(max = 45)
    private String cityName;

    @Size(max = 11)
    private Integer zipCodeNumber;

    @NotBlank
    @Size(max = 11)
    private Integer areaCodeNumber;

    @NotBlank
    @Size(max = 11)
    private Integer telephoneNumber;

    @NotBlank
    @Size(max = 45)
    private String email;

    @Size(max = 16)
    private String password;
}
