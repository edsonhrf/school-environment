package com.school.student.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "aluno", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Student {

    @Id
    @Column(name = "cd_aluno", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentCode;

    @Column(name = "dt_matricula", length = 45, nullable = false)
    private LocalDate enrollmentDate;

    @Column(name = "nr_matricula", length = 11, nullable = false)
    private Integer enrollmentNumber;

    //Recebe como chave estrangeira o código da pessoa física

    //Recebe como chave estrangeira o código da série

}
