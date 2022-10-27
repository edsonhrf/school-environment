package com.school.teacher.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "professor_disciplina", schema = "heroku_fdafa744b3499e8")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SubjectTeacher {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long subjectTeacherSequenceNumber;

    //Recebe como chave estrangeira o código da disciplina

    //Recebe como chave estrangeira o código da pessoa física

}
