package com.school.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "aluno", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentModel {

    @Id
    @Column(name = "cd_aluno", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentCode;

    @Column(name = "dt_matricula", length = 45, nullable = false)
    private LocalDate enrollmentDate;

    @Column(name = "nr_matricula", length = 11, nullable = false)
    private Integer enrollmentNumber;

    //Um aluno possui um código de pessoa física
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cd_pessoa_fisica")
    private PhysicalPersonModel physicalPerson;

    //Vários alunos estão em uma turma/série
    @ManyToOne
    private SchoolDegreeModel schoolDegree;

    //Vários alunos estão em uma lista de presença/falta
    @ManyToOne
    private AttendanceModel attendance;

    //Um aluno possui várias notas
    @OneToMany
    private List<GradeModel> grades;

}
