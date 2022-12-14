package com.school.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cargo", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PositionModel {

    @Id
    @Column(name = "cd_cargo", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long positionCode;

    @Column(name = "ds_cargo", length = 45)
    private String positionName;

    //Um cargo tem vários funcionários
    @OneToMany
    private List<EmployeeModel> employees;
}
