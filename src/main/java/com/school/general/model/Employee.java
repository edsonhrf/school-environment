package com.school.general.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "funcionario", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
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

    //Um funcionário possui um código de pessoa física
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cd_pessoa_fisica")
    private PhysicalPerson physicalPerson;

    //Professor recebe uma lista de disciplinas
    @ManyToMany(mappedBy = "teachers")
    private List<Subject> subjects;

    //Um funcionário tem um cargo
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cd_cargo")
    private Position position;

}
