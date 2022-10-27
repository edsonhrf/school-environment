package com.school.general.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "disciplina", schema = "heroku_fdafa744b3499e8")
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

    //Recebe como chave estrangeira o código da série
}
