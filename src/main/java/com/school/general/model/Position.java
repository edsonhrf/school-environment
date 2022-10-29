package com.school.general.model;

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
public class Position {

    @Id
    @Column(name = "cd_cargo", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long positionCode;

    @Column(name = "ds_cargo", length = 45)
    private String positionName;

    //Um cargo tem vários funcionários
    @OneToMany
    private List<Employee> employees;
}
