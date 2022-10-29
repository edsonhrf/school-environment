package com.school.general.model;

import com.school.student.model.Student;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "serie", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SchoolDegree {

    @Id
    @Column(name = "cd_serie", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long schoolDegreeCode;

    @Column(name = "ds_serie", nullable = false, length = 45)
    private String schoolDegreeDescription;

    @Column(name = "dt_registro", nullable = false)
    private LocalDate recordDate;

    @Column(name = "dt_atualizacao")
    private LocalDate updateDate;

    //Várias séries pertencem a uma lista de presença
    @ManyToOne
    private Attendance attendance;

    //Uma série tem vários alunos
    @OneToMany
    private List<Student> students;

    //Uma turma possui várias disciplinas
    @ManyToMany(mappedBy = "schoolDegrees")
    private List<Subject> subjects;

}
