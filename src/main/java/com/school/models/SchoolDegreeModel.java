package com.school.models;

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
public class SchoolDegreeModel {

    @Id
    @Column(name = "cd_serie", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long schoolDegreeCode;

    @Column(name = "ds_serie", nullable = false, length = 45)
    private String schoolDegreeDescription;

    @Column(name = "dt_registro", nullable = false)
    private LocalDate recordDate;

    @Column(name = "dt_atualizacao")
    private LocalDate updateDate;

    //Várias séries pertencem a uma lista de presença
    @ManyToOne
    private AttendanceModel attendance;

    //Uma série tem vários alunos
    @OneToMany
    private List<StudentModel> students;

    //Uma turma possui várias disciplinas
    @ManyToMany(mappedBy = "schoolDegrees")
    private List<SubjectModel> subjectModels;

}
