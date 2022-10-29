package com.school.general.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "disciplina", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Subject {

    @Id
    @Column(name = "cd_disciplina", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectCode;

    @Column(name = "ds_disciplina", length = 45)
    private String subjectName;

    //Disciplina recebe uma lista de professores/funcionários
    @ManyToMany
    @JoinTable(name = "professor_disciplina",
            joinColumns = @JoinColumn(name = "cd_disciplina"),
            inverseJoinColumns = @JoinColumn(name = "cd_funcionario"))
    private List<Employee> teachers;

    //Uma disciplina possui várias notas
    @OneToMany
    private List<Grade> grades;

    //Uma disciplina tem várias turmas/séries
    @ManyToMany
    @JoinTable(name = "disciplina_serie",
            joinColumns = @JoinColumn(name = "cd_disciplina"),
            inverseJoinColumns = @JoinColumn(name = "cd_serie"))
    private List<SchoolDegree> schoolDegrees;

}
