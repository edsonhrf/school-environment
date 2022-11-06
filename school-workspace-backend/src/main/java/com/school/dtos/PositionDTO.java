package com.school.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class PositionDTO {

    @Size(max = 45)
    private String positionName;
}
