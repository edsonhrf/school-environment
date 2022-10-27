package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "funcionario", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Employee {

    @Id
    @Column(name = "cd_funcionario", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long employeeCode;

    @Column(name = "nr_matricula", length = 11, nullable = false)
    private Integer enrollmentNumber;

    @Column(name = "dt_matricula", nullable = false)
    private LocalDate enrollmentDate;

    //Recebe como chave estrangeira o código do cargo

    //Recebe como chave estrangeira o código da pessoa física

}
