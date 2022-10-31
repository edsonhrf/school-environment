package com.school.dtos;

import javax.validation.constraints.Size;

public class PositionDTO {

    @Size(max = 45)
    private String positionName;
}
