package com.school.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "nota", schema = "heroku_fdafa744b3499e8")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GradeModel {

    @Id
    @Column(name = "nr_sequencia", length = 11)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gradeSequenceNumber;

    @Column(name = "nota_prim_bim")
    private Float firstBimesterGrade = 0f;

    @Column(name = "nota_seg_bim")
    private Float secondBimesterGrade = 0f;

    @Column(name = "nota_recup_prim_sem")
    private Float firstSemesterRecoverGrade = 0f;

    @Column(name = "nota_ter_bim")
    private Float thirdBimesterGrade = 0f;

    @Column(name = "nota_quar_bim")
    private Float fourthBimesterGrade = 0f;

    @Column(name = "nota_recup_seg_sem")
    private Float secondSemesterRecoverGrade = 0f;

    //Várias notas pertencem a um aluno
    @ManyToOne
    @JoinColumn(name = "cd_aluno", nullable = false)
    private StudentModel student;

    //Várias notas pertencem a uma disciplina
    @ManyToOne
    @JoinColumn(name = "cd_disciplina", nullable = false)
    private SubjectModel subject;

    //Várias notas pertencem a uma turma/série
    @ManyToOne
    @JoinColumn(name = "cd_serie", nullable = false)
    private SchoolDegreeModel schoolDegree;

}
