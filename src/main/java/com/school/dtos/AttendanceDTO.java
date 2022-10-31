package com.school.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class AttendanceDTO {

    //Data da falta é gerada automaticamente

    @Size(max = 45)
    private String reasonDescription;
}
